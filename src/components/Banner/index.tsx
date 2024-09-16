'use client';
import { ReactElement, useContext } from 'react';
import styles from './Banner.module.scss';
import { ThemeContext, ThemeContextProps } from '@/contexts/ThemeContext';
import { Typewriter } from 'nextjs-simple-typewriter';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Banner(): ReactElement {
    const themeValue = useContext<ThemeContextProps>(ThemeContext);
    const theme = themeValue.theme;
    return (
        <div className={cx('wrapper', 'h-full fixed')}>
            <video autoPlay muted loop className={theme === 'light' ? cx('videoIn') : cx('videoOut')}>
                <source src="/assets/background/Sunny.mp4" type="video/mp4" />
            </video>
            <video autoPlay muted loop className={theme === 'dark' ? cx('videoIn') : cx('videoOut')}>
                <source src="/assets/background/Night_clear.mp4" type="video/mp4" />
            </video>
            {/* <video autoPlay muted loop className={cx('videoOut')}>
                <source src={DayRainBackground} type="video/mp4" />
                </video>
                <video autoPlay muted loop className={cx('videoOut')}>
                <source src={NightRainBackground} type="video/mp4" />
                </video> */}
            <div className={'w-full h-full fixed top-1/3'}>
                <div className={'max-w-screen-xl w-full h-full mx-auto'}>
                    <div className={'text-6xl font-bold drop-shadow-lg my-4 min-h-16'}>
                        <Typewriter words={['Hi! My name is Minh', "I'm a Web Developer"]} loop={0} />
                    </div>
                    <button
                        className={
                            'rounded-full outline bg-orange-400 hover:bg-orange-300 transition duration-300 px-4 py-2.5'
                        }
                    >
                        Let's connect
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Banner;
