
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
const location_not_found = document.querySelector('.error');
const weather_body = document.querySelector('.weather-body');
const feels_like = document.querySelector('.feels-like');
const high = document.querySelector('.high');
const low = document.querySelector('.low');


async function checkWeather(city){
    const api_key="a69f7f7f7446193139f2094b83c39bc1";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weather_data = await fetch(`${url}`).then(response => response.json());


    if(weather_data.cod === `404`){
        location_not_found.style.display ="flex";
        weather_body.style.display="none";
        console.log("location not found!");
        return;
    }
    // fetch url se data laega aur json us responce ko string me convert karega
    // await hai kyunki ham chahte hai ki fetch sab data laye
    console.log(weather_data);
    weather_body.style.display="flex";
    location_not_found.style.display ="none";
    location_s.innerHTML = `${weather_data.name}`;
    location_ss.innerHTML = `${weather_data.sys.country}`;
    temperature.innerHTML = `${Math.round(weather_data.main.temp-273.15)}`;
    weather_status.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}`;
    wind.innerHTML = `${weather_data.wind.speed}`;
    feels_like.innerHTML = `${Math.round(weather_data.main.feels_like-273.15)}`;
    high.innerHTML = `${Math.round(weather_data.main.temp_max-272.15)}`;
    low.innerHTML = `${Math.round(weather_data.main.temp_min-274.15)}`;

    switch(weather_data.weather[0].main){
        case 'Clouds':
            status_Image.src = "assets/mostlycloudy.svg";
            break;
        case 'Clear':
            status_Image.src = "assets/clear.svg";
            break;
        case 'Rain':
            status_Image.src = "assets/rain.svg";
            break;
        case 'Haze':
            status_Image.src = "assets/hazy.svg";
            break;
        case 'Snow':
            status_Image.src = "assets/snow.svg";
            break;
    }
    
}


searchBtn.addEventListener('click', ()=>{
    checkWeather(input_Box.value);
});
 