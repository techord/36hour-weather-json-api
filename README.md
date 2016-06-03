# 36hour-weather-json-api

A simple JSON API server for getting the JSON format of current 36-hour weather information of a city in Taiwan.

I have hosted it on Heroku: [https://radiant-citadel-99024.herokuapp.com](https://radiant-citadel-99024.herokuapp.com)

You can also download and run yourself.

example:

url: http://localhost:3000/0

```javascript
{ number: 0,
  city: '台北市',
  current:
   [ { status: '多雲短暫陣雨或雷雨',
       ci: '舒適',
       startTime: '2016-06-02 06:00',
       endTime: '2016-06-02 18:00',
       max: '26',
       min: '23' },
     { status: '多雲短暫陣雨或雷雨',
       ci: '舒適',
       startTime: '2016-06-02 18:00',
       endTime: '2016-06-03 06:00',
       max: '24',
       min: '23' },
     { status: '多雲短暫陣雨或雷雨',
       ci: '舒適至悶熱',
       startTime: '2016-06-03 06:00',
       endTime: '2016-06-03 18:00',
       max: '28',
       min: '23' } ] }
```

## Dependencies
* Express
* cheerio
* request


