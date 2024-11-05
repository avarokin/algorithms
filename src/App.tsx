import React from 'react';
import './App.css';
import AppHeader from "./shared/AppHeader";
import { ThemeContextProvider } from './theme/ThemeContext';

function App() {

    return (
        <ThemeContextProvider>
            <div className="App">
                <header className="App-header">
                    <AppHeader />
                </header>
                {/* Rest of your app content */}
            </div>
        </ThemeContextProvider>
    );

}


export default App;
