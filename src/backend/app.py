from flask import Flask, request
from flask_cors import CORS
import json 
from Making_Team_structure import *
from contractor_matching import *

app = Flask(__name__)

CORS(app, origins="http://localhost:3000")


@app.route('/say_hi', methods=['GET'])
def say_hi():
    return "Hi", 200

@app.route('/create_team_structure', methods=['POST'])
def create_team_structure():
   
    # Get the JSON data from the request
    data = request.json

    # Extract parameters from the JSON data
    project_description = data.get('description', '')
    location = data.get('location', 'Any')
    duration = data.get('duration', '')
    budget = data.get('budget', '')
    # response = get_team_structure(project_description=project_description,duration=duration,location=location,budget=budget)
    response = {
    "project_name": "Adventure Quest Mobile Game",
    "team": [
        {
            "experience": "5+ years",
            "location": "United States",
            "quantity": 2,
            "role": "Game Designer",
            "skills": [
                "Level Design",
                "Character Design",
                "User Experience"
            ]
        },
        {
            "experience": "4+ years",
            "location": "United States",
            "quantity": 4,
            "role": "Gameplay Programmer",
            "skills": [
                "Unity",
                "C#",
                "Game Mechanics"
            ]
        },
        {
            "experience": "3+ years",
            "location": "United States",
            "quantity": 3,
            "role": "Graphics Artist",
            "skills": [
                "2D/3D Animation",
                "Illustration",
                "Photoshop"
            ]
        },
        {
            "experience": "4+ years",
            "location": "United States",
            "quantity": 2,
            "role": "Backend Developer",
            "skills": [
                "Node.js",
                "Database Management",
                "Leaderboard Integration"
            ]
        },
        {
            "experience": "3+ years",
            "location": "United States",
            "quantity": 2,
            "role": "Frontend Developer",
            "skills": [
                "React.js",
                "Responsive Design",
                "API Integration"
            ]
        },
        {
            "experience": "3+ years",
            "location": "United States",
            "quantity": 3,
            "role": "Quality Assurance Tester",
            "skills": [
                "Game Testing",
                "Bug Reporting",
                "Version Control"
            ]
        },
        {
            "experience": "4+ years",
            "location": "United States",
            "quantity": 1,
            "role": "DevOps Engineer",
            "skills": [
                "Continuous Integration",
                "AWS",
                "Docker"
            ]
        },
        {
            "experience": "4+ years",
            "location": "United States",
            "quantity": 1,
            "role": "Marketing Specialist",
            "skills": [
                "User Acquisition",
                "Social Media Campaigns",
                "SEO"
            ]
        },
        {
            "experience": "6+ years",
            "location": "United States",
            "quantity": 1,
            "role": "Project Manager",
            "skills": [
                "Agile Methodologies",
                "Budget Management",
                "Team Coordination"
            ]
        },
        {
            "experience": "2+ years",
            "location": "United States",
            "quantity": 2,
            "role": "Customer Support Specialist",
            "skills": [
                "Game Support",
                "User Communication",
                "Issue Resolution"
            ]
        }
        ]
    }    
    return response


@app.route('/get_candidates',methods=['POST'])
def getMatches():
    data = request.json
    roles_input = data.get('roles_input',[])

    response = getTheCandidates(roles_input=roles_input)
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5005, debug=True)
