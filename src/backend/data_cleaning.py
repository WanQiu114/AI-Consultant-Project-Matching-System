import pandas as pd

file_path = 'H:/github projects/recommendation_system/ai-matching/datas/resume.csv'

df = pd.read_csv(file_path)

df.drop(df.columns[0], axis=1, inplace=True)

df['unique_id'] = df['person_id'].astype(str) + '_' + df['name']
df.drop(['person_id', 'name'], axis=1, inplace=True)


df.drop(['institution'], axis=1, inplace=True)

columns = ['unique_id'] + [col for col in df.columns if col != 'unique_id']
df = df[columns]





cleaned_file_path = 'H:/github projects/recommendation_system/ai-matching/datas/cleaned_resume.csv'
df.to_csv(cleaned_file_path, index=False)

print(f"Data cleaning completed. Cleaned data saved to {cleaned_file_path}")
