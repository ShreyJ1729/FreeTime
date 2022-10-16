from gcsa.google_calendar import GoogleCalendar

calendar = GoogleCalendar('your_email@gmail.com')
for event in calendar:
    print(event)