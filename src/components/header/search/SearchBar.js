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
                <input type='text' onChange={handleChange} value={value} />
                <button type='submit'>
                    <SearchIcon />
                </button>
            </form>
        </section>
    );
};

export default SearchBar;