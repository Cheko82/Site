from flask import Flask, render_template
import json

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/todo")
def todo():
    return render_template("todo.html")


@app.route("/blog")
def blog():
    with open("./postlist.json", "r") as file:
        postlist = [l for l in json.load(file)]

    return render_template("blog.html", postlist=postlist)



app.run(debug=True)
