import React from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';

const RepositoryComponent = () => {
    const location = useLocation()
    return (
        <>
            {!location.pathname.includes('issue') && (
                <Link className={'block text-blue-800 italic text-center w-full underline'}
                      to={location.pathname + '/issues'}>Go to issues</Link>
            )}
            <Outlet/>
        </>
    );
};

export default RepositoryComponent;
