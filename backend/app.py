"""Flask Application"""

# load libaries
from flask import Flask, jsonify
import sys

# init Flask app
app = Flask(__name__)

@app.route('/greeting/freetime/names')
def get_freetime(names):
    namelist = names.split("")