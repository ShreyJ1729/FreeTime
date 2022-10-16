from parseICS import getCalEvents, getLastMonth, processRepeatedEvents
from dateutil import rrule
import datetime

calendars = {
    "shrey": getCalEvents("shreyjoshi2004@gmail.com.ics"),
    "shivam": getCalEvents("siddaiya.shivam@gmail.com.ics"),
    "ethan": getCalEvents("ethanhzhang123@gmail.com.ics"),
    "max": getCalEvents("maxhartfield@gmail.com.ics")
}

events = {name: processRepeatedEvents(calendars[name]) for name in calendars}

def isFree(time, events):
    free = True
    for event in events:
        try:
            if time > event['start'] and time < event['end']:
                free = False
        except:
            pass
    return free

end = datetime.datetime.now(datetime.timezone.utc)
start = end - datetime.timedelta(days=7)
for dt in rrule.rrule(rrule.HOURLY, dtstart=start, until=end):
    shreyFree = isFree(dt, events['shrey'])
    shivamFree = isFree(dt, events['shivam'])
    ethanFree = isFree(dt, events['ethan'])
    maxFree = isFree(dt, events['max'])
    print(maxFree)