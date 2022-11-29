import React from 'react';
import '../../../styles/components/main/forecastNavigation/ForecastCard.css';

const ForecastCard = () => {
    return (
        <div className='forecast_card'>
            <div className='card_day'></div>
            <div className='card_weather'></div>
        </div>
    );
};

export default ForecastCard;