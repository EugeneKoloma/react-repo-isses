import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import IssuePage from './pages/IssuePage';

function App() {
    return (
        <Routes>
            <Route path={'*'} element={<ErrorPage/>}/>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/issue/:id'} element={<IssuePage/>}/>
        </Routes>
    );
}

export default App;
