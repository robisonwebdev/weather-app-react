import React from 'react';
import LightModes from './lightModes/LightModes';
import MenuButton from './menu/MenuButton';
import SearchBar from './search/SearchBar';
import '../../styles/components/header/Header.css';

const Header = ({ lightMode, location, setLightMode, setLocation }) => {
    return (
        <header>
            <MenuButton />
            <SearchBar location={location} setLocation={setLocation} />
            <LightModes />
        </header>
    );
};

export default Header;