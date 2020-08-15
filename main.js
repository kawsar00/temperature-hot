//when click input box it becomes empty
let cityName =  document.getElementById("inputValue")
cityName.addEventListener("click", function(){
  cityName.value = ''
})

//coding for search button goes here
document.getElementById("src-btn").addEventListener("click", function(){
  if (cityName.value == 0) {
    alert('Please Input a Valid Country or City Name')
  }
  else{
    const api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=6eb21f16aa6a43deba40dd917edec2c7`
    fetch(api)
    .then(res => res.json())
    .then(displayData)
  }
})
//display data function
function displayData(data) {
  console.log(data)
  document.getElementById("country-name").innerHTML = `${data.name}, ${data.sys.country}`
  // document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)} &deg;C`
  const temp = data.main.temp
  document.getElementById("temp").innerHTML = temp.toFixed(1) + '&deg;C'
  document.getElementById("weather-el").innerHTML = data.weather[0].main
  
  //weather icon change
  const iconCode = data.weather[0].icon
  const iconUrl = "https://openweathermap.org/img/w/" + iconCode + ".png"
  document.getElementById("weather-icon").src = iconUrl
}