'use client';
import { ReactElement, useContext, useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import loadYaml from '@/utils/loadYaml';
import { NavBarItem } from './types/NavItem';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { ThemeContext } from '@/contexts/ThemeContext';

const iconMap: { [key: string]: IconProp } = {
    faGithub: faGithub,
    faLinkedin: faLinkedin,
    faFacebook: faFacebook,
};

function NavBar(): ReactElement {
    const themeValue = useContext(ThemeContext);
    const [navBarItems, setNavBarItems] = useState<NavBarItem>();
    const currentPath = usePathname();

    useEffect(() => {
        async function fetchData() {
            const nav_bar_items: NavBarItem = await loadYaml(process.env.NEXT_PUBLIC_NAV_ITEMS_PATH || '');
            setNavBarItems(nav_bar_items);
        }
        fetchData();
    }, []);

    return (
        <div className={styles.wrapper}>
            <div className={'grid grid-cols-12 xl:max-w-[1400px] 2xl:max-w-screen-2xl mx-auto py-2'}>
                <div className={'lg:col-span-3 flex'}>
                    <img className={'w-1/3 cursor-pointer'} src="/assets/img/logo.svg" alt="Logo" />
                </div>
                <nav className={`${styles['nav-middle']} lg:col-span-6`}>
                    <ul className={'flex justify-evenly text-xl'}>
                        {navBarItems?.navItems.map((item, index) => (
                            <li key={index} className="py-4 px-2.5 uppercase">
                                <Link href={item.link} className={currentPath === item.link ? styles.active : ''}>
                                    {item.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={'flex lg:col-span-3'}>
                    <ul className={'flex justify-evenly items-center basis-6/7'}>
                        {navBarItems?.navSocials.map((item, index) => (
                            <li
                                key={index}
                                className={`${styles['social-button']} ${item.class} min-w-9 p-2 border-2 aspect-square w-1/6 flex items-center justify-center rounded-full`}
                            >
                                <a href={item.link} target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={iconMap[`${item.icon}`]} />
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className={'min-w-9 basis-1/7 rounded-lg p-2'} onClick={themeValue.toggleTheme}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-yellow-500 hidden dark:block"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                fillRule="evenodd"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="fill-violet-700 block dark:hidden"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default NavBar;
