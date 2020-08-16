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
  
  //weather icon change
  const iconCode = data.weather[0].icon
  const iconUrl = "https://openweathermap.org/img/wn/" + iconCode + "@2x.png"

  // document.getElementById("temp").innerHTML = `${Math.round(data.main.temp)} &deg;C`
  document.getElementById("weather-icon").src = iconUrl
  const temp = data.main.temp
  const displayTemp = document.getElementById("temp")
  displayTemp.innerHTML = temp.toFixed(1) + '&deg;C'

  //convert celsius to fahrenheit
  displayTemp.addEventListener("click", function(){
    const fahrenheitTemp = temp * 1.8 + 32;
    displayTemp.innerHTML = fahrenheitTemp.toFixed(1) + '&deg;F'
  })
  document.getElementById("weather-el").innerHTML = data.weather[0].main
}