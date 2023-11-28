let btn =document.querySelector('#search')
let input=document.querySelector('input')
let temp=document.querySelector('.temp')
let humidity=document.querySelector('.humidity')
let wind=document.querySelector('.wind')
let mintemp=document.querySelector('.mintemp')
let maxtemp=document.querySelector('.maxtemp')



btn.addEventListener('click',async ()=>{
    let city=input.value
    let data= await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=7a70812681190434a7ce0cf5a6729f23`)
    let weather= await data.json()
    console.log(weather)
    temp.textContent= "Temperature: " + weather.main.temp +" Celsius"
    wind.textContent= "Wind Speed: " + weather.wind.speed +" m/s"
    mintemp.textContent= "Min Temperature: " + weather.main.temp_min +" Celsius"
   maxtemp.textContent= "Max Temperature: " + weather.main.temp_max +" Celsius"
   humidity.textContent= "Humidity: " + weather.main.humidity +"%"
})












































