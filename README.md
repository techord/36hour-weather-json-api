#36hour-weather-json-api

A simple JSON API server for getting the JSON format of current 36-hour weather information of a city in Taiwan.

I host it on Heroku: [https://radiant-citadel-99024.herokuapp.com](https://radiant-citadel-99024.herokuapp.com)

You can also download and run yourself.

example:

[https://radiant-citadel-99024.herokuapp.com/0](https://radiant-citadel-99024.herokuapp.com/0)

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
|city|number|
|---|---| 
|臺北市| 0 |
|新北市|1|
|桃園市|2|
|臺中市|3|
|臺南市|4|
|高雄市|5|
|基隆市|6|
|新竹縣|7|
|新竹市|8|
|苗栗縣|9|
|彰化縣|10|
|南投縣|11|
|雲林縣|12|
|嘉義縣|13|
|嘉義市|14|
|屏東縣|15|
|宜蘭縣|16|
|花蓮縣|17|
|臺東縣|18|
|澎湖縣|19|
|金門縣|20|
|連江縣|21|

## Dependencies
* Express
* cheerio
* request


