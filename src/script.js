function newtime(now){
    let currenttime = document.querySelector(`#monday`)

let hour = now.getHours()
let min = now.getMinutes()
let day = now.getDay()

if (min < 10) {
  min = `0${min}`
}
if (hour < 10){
  hour = `0${hour}`
}
let days = [
  `sunday`,
  `monday`,
  `tuesday`,
  `wednesday`,
  `thursday`,
  `friday`,
  `saturday`,
]
let time = `${days[now.getDay()]} ${hour}:${min}`
currenttime.innerHTML = `${time}`
    
}
function forecast(){
    
    let days = [`mon`, `tue`, `wed`, `thr`, `fri`]
    let forecastHTML = ``

    days.forEach(function(day){
        forecastHTML += `<div class="weekday"><div class="forecast-day">${day}</div>
        <div class="forecast-icon"><img src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/few-clouds-day.png"></div>
        <div class="forecast-temp">
            <div class="fore-temp"><strong>31°</strong></div>
            <div class="fore-temp">22°</div>
        </div></div>`
    })
    let forecastElement = document.querySelector(`#waether-forecast`)
    forecastElement.innerHTML = forecastHTML
}
function changeHTML(responde){
    let temperatureElement = document.querySelector(`#temp-num`)
    let newcity = document.querySelector(`#mcity`)
    let condition = document.querySelector(`#condition`)
    let humidity = document.querySelector(`#humidity`)
    let wind = document.querySelector(`#wind`)
    let icon = document.querySelector(`#temp-icon`)
    let temperature = Math.round(responde.data.temperature.current) 
    let speed = Math.round(responde.data.wind.speed)
    let nowt = new Date(responde.data.time * 1000)

    icon.innerHTML = `<img src="${responde.data.condition.icon_url}" ></img>`
    newcity.innerHTML = responde.data.city
    condition.innerHTML = responde.data.condition.description
    humidity.innerHTML = responde.data.temperature.humidity
    wind.innerHTML = speed
    temperatureElement.innerHTML = temperature
    newtime(nowt)
    
}

function searchcity(city){
    let key = `313bd4cf07a141554b6c1ta1037bbboc`
    let apiurl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${key}`
    
    axios.get(apiurl).then(changeHTML)
}

function searchsubmit(event){
    event.preventDefault()
    let searchinput = document.querySelector(`#searchbutton`)
    

    searchcity(searchinput.value)
}
let now = new Date()
newtime(now)
forecast()
let search = document.querySelector(`#search`)
search.addEventListener(`submit`,searchsubmit)