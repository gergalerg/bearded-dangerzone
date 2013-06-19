import os
import json
import urllib2
from flask import Flask, render_template, url_for

req = urllib2.urlopen('http://snapguide.com/api/v1/guide/b995492d5e7943e3b2757a88fe3ef7c6')
json_data = json.load(req)

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html', data=json_data)

port = int(os.environ.get('PORT', 5000))

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=port)
