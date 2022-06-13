const request = require("request");

const url= "http://api.weatherstack.com/current?access_key=1524cf8b01eb6e11745549ceef09da32&query=18.5204,73.8567&units=f"
request({url:url,json:true},(error,response)=>{
    // const data = JSON.parse(response.body);
    // console.log(response);
    // console.log(data);
    // console.log(data.current);
    // console.log(response.body.current);
    // const temp = response.body.current.temperature;
    // const feeling = response.body.current.feelslike;
    // console.log(temp);
    // console.log(feeling);
//     for the fahrenheit
//     const weatherdesciption = response.body.current.weather_descriptions[0];
//     const temp = response.body.current.temperature;
//     const feeling = response.body.current.feelslike;
//     console.log(temp);
//     console.log(feeling);
//     console.log(weatherdesciption);
})