let weather ={
    "openAPI" : "76394aa4a5a443205c3632dda0bba766",
    fetchWeather:function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
            + city 
            + "&units=metric&appid="
            +this.openAPI

        )
        .then((response) => {
            if (!response.ok) {
              alert("No weather is found.");
              throw new Error("No weather is found.");
            }
            return response.json();
          })
          .then((data) => this.displayWeather(data));


    },
    displayWeather: function(data){
        const { name } = data;
        const {icon,description } = data.weather[0];
        const { temp,humidity} = data.main;
        const{speed} = data.wind;
         console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".enteredcity").innerText = "Weather in " + name
        document.querySelector(".imgicon").src =
        "https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".about").innerText = description;
      document.querySelector(".temprature").innerText = temp + "°C";
      document.querySelector(".humid").innerText =
        "Humidity: " + humidity + "%";
      document.querySelector(".windspeed").innerText =
        "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
  
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-box").value);
    },
  };
  
  document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
  });
  
  document
    .querySelector(".search-box")
    .addEventListener("keyup", function (event) {
      if (event.key == "Enter") {
        weather.search();
      }
    });
    
