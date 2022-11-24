import React from 'react';
import LightModes from './lightModes/LightModes';
import MenuButton from './menu/MenuButton';
import SearchBar from './search/SearchBar';
import '../../styles/components/header/Header.css';

const Header = ({ lightMode, setLightMode }) => {
    return (
        <header>
            <MenuButton />
            <SearchBar />
            <LightModes />
        </header>
    );
};

export default Header;