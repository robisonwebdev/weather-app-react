import React, { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
import '../../styles/components/main/Main.css';

const Main = () => {

    const fetchData = useCallback(() => {}, []);

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <main>Main</main>
    );
};

export default Main;