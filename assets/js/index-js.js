// CALENDAR JS


// WEATHER API
//Fetch user location
$(document).ready(function(){
    function getLocation(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(getWeather);
        }else{
            alert("Geolocation not supported by this browser");
        }
    }
//Sort by location i.e. longitude / latitude
function getWeather(position){
    let lat = position.coords.latitude;
    let long = position.coords.longitude;
    let API_KEY = "3c08c223f7924790dbebee106b70e779";
    let baseURL = `http://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&appid=${API_KEY}`;

//retrive data from API
//Since in Kelvin, subtract
// using jQuery
    $.get(baseURL,function(res){
        let data = res.current;
        let temp = Math.floor(data.temp - 273);
        let condition = data.weather[0].description;

        // Display data on the web page
        $('#temp-main').html(`${temp}°`);
        $('#condition').html(condition);
    })
        
}

getLocation();
})

