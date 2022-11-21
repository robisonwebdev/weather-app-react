import React from 'react';
import LightModes from './lightModes/LightModes';
import Menu from './menu/Menu';
import SearchBar from './search/SearchBar';
import '../../styles/components/header/Header.css';

const Header = ({ lightMode, setLightMode }) => {
    return (
        <header>
            <Menu />
            <SearchBar />
            <LightModes />
        </header>
    );
};

export default Header;