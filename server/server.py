from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/home")
def home():
    return jsonify

@app.route("/api/about")
def about():
    return

@app.route("/api/members")
def members():
    members_data = [
        {"name": "Jesse Härmälä", "role": "Kano noob"},
        {"name": "Ville Teräväinen", "role": "PR Master"},
        {"name": "Augusti Rokkanen", "role": "2for6 gamer"},
        {"name": "Kalle Kivilahti", "role": "Deck techer"}
    ]
    return jsonify({"members": members_data})

@app.route("/api/gallery")
def gallery():
    return

@app.route("/api/stats")
def stats():
    return jsonify({"message": "Armory WIN!"})

def main():
    app.run(debug=True)

if __name__ == "__main__":
    main()
 