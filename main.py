from flask import Flask, render_template
import json

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/todo")
def todo():
    return render_template("todo.html")


@app.route("/blogs")
def blog():

    with open("./postlist.json", "r") as file:
        blogs = json.load(file)

    return render_template("blog.html", blogs=blogs)


@app.route('/blogs/<title>')
def blogpost(title):
    # Load blogs from the JSON file
    with open('postlist.json', 'r') as file:
        blogs = json.load(file)

    # blog = blogs[title]
    return render_template(f'blogs/{title}.html', blog=blog)


if __name__ == "__main__":
    app.run(debug=True)
