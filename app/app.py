## This is our main python file where we will create our very own weather station

# Imports (very important :) )
import urllib2
import os
from geopy.geocoders import Nominatim
from dotenv import load_dotenv

# Environment
load_dotenv()

api_key= os.getenv("WEATHER_KEY")
geo_loc = os.getenv("GEO_LOC")
geo_user = os.getenv("GEO_USER")

# Getting the location
geolocator = Nominatim(user_agent=geo_user)
location = geolocator.geocode(geo_loc)

# Fetching the data
string = "https://api.openweathermap.org/data/2.5/onecall?lat={}&lon={}&appid={}".format(location.latitude, location.longitude, api_key)
contents = urllib2.urlopen(string).read()