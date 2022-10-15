"""Flask Application"""

# load libaries
from flask import Flask, jsonify
import sys

# init Flask app
app = Flask(__name__)

"""
'/add-user' endpoint:
- parameter: user uID
- appends user to firebase database

'/get-freetime' endpoint:
- parameters: two user uIDs
- calls calendar API to download calendars and return freetime object
''

"""