var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=0514d28b1a5297b9689f1cc9d55add60')
.then(response => response.json())
.then(data => {
  var tempValue = data['main']['temp'] - 273 ;
    var n = tempValue.toFixed(2)+" °C";
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];

  main.innerHTML = nameValue;
  desc.innerHTML = "Description - "+descValue;
  temp.innerHTML = "Temperature - "+n;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})
