import pandas as pd
import numpy as np
import joblib
import os
from sentence_transformers import SentenceTransformer

os.chdir(os.path.dirname(os.path.abspath(__file__)))

# Load pre-saved embeddings, candidate IDs, and KNN index
candidate_embeddings = np.load("embeddings.npy")
candidate_ids = np.load("candidate_ids.npy")
knn = joblib.load("knn_index.joblib")

# Load personnel data
personnel_df = pd.read_csv("candiate_data.csv")
details_df = pd.read_csv("person_details.csv")
# Initialize SentenceTransformer model
model = SentenceTransformer('all-MiniLM-L6-v2')

def parse_roles(roles):
    """
    Parse roles, generate embeddings, and structure role requirements.
    """
    role_embeddings = []
    for role in roles:
        role_text = f"Role: {role['role']}, Skills: {', '.join(role.get('skills', []))}, " \
                    f"Location: {role.get('location', 'Anywhere')}, Experience: {role.get('experience', 'Not Specified')}."
        embedding = model.encode(role_text)
        role_embeddings.append({
            "role": role['role'],
            "embedding": embedding,
            "skills": role.get('skills', []),
            "location": role.get('location', 'Anywhere'),
            "experience": role.get('experience', None),
            "quantity": role.get('quantity', 1)
        })
    return role_embeddings

def calculate_match_score(candidate, role, similarity, weight_similarity=0.9, weight_experience=0.1):
    """
    Calculate a match score based on similarity and experience.
    """
    experience_years = candidate['experience_years']
    return weight_similarity * similarity + weight_experience * experience_years

def match_roles_to_candidates(roles, knn, candidate_embeddings, candidate_ids, top_k=50):
    """
    Match roles to candidates based on role embeddings and similarity to candidate embeddings.
    """
    matches = []
    for role in roles:
        print(f"Matching candidates for role: {role['role']}...")
        role_vector = np.array(role["embedding"]).reshape(1, -1)
        distances, indices = knn.kneighbors(role_vector, n_neighbors=top_k)

        candidates = []
        for i, idx in enumerate(indices[0]):
            candidate_id = candidate_ids[idx]
            similarity = 1 - distances[0][i]  # Cosine similarity: 1 - distance

            candidate_row = personnel_df[personnel_df['person_id'] == candidate_id].iloc[0]
            
            # Handle remote roles (no location restriction)
            role_location = role['location'].strip().lower()

            if role_location != "anywhere" and role_location != "remote" and role_location not in candidate_row['country'].strip().lower():
                # Skip this candidate if location doesn't match (and role isn't remote)
                continue 
            
            # Calculate match score
            score = calculate_match_score(candidate_row, role, similarity)
            candidates.append({
                "person_id": candidate_id,
                "name": candidate_row['name'],
                "similarity": similarity,
                "experience_years": candidate_row['experience_years'],
                "skills": candidate_row['aggregated_skill'],
                "score": score
            })

        # Sort and take top matches
        candidates = sorted(candidates, key=lambda x: -x['score']) 
        matches.append({
            "role": role['role'],
            "candidates": candidates[:role["quantity"]] 
        })

        print(f"Found {len(candidates)} matches for role: {role['role']}.")

    return matches



def getTheCandidates(roles_input):


    for role in roles_input:
        role['quantity'] = 5 if role['quantity'] + 3 < 5 else role['quantity'] + 3

    # Parse roles and match candidates
    parsed_roles = parse_roles(roles_input)
    matches = match_roles_to_candidates(parsed_roles, knn, candidate_embeddings, candidate_ids)

    output_response = {}
    
    for match in matches:
        output_response[match['role']] = [
            {
                "person_id": int(candidate['person_id']),  # Convert numpy.int64 to int
                "first_name": details_df[details_df['person_id'] == int(candidate['person_id'])]["firstName"].iloc[0],
                "last_name": details_df[details_df['person_id'] == int(candidate['person_id'])]["lastName"].iloc[0],
                "email": details_df[details_df['person_id'] == int(candidate['person_id'])]["email"].iloc[0],
                "phone": details_df[details_df['person_id'] == int(candidate['person_id'])]["phone"].iloc[0],
                "similarity": float(candidate['similarity']),  # Convert to float if needed
                "experience_years": float(candidate['experience_years']),
                "skills": candidate['skills'],
                "score": float(candidate['score'])  # Convert to float for JSON serialization,
                
            }
            for candidate in match['candidates']
        ]

    return output_response

