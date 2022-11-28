import React from 'react';
import LightModes from './lightModes/LightModes';
import MenuContainer from './menu/MenuContainer';
import SearchBar from './search/SearchBar';
import '../../styles/components/header/Header.css';

const Header = ({ lightMode, location, setLightMode, setLocation }) => {
    return (
        <header>
            <MenuContainer />
            <SearchBar location={location} setLocation={setLocation} />
            <LightModes />
        </header>
    );
};

export default Header;