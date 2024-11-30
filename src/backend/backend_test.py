from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import openai
import numpy as np

app = Flask(__name__)
CORS(app) 

resume_data_path = 'H:/github projects/recommendation_system/ai-matching/datas/cleaned_resume_sample_20.csv'
resumes = pd.read_csv(resume_data_path)
openai.api_key = "use your own key"
openai.api_base = "https://api.deepseek.com"

def evaluate_candidate(candidate, project_description):
    response = openai.ChatCompletion.create(
        model="deepseek-chat",
        messages=[
            {"role": "system", "content": "You are a helpful assistant."},
            {"role": "user", "content": f"Please evaluate the suitability of this candidate for the following project: \n\n{project_description}\n\nCandidate information: {candidate}"},
        ],
        stream=False
    )
    evaluation = response.choices[0].message['content'].strip()
    return evaluation

@app.route('/api/findBestCandidates', methods=['POST'])
def find_best_candidates():
    data = request.get_json()
    project_description = data.get('projectDescription', '')

    candidates = resumes.apply(lambda row: {
        "unique_id": row['unique_id'],
        "aggregated_abilities": row['aggregated_abilities'],
        "program": row['program'],
        "latest_location": row['latest_location'],
        "experience_years": row['experience_years'],
        "firm_list": row['firm_list'],
        "aggregated_skill": row['aggregated_skill'],
    }, axis=1)

    top_candidates_list = []
    for index, candidate in enumerate(candidates):
        try:
            candidate_summary = f"Aggregated Abilities: {candidate['aggregated_abilities']}, Program: {candidate['program']}, Latest Location: {candidate['latest_location']}, Experience Years: {candidate['experience_years']}, Firm List: {candidate['firm_list']}, Aggregated Skill: {candidate['aggregated_skill']}"
            evaluation = evaluate_candidate(candidate_summary, project_description)
            top_candidates_list.append({
                "unique_id": candidate['unique_id'],
                "recommendation": evaluation
            })
        except Exception as e:
            print(f"Error evaluating candidate {index}: {e}")

    # top 3 candidate
    top_candidates_list = top_candidates_list[:3]  #this can change , for example 10, it will show 10 candidate

    return jsonify(topCandidates=top_candidates_list)

if __name__ == '__main__':
    app.run(port=5000, debug=True)
