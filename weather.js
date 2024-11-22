const search = document.getElementById("search");
const temp = document.getElementById("temp"); // Ensure you have an element with this ID
const ws = document.getElementById("wind_speed"); // Ensure you have an element with this ID
const hmdty = document.getElementById("humidity"); // Ensure you have an element with this ID

function getData() {
    const city = search.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '81d09599acaa9807e777a24ee2387874',
            'X-RapidAPI-Host': 'openweathermap.org'
        }
    };

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=81d09599acaa9807e777a24ee2387874&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            temp.innerHTML = `${data.main.temp} °C`;
            ws.innerHTML = `${data.wind.speed} m/s`;
            hmdty.innerHTML = `${data.main.humidity} %`;
        })
        .catch(err => console.error(err));
}
