import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import '../../../styles/components/header/menu/MenuButton.css';

const MenuButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    const handleButton = () => {
        setShowMenu(!showMenu);
    };

    return (
        <section className='menu_button'>
            <button onClick={handleButton}>
                {showMenu ? <CloseIcon /> : <MenuIcon />}       
            </button>
            {showMenu ? <Menu /> : null}
        </section>
    );
};

export default MenuButton;