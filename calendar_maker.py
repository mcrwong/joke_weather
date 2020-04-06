import json
import datetime

start_date = datetime.date(2019,1,1)
end_date = datetime.date(2020,1,1)
delta = datetime.timedelta(days=1)
calender = {}
ind = 0

while start_date < end_date:
    calender[ind] = {"month": start_date.strftime("%B"), "day": int(start_date.strftime("%d"))}
    start_date += delta
    ind += 1
with open('temp.json', 'w+') as outfile:
    json.dump(calender, outfile)