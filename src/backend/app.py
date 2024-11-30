from flask import Flask, request
import json 
from Making_Team_structure import *
from contractor_matching import *

app = Flask(__name__)

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

    response = get_team_structure(project_description=project_description,duration=duration,location=location,budget=budget)

    return json.loads(response)


@app.route('/get_candidates',methods=['POST'])
def getMatches():
    data = request.json
    roles_input = data.get('roles_input',[])

    response = getTheCandidates(roles_input=roles_input)
    return response

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
