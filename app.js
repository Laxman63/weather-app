const request=require('request');
 // const url="https://api.darksky.net/forecast/55ba7379cd27e3c06806b504fc69fab1/27.168650,72.594940";
    const url="https://api.darksky.net/forecast/55ba7379cd27e3c06806b504fc69fab1/27.168650";



request({url:url,json:true},(error,res)=>{
if(error){
	console.log("unable to connect plz check your network");
}
else if(res.body.error){
	console.log("unable to find location");
}
else{
console.log(res.body.daily.data[0].dewPoint);

}
// these are so important 
//console.log(res.longitude);
}) 

//const urlo="https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoibGF4bWFuNjM3NyIsImEiOiJjazl4MnJoZ2UwZXZhM2txc2x0aWNhdzM3In0.2LiC6jakk2uQ6SMJjuIDZg";
/*const urlo="https://api.mapbox.com/geocoding/v5/mapbox.places/.json?access_token=pk.eyJ1IjoibGF4bWFuNjM3NyIsImEiOiJjazl4MnJoZ2UwZXZhM2txc2x0aWNhdzM3In0.2LiC6jakk2uQ6SMJjuIDZg";
request({url:urlo,json:true},(error,res)=>{
	if(error)
		console.log("unable to connect");
	else if(res.body.error){
console,log("plz provide correct location");
	}
	else{
		console.log(res.body.features[0].center[1]);
		console.log(res.body.features[0].center[0]);

	}
	//console.log(res.body.features[0].center[1]);
	//	console.log(res.body.features[0].center[0]);

}) */