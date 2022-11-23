import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../../../styles/components/header/search/SearchBar.css';

const SearchBar = () => {
    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <section className='header_search_bar'>
            <form onSubmit={handleSubmit}>
                <button type='submit'>
                    <SearchIcon />
                </button>
                <input type='text' onChange={handleChange} value={value} />
            </form>
        </section>
    );
};

export default SearchBar;