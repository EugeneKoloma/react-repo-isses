import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Header = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState<boolean>(false)

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <header className={'w-screen z-10 fixed bg-zinc-300 drop-shadow-lg p-2'}>
            <div className={'flex justify-between md:justify-center items-center w-full'}>
                <div className={'flex'}>
                    <p className={'first-letter:text-teal-700 text-lg font-bold text-xl'}>Issues</p>
                    <p className={'first-letter:text-teal-700 text-lg font-bold text-xl'}>Searcher</p>
                </div>
                <nav className={'hidden md:block md:mx-auto'}>
                    <ul className={'flex'}>
                        <li className={'group'}><Link className={'group-hover:underline'} to={'/'}>Home</Link></li>
                        <li className={'group'}><Link className={'group-hover:underline'} to={'/facebook/react/issues'}>FB
                            Issues</Link></li>
                    </ul>
                </nav>
                <div className={'md:hidden'} onClick={handleToggleMenu}>
                    {isMenuOpen ? <AiOutlineClose/> : <GiHamburgerMenu/>}
                </div>
            </div>
            {isMenuOpen && (
                <div className={'md:hidden'}>
                    <nav className={'p-4'}>
                        <ul className={'flex flex-col w-[25%]'}>
                            <li className={'py-2 border-b-2 border-gray-500'}><Link
                                onClick={() => setIsMenuOpen(false)} to={'/'}>Home</Link></li>
                            <li className={'py-2 border-b-2 border-gray-500'}><Link
                                onClick={() => setIsMenuOpen(false)} to={'/facebook/react/issues'}>FB
                                Issues</Link></li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Header;
