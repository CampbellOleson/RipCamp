import React from 'react';
const request = require('request');

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            conditions: null,
            temp: 0,
            speed: 0,
            dir: 0,
            humidity: 0,
        }
        this.weatherBalloon = this.weatherBalloon.bind(this);
    }

    weatherBalloon(lat, lng) {
        var apiKey = '0dcf4810c5eab930389294cf28665b02';
        let url = `https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${Math.floor(lat)}&lon=${Math.floor(lng)}&units=imperial&appid=${apiKey}`;

        request(url,  (err, response, body) => {
            if (err) {
                console.log('error:', err);
            } else {
                // console.log('body:', body);
                let weather = JSON.parse(body)
                // let weatherr = JSON.parse(body)
                this.setState((state) => {
                    return {
                        temp: weather.main.temp,
                        conditions: weather.weather[0].description,
                        speed: weather.wind.speed,
                        dir: weather.wind.deg,
                        humidity: weather.main.humidity,
                        // weather: weather.main
                    }
                })
            }
        })
        
    }

    componentDidMount() {
        const { spot } = this.props;
        this.weatherBalloon(spot.lat, spot.lng);
    }

    render() {
        const { conditions, temp, speed, dir, humidity } = this.state;

        const sky =
            this.state.conditions ?
                this.state.conditions.includes("cloud") ?
                    "https://ripcamp-dev.s3-us-west-1.amazonaws.com/cloudy.jpg"
                :
                "https://ripcamp-dev.s3-us-west-1.amazonaws.com/clear-sky.jpg"
                : null;
        
                
        const icon = 
            this.state.conditions ?
                this.state.conditions.includes("cloud") ?
                    <i class="fas fa-cloud fa-5x"></i>
                :
                    <i className="fas fa-sun fa-5x"></i>
                : null;
        
        
        return (
            <div className="weather">
                {/* <img src={sky} alt="" className="weather-pic"/> */}
                {icon}
                <h1 id="temp">{temp}&#176;F</h1>
                <p id="conditions">{conditions}</p>
                <p id="wind-speed">Wind: {speed} mph at {dir} &#176;</p>
                <p>Humidity: {humidity} g/m<sup>3</sup></p>
            
            </div>
        )
    }
}

export default Weather;