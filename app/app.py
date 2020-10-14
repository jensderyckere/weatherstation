## This is our main python file where we will create our very own weather station

# Imports (very important :) )
import urllib2
import os
from geopy.geocoders import Nominatim
from dotenv import load_dotenv
from flask import Flask, render_template
import json

# Environment
load_dotenv()

api_key= os.getenv("WEATHER_KEY")
geo_loc = os.getenv("GEO_LOC")
geo_user = os.getenv("GEO_USER")

# Getting the location
geolocator = Nominatim(user_agent=geo_user)
location = geolocator.geocode(geo_loc)

# Server
app = Flask(__name__)

@app.route('/')
def index():
    # Fetching the data
    string = "https://api.openweathermap.org/data/2.5/onecall?lat={}&lon={}&appid={}".format(location.latitude, location.longitude, api_key)
    contents = urllib2.urlopen(string).read()
    data = json.loads(contents)
    forecast = data['daily']
    current = data['current']

    return render_template('index.html', forecast=forecast, current=current)

if __name__ == '__main__':
    app.run(debug=True)