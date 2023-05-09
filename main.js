
const input_Box = document.querySelector('.input-box');
const searchBtn = document.getElementById('search-btn');
//if you have problem in event listner try going by id in button
const location_s = document.querySelector('.location-city');
const temperature = document.querySelector('.temp');
const status_Image = document.querySelector('.weather-image');
const weather_status = document.querySelector('.status');
const humidity = document.querySelector('.humidity-status');
const wind = document.querySelector('.wind-status');
const location_ss = document.querySelector('.location-country');

async function checkWeather(city){
    const api_key="a69f7f7f7446193139f2094b83c39bc1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());
    // fetch url se data laega aur json us responce ko string me convert karega
    // await hai kyunki ham chahte hai ki fetch sab data laye
    console.log(weather_data);

    location_s.innerHTML = `${weather_data.name}`;
    location_ss.innerHTML = `${weather_data.sys.country}`;
    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}`;
    weather_status.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}`;
    wind.innerHTML = `${weather_data.wind.speed}`;
    
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(input_Box.value);
});
 