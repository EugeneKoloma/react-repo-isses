import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const HomePage = () => {
    const { organization } = useParams()
    return (
        <div className={'pt-[50px]'}>
            {!organization && (
                <>
                    <h1 className={'text-[24px] text-gray-600 text-center max-w-[80%] mx-auto'}>Use navigation menu to
                        reach
                        facebook/react
                        issues
                        finder...</h1>
                    <p className={'text-[24px] text-gray-600 text-center max-w-[80%] mx-auto'}>
                        or provide <span className={'italic text-[18px'}>url</span> example:
                    </p>
                    <p className={'text-[24px] text-blue-600 text-center max-w-[80%] mx-auto italic'}>
                        http://domain/org/repo/issues</p>
                </>
            )}
            <Outlet/>
        </div>
    );
};

export default HomePage;
