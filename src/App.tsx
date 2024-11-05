import React from 'react';
import './App.css';
import AppHeader from "./shared/AppHeader";
import { ThemeContextProvider } from './theme/ThemeContext';
import {Route, BrowserRouter, Routes} from "react-router-dom";
import BubbleSort from "./pages/BubbleSort";
import InsertionSort from "./pages/InsertionSort";

function App() {

    return (
        <ThemeContextProvider>
            <BrowserRouter>
                <div className="App">
                    <header className="App-header">
                        <AppHeader />
                    </header>
                    <Routes>
                        <Route path="/bubble-sort" element={<BubbleSort />} />
                        <Route path="/insertion-sort" element={<InsertionSort />} />
                        {/* Add routes for other algorithms here */}
                        {/* Optionally add a default route or 404 page */}
                    </Routes>
                </div>
            </BrowserRouter>
        </ThemeContextProvider>
    );

}


export default App;
