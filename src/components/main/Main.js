import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/components/main/Main.css';

const Main = ({ location }) => {
    const [latitude, setLatitude] = useState('');
    const [longitude, setLongitude] = useState('');

    const fetchCoordinates = useCallback(() => {
        if (location === '') return null;

        const coordinates_API = `http://api.positionstack.com/v1/forward?access_key=f2ca9cc4bfa0018f4848c0055b36aacb&query=${location}`;

        axios
        .get(coordinates_API)
        .then(res => {
            setLatitude(res.data.data[0].latitude)
            setLongitude(res.data.data[0].longitude);
        })
        .catch(err => console.log(err));
    }, [location]);

    const fetchData = useCallback(() => {
        if (latitude === '' || longitude === '') return null;

        const weather_API = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=623af812f25cabf72aec314e2671a2c6`;

        axios
        .get(weather_API)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }, [latitude, longitude]);

    // Gets coordinates based on city or zip code
    useEffect(() => {
        fetchCoordinates();
    }, [fetchCoordinates]);

    // Gets weather information based on coordinates
    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <main>
            {/* {console.log(latitude, longitude)} */}
            Main
        </main>
    );
};

export default Main;