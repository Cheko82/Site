from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def hello_world():
    return render_template("index.html")

@app.route("/todo")
def hello_world():
    return render_template("todo.html")

app.run(debug=True)