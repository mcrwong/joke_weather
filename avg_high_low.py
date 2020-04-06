import json

with open('historical_day_data.json') as json_file:
    data = json.load(json_file)
    year = {}
    for day in data:
        if day['date'] not in year:
            year[day['date']] = {'high': day['high_temp'], 'low': day['low_temp'], 'count': 1}
        else:
            max = (year[day['date']]['high'] * year[day['date']]['count'] + day['high_temp'])/(year[day['date']]['count'] + 1)
            min = (year[day['date']]['low'] * year[day['date']]['count'] + day['low_temp'])/(year[day['date']]['count'] + 1)
            year[day['date']]['high'] = max
            year[day['date']]['low'] = min
            year[day['date']]['count'] += 1
    for key in year.keys():
        year[key]['avg'] = int(round((year[key]['high'] + year[key]['low'])/2))
        year[key]['high'] = int(round(year[key]['high']))
        year[key]['low'] = int(round(year[key]['low']))
    with open('avg_year_temps.json', 'w+') as outfile:
        json.dump(year, outfile)
