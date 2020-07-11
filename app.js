const request=require('request');
const url="https://api.darksky.net/forecast/55ba7379cd27e3c06806b504fc69fab1/15.314,75.78";


request({url:url},(error,res)=>{
console.log(res);
})