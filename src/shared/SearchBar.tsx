import React, {SyntheticEvent, useState} from 'react';
import { TextField, Autocomplete } from '@mui/material';
import './SearchBar.css';
import {useNavigate} from "react-router-dom";

interface Option {
    label: string;
    path: string;
}

const options: Option[] = [

    { label: "Bubble Sort", path: "/bubble-sort" },
    { label: "Insertion Sort", path: "/insertion-sort" },

];

export default function SearchBar({ isDarkMode }: { isDarkMode: boolean }) {
    const [inputValue, setInputValue] = useState('');
    const [selectedValue, setSelectedValue] = useState<Option | null>(null); // Change type to Option | null
    const navigate = useNavigate(); // Initialize useNavigate

    const handleInputChange = (_event: SyntheticEvent, value: string) => {
        setInputValue(value);
    };

    const handleChange = (_event: SyntheticEvent, newValue: Option | null) => { // Change type to Option | null
        setSelectedValue(newValue);
        if (newValue) {
            navigate(newValue.path); // Navigate to the selected path
        }
    };

    return (
        <div className={`search-bar ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
            <Autocomplete
                value={selectedValue} // Pass the selected object
                onChange={handleChange}
                inputValue={inputValue}
                onInputChange={handleInputChange}
                options={options}
                getOptionLabel={(option) => option.label}
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
