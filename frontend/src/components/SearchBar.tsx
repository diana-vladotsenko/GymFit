import React, { useState } from 'react';
import { Typeahead } from 'react-bootstrap-typeahead';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Button, Container } from 'react-bootstrap';

interface SearchBarProps {
    onSearch: (val: string) => void;
}

const options: string[] = ['Yoga', 'Manicure', 'Pedicure', 'Massage', 'Haircut'];

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [selected, setSelected] = useState<string[]>([]);

    const handleClick = () => {
        if (selected.length > 0) {
            onSearch(selected[0]);
        }
    };

    return (
        <Container className="p-0 d-flex flex-column align-items-start">
            <Typeahead
                id="search-bar"
                options={options}
                placeholder="Search services..."
                selected={selected}
                className="w-100 mb-2"
            />
            <button onClick={handleClick} className="primary-button primary-button--s">
                <span>Search</span>
            </button>
        </Container>
    );
};

export default SearchBar;
