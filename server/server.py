from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/home")
def home():
    return jsonify({"message": "Welcome to Team Lahti!"})

@app.route("/api/about")
def about():
    with open("aboutus.txt", "r", encoding="utf-8") as file:
        about_text = file.read()
    return jsonify({"about": about_text})

@app.route("/api/members")
def members():
    members_data = [
        {"name": "Jesse Härmälä", "role": "Kano noob"},
        {"name": "Ville Teräväinen", "role": "PR Master"},
        {"name": "Kalle Kivilahti", "role": "instant speed enjoyer"}
    ]
    return jsonify({"members": members_data})

@app.route("/api/gallery")
def gallery():
    return jsonify([])

@app.route("/api/stats")
def stats():
    stats_data = [
        {"stat": "Jesse Härmälä: Battle Hardened Warsaw 1st on Kano"},
        {"stat": "Jesse Härmälä: Multiple PQ and RtN 2nd on Kano"},
        {"stat": "Jesse Härmälä: Multiple PQ and RtN Top8s on Kano"},
        {"stat": "Ville Teräväinen: Calling Warsaw, Worlds Osaka and Pro Tour Amsterdam Day2"},
        {"stat": "Ville Teräväinen: Turku and Tampere PQ/RtN 1st on Kayo"},
        {"stat": "Ville Teräväinen: Oulu PQ 1st on Aurora"},
        {"stat": "Ville Teräväinen: Multiple national level Top8s on multitude of aggro heroes"},
        {"stat": "Kalle Kivilahti: Multiple PQ and RtN Top8s on Kano and Oscilio"}
    ]
    return jsonify({"stats": stats_data})

def main():
    app.run(debug=True)

if __name__ == "__main__":
    main()
