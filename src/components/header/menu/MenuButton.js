import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import '../../../styles/components/header/menu/MenuButton.css';

const MenuButton = () => {
    return (
        <section className='menu_button'>
            <button>
                <MenuIcon />
            </button>
        </section>
    );
};

export default MenuButton;