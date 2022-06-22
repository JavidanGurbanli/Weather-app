var input = document.getElementById("input");
var btn = document.getElementById("submit");
var city = document.getElementById("city");
var temp = document.getElementById("temp");
var desc = document.getElementById("desc");
var wind = document.getElementById("wind");
var icon = document.getElementById("icon");

btn.addEventListener("click",function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=144991b9cc8f8b92d6151f7922855003')
    .then(res => res.json())
    .then(data => {
        var name = data['name']
        var description = data['weather']['0']['description']
        var temperature = data['main']['temp']
        var speed = data['wind']['speed']
        var ic = data['weather']['0']['icon']
        city.innerText=`Weather in ${name}`
        temp.innerText = `Temperature: ${(temperature - 273).toFixed(2)} °C`
        icon.src="https://openweathermap.org/img/wn/" + ic + ".png";
        desc.innerText = `${description}`
        wind.innerText = `Wind speed: ${speed} km/h`
    })
    .catch(err => {
       alert("You entered wrong city name")
    })
})