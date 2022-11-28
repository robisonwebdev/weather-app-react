import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from './Menu';
import '../../../styles/components/header/menu/MenuButton.css';

const MenuButton = () => {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <section className='menu_button'>
            <button>
                <MenuIcon />        
            </button>
            {showMenu ? <Menu /> : null}
        </section>
    );
};

export default MenuButton;