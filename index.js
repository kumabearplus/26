#!/usr/bin/env node

var axios = require('axios')
var data = {}

if (process.argv[2]) {
  data.params = {
    city: process.argv[2]
  }
}

axios.get('http://api.jirengu.com/weather.php',data)
     .then(function (response) {
       // console.log(response.data)
       var weather = response.data.results[0].weather_data[0]
       var obj = response.data.results[0]
       console.log('城市：' + obj.currentCity)
       console.log('日期：' + weather.date)
       console.log('天气：' + weather.weather)
       console.log('气温：' + weather.temperature)
       console.log('风向：' + weather.wind)
       console.log('\n')
       console.log('近几日天气预报')
       console.log(obj.weather_data[1].date + '：' 
                 + obj.weather_data[1].weather 
                 + obj.weather_data[1].temperature 
                 + obj.weather_data[1].wind)
       console.log(obj.weather_data[2].date + '：' 
                 + obj.weather_data[2].weather 
                 + obj.weather_data[2].temperature 
                 + obj.weather_data[2].wind)
       console.log(obj.weather_data[3].date + '：' 
                 + obj.weather_data[3].weather 
                 + obj.weather_data[3].temperature 
                 + obj.weather_data[3].wind)

     })
     .catch(function(error){
       console.log('出错了')
     })