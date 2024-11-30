

import pandas as pd
import openai
import numpy as np


resume_data_path = 'H:/github projects/recommendation_system/ai-matching/datas/cleaned_resume.csv'
resumes = pd.read_csv(resume_data_path)

openai.api_key = "use your key"
openai.api_base = "https://api.deepseek.com"

project_description = """


"""

# function for evaluate
def evaluate_candidate(candidate, project_description):
    response = openai.ChatCompletion.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"Please evaluate the suitability of this candidate for the following project: \n\n{project_description}\n\nCandidate information: {candidate}"},
        ],
        stream=False
    )
    
    matching_score = float(response.choices[0].message['content'].strip())
    return matching_score

# candidate summaries for OpenAI input
candidates = resumes.apply(lambda row: {
    "aggregated_abilities": row['aggregated_abilities'],
    "program": row['program'],
    "latest_location": row['latest_location'],
    "experience_years": row['experience_years'],
    "firm_list": row['firm_list'],
    "aggregated_skill": row['aggregated_skill'],
}, axis=1)

# evaluate candidate
matching_scores = []
for index, candidate in enumerate(candidates):
    try:
        candidate_summary = f"Aggregated Abilities: {candidate['aggregated_abilities']}, Program: {candidate['program']}, Latest Location: {candidate['latest_location']}, Experience Years: {candidate['experience_years']}, Firm List: {candidate['firm_list']}, Aggregated Skill: {candidate['aggregated_skill']}"
        score = evaluate_candidate(candidate_summary, project_description)
        matching_scores.append((index, score))
    except Exception as e:
        print(f"Error evaluating candidate {index}: {e}")
        matching_scores.append((index, -np.inf))  


matching_scores = sorted(matching_scores, key=lambda x: x[1], reverse=True)



top_10_candidates = [resumes.iloc[index] for index, score in matching_scores[:10]]
pd.DataFrame(top_10_candidates).to_csv('H:/github projects/recommendation_system/ai-matching/datas/top_10_candidates.csv', index=False)
