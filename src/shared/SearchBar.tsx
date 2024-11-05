import React, {SyntheticEvent, useState} from 'react';
import { TextField, Autocomplete } from '@mui/material';
import './SearchBar.css';

const options = ["Algorithm 1", "Algorithm 2", "Binary Search", "Bubble Sort", "Merge Sort"];

export default function SearchBar({ isDarkMode }: { isDarkMode: boolean }) {
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState<string | null>(null);

    const handleInputChange = (_event: SyntheticEvent, value: string) => {
        setInputValue(value);
    };

    const handleChange = (_event: SyntheticEvent, newValue: string | null) => {
        setSelectedValue(newValue);
    };

    return (
        <div className={`search-bar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Autocomplete
                value={selectedValue}
                onChange={handleChange}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                options={options}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        variant="outlined"
                        fullWidth
                    />
                )}
            />
        </div>
    );

}
