import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { RiGitRepositoryFill } from 'react-icons/ri';

const OrganizationPage = () => {
    const { organization, repository } = useParams()

    return (
        <>
            <div className={'flex items-center justify-center mb-3 pt-[50px]'}>
                <RiGitRepositoryFill className={'w-[24px] h-[24px] mr-2'}/>
                <h2 className={'text-[24px]'}>
                    {organization || 'No Organization provided'}
                    {repository && '/' + repository}
                </h2>
            </div>
            {!repository && (
                <>
                    <p className={'text-center text-gray-600 text-[36px] '}>
                        Provide into <code className={'text-blue-800 italic'}>URL</code> the right name of
                        organization's repository...
                    </p>
                    <p className={'text-center text-gray-600 text-[36px] '}>
                        Example: <span className={'italic'}>https://domain.com/org/your_repo_name/</span>
                    </p>
                </>
            )}
            <Outlet/>
        </>
    );
};

export default OrganizationPage;
