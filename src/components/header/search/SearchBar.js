import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import '../../../styles/components/header/search/SearchBar.css';

const SearchBar = ({ location, setLocation }) => {
    const [value, setValue] = useState(location);
    const placeHolder = `Search city...`;

    const handleSubmit = (event) => {
        event.preventDefault();
        setValue('');
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
                <input type='text' onChange={handleChange} placeholder={placeHolder} value={value} />
            </form>
        </section>
    );
};

export default SearchBar;