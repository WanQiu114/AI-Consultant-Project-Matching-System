from openai import OpenAI
client = OpenAI(api_key="")



def get_team_structure(project_description,duration,budget,location):
    try:
        # Create a chat completion
        response = client.chat.completions.create(
                    model="gpt-4o-2024-08-06",
                    messages=[
                    {
                        "role": "system",
                        "content": "You will create the team structure based on the given project description."
                    },
                    {
                        "role": "user",
                        "content": f"{project_description}. I whould like to have people from {location}. My budget for porject is {budget} and i want it done in {duration}"
                    }
                    ],
                    response_format={
                        "type": "json_schema",
                        "json_schema": {
                            "name": "project_description_schema",
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "project_name": {
                                    "description": "Suggested project name.",
                                    "type": "string"
                                },
                                "team": {
                                    "description": "Array of team members with specific roles, skills, and their count.I want it in order of role thne skills , location , experience , quantity.",
                                    "type": "array",
                                    "items": {
                                        "type": "object",
                                            "properties": {
                                            "role": {
                                            "type": "string",
                                                "description": "Type of team member, e.g., frontend developer, backend developer, business analyst, or DevOps engineer."
                                            },
                                            "skills": {
                                                "type": "array",
                                                "description": "Skills required for the team member, based on the project description. Include up to 3-4 skills.",
                                                "items": {
                                                "type": "string",
                                                "description": "Individual skill."
                                            }
                                        },
                                        "location": {
                                        "type": "string",
                                        "description": "Specified location from the description, or '' if none is mentioned."
                                        },
                                        "experience": {
                                            "type": "string",
                                            "description": "Number of years of experience required for this role."
                                        },
                                        "quantity": {
                                            "type": "integer",
                                            "description": "Number of team members needed for this role."
                                        }
                                    },
                                    "additionalProperties": False
                                }
                            }
                        },
                        "additionalProperties": False
                    }
                }
            })


        # Extract and return the message content from the response
        return response.choices[0].message.content


    except Exception as e:
        return f"An error occurred: {str(e)}"

data = {
    "description":"I run a fitness studio, and I want a mobile app where members can view class schedules, book spots in classes, and pay for memberships. The app should also send reminders about upcoming classes.",
    "location":"any",
    "duraion":"9 Months",
    "budget":"600000"
}

