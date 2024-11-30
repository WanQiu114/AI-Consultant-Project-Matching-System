import pandas as pd
import random

file_path = 'H:/github projects/recommendation_system/ai-matching/datas/cleaned_resume.csv'
data = pd.read_csv(file_path)
total_entries = len(data)
if total_entries < 20:
    print(f"The dataset has only {total_entries} entries, fewer than 20.")
else:

    sample_data = data.sample(n=20, random_state=42)

    output_path = 'H:/github projects/recommendation_system/ai-matching/datas/cleaned_resume_sample_20.csv'
    sample_data.to_csv(output_path, index=False)
    print(f"Random sample of 50 entries saved to {output_path}")