import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { RiGitRepositoryFill } from 'react-icons/ri';

const OrganizationPage = () => {
    const { organization, repository } = useParams()
    return (
        <>
            <div className={'flex items-center justify-center mb-3'}>
                <RiGitRepositoryFill className={'w-[24px] h-[24px] mr-2'}/>
                <h2 className={'text-[24px]'}>
                    {organization || 'No Organization provided'}
                    {repository && '/' + repository}
                </h2>
            </div>
            <Outlet/>
        </>
    );
};

export default OrganizationPage;
