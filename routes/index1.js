var express = require('express');
var router = express.Router();

var request = require("request");
var cheerio = require("cheerio");


//var cities = [];

function timesimpler(s) {
    aa = s.split('T');
    t1 = aa[0]
    t2 = aa[1].split(':')[0];
    //console.log(t1+' '+t2+':00');
    return t1 + ' ' + t2 + ':00';
};
/* GET home page. */


router.get('/', function(req, res, next){
    res.send("You are using  a JSON API for current 36-hour weather of a city in Taiwan. </br> Give this url a parameter 0~21 for 台北市 to 連江縣.");
});


router.get('/:id', function(req, res, next) {
    //console.log(req.params);
    //
    var acity = parseInt(req.params.id);
    // 台南市的氣溫
    //var url = "http://www.wunderground.com/weather-forecast/zmw:00000.1.59358";
    var url = "http://opendata.cwb.gov.tw/opendataapi?dataid=F-C0032-001&authorizationkey=CWB-6CD162BB-4031-44D1-BA1E-7F4945189DE8"

    // 取得網頁資料
    request(url, function(error, response, body) {
        if (!error && typeof(acity)=='number' && acity>=0 && acity<22) {
            // 用 cheerio 解析 html 資料
            var cities = [];
            var $ = cheerio.load(body);

            $('locationName').each(function(citynum, elem) {

                var o = $('location').eq(citynum).find('weatherElement').first();

                var status = o.find('parameterName');

                a = status.eq(0).text();
                b = status.eq(1).text();
                c = status.eq(2).text();

                var t = o.find('startTime');
                a1 = t.eq(0).text();
                a1 = timesimpler(a1);
                b1 = t.eq(1).text();
                b1 = timesimpler(b1)
                c1 = t.eq(2).text();
                c1 = timesimpler(c1)

                // k = { status: a, startTime: d};
                //console.log(k);


                var t = o.find('endTime');
                a2 = t.eq(0).text();
                a2 = timesimpler(a2);
                b2 = t.eq(1).text();
                b2 = timesimpler(b2)
                c2 = t.eq(2).text();
                c2 = timesimpler(c2)

                var o = o.next(); //第二個weatherElement tag

                var temp = o.find('parameter').find('parameterName');
                a3 = temp.eq(0).text();
                b3 = temp.eq(1).text();
                c3 = temp.eq(2).text();


                var o = o.next(); //第三個weatherElement tag
                var temp = o.find('parameter').find('parameterName');
                a4 = temp.eq(0).text();
                b4 = temp.eq(1).text();
                c4 = temp.eq(2).text();

                var o = o.next(); //第三個weatherElement tag
                var temp = o.find('parameter').find('parameterName');
                a5 = temp.eq(0).text();
                b5 = temp.eq(1).text();
                c5 = temp.eq(2).text();

                json = { number: citynum, city: $(this).text(), current: [{ status: a, ci: a5, startTime: a1, endTime: a2, max: a3, min: a4 }, { status: b, ci: b5, startTime: b1, endTime: b2, max: b3, min: b4 }, { status: c, ci: c5, startTime: c1, endTime: c2, max: c3, min: c4 }] };

                cities[citynum] = json;
                
                console.log(cities[citynum].city);
                
            });
            //console.log(cities[0]);
            res.cities = cities[req.params.id];

            next();
        } else {
            console.log("擷取錯誤：" + error);
            res.send("error! Give 0~21");
        }
        
    });
    
});

router.get('/:id', function(req, res, next) {
    //res.render('index', { title: 'Express' });
    console.log("擷取縣市:"+ req.params.id);
    res.json(res.cities);
});

module.exports = router;