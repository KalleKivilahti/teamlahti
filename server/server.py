from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/home")
def home():
    return jsonify({"message": "Hello World!"})

@app.route("/api/about")
def about():
    return jsonify({"message": "About World!"})

@app.route("/api/members")
def members():
    return "Jesse Härmälä"

def main():
    app.run(debug=True)

if __name__ == "__main__":
    main()
