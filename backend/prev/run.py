from Google import Create_Service

CLIENT_SECRET_FILE = "flask-backend.json"
SCOPES = ['https://www.googleapis.com/auth/calendar.readonly']


service = Create_Service(CLIENT_SECRET_FILE, "calendar", "v3", SCOPES)