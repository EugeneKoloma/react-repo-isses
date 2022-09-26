import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Home.page';
import NotFoundPage from './pages/NotFound.page';
import OrganizationPage from './pages/Organization.page';
import RepositoryComponent from './components/Respositories/Repository.component';
import IssuesComponent from './components/Issues/Issues.component';
import IssueComponent from './components/Issues/Issue.component';

function App() {
    return (
        <Routes>
            <Route path={'*'} element={<NotFoundPage/>}/>
            <Route index element={<HomePage/>}/>
            <Route path={':organization'} element={<OrganizationPage/>}>
                <Route path={':repository'} element={<RepositoryComponent/>}>
                    <Route path={'issues'} element={<IssuesComponent/>}/>
                    <Route path={'issue/:id'} element={<IssueComponent/>}/>
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
