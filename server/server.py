from flask import Flask, jsonify
from flask_cors import CORS
import requests

app = Flask(__name__)
CORS(app)

@app.route("/api/home")
def home():
    return jsonify({"message": "Team Lahti"})

@app.route("/api/about")
def about():
    return jsonify({"message": "About World!"})

@app.route("/api/members")
def members():
    members_data = [
        {"name": "Kalle Kivilahti", "role": "Strategist"},
        {"name": "Jesse Härmälä", "role": "Kano noob"},
        {"name": "Ville Teräväinen", "role": "PR Master"},
        {"name": "Augusti Rokkanen", "role": "2for6 gamer"}
    ]
    return jsonify({"members": members_data})


@app.route("/api/stats")
def stats():
    return jsonify({"message": "Armory WIN!"})

def main():
    app.run(debug=True)

if __name__ == "__main__":
    main()
 