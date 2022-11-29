import React from 'react';
import '../../../styles/components/main/forecastNavigation/ForecastCard.css';

const ForecastCard = () => {
    const getForecastDay = () => {};

    const getWeatherIcon = () => {};

    return (
        <div className='forecast_card'>
            <div className='card_day'>
                <h3>{getForecastDay()}</h3>
            </div>
            <div className='card_weather'>
                {getWeatherIcon()}
            </div>
        </div>
    );
};

export default ForecastCard;