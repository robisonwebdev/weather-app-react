import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import '../../../styles/components/header/menu/MenuButton.css';

const MenuButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <section className='menu_button'>
            <button>
                {showMenu ? <CloseIcon /> : <MenuIcon />}       
            </button>
            {showMenu ? <Menu /> : null}
        </section>
    );
};

export default MenuButton;