import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/components/main/Main.css';

const Main = ({ location }) => {
    const [coordinates, setCoordinates] = useState('');

    const fetchCoordinates = useCallback(() => {
        if (location === '') return null;

        const coordinates_API = `http://api.positionstack.com/v1/forward?access_key=f2ca9cc4bfa0018f4848c0055b36aacb&query=${location}`;

        axios
        .get(coordinates_API)
        .then(res => {
            const latitude = res.data.data[0].latitude;
            const longitude = res.data.data[0].longitude;
            const fullCoordinates = `${latitude}, ${longitude}`;

            setCoordinates(fullCoordinates);
        })
        .catch(err => console.log(err));
    }, [location]);

    const fetchData = useCallback(() => {}, []);

    useEffect(() => {
        fetchCoordinates();
    }, [fetchCoordinates]);

    return (
        <main>
            {console.log(coordinates)}
            Main
        </main>
    );
};

export default Main;