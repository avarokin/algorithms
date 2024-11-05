import React from 'react';
import {AppBar, Toolbar, TextField, IconButton, Typography, Box} from '@mui/material';
import {Brightness4, Brightness7} from "@mui/icons-material";
import {useThemeContext} from "../theme/ThemeContext";
import SearchBar from "./SearchBar";


export default function AppHeader() {
    const {toggleTheme, darkMode} = useThemeContext();

    return (
        <AppBar position="static">
            <Toolbar sx={{ display: 'flex' }}>
                <Typography variant="h6" style={{ flexGrow: 0 }}>
                    Algorithm Visualizer
                </Typography>
                <Box sx={{ flexGrow: 1, margin: 1, marginLeft: 5,  }}>
                    <Box width="50%">
                        <SearchBar isDarkMode={darkMode} />
                    </Box>
                </Box>
                <IconButton color="inherit" onClick={toggleTheme}>
                    {darkMode ? <Brightness7 /> : <Brightness4 />}
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}
