import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.page';
import NotFoundPage from './pages/NotFound.page';
import IssuePage from './pages/Issue.page';

function App() {
    return (
        <Routes>
            <Route path={'*'} element={<NotFoundPage/>}/>
            <Route path={'/'} element={<HomePage/>}/>
            <Route path={'/issue/:id'} element={<IssuePage/>}/>
        </Routes>
    );
}

export default App;
