import React, { useState } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import '../../../styles/components/header/lightModes/LightModes.css';

const LightModes = () => {
    const [lightMode, setLightMode] = useState(true);

    const handleModeChange = () => {
        setLightMode(!lightMode);
    };

    return (
        <section className='light_modes'>
            <div className='mode_btns'>
                <button className='dark_mode'>
                    <DarkModeIcon />
                </button>
                <button className='light_mode'>
                    <LightModeIcon />
                </button>
            </div>
        </section>
    );
};

export default LightModes;