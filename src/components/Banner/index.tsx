'use client';
import { ReactElement, useContext } from 'react';
import styles from './Banner.module.scss';
import { ThemeContext, ThemeContextProps } from '@/contexts/ThemeContext';
import Typewriter from 'typewriter-effect';

function Banner(): ReactElement {
    const themeValue = useContext<ThemeContextProps>(ThemeContext);
    const theme = themeValue.theme;
    return (
        <div className={`${styles['wrapper']} h-full`}>
            <video autoPlay muted loop className={theme === 'light' ? 'videoIn' : 'videoOut'}>
                <source src="/assets/background/Sunny.mp4" type="video/mp4" />
            </video>
            <video autoPlay muted loop className={theme === 'dark' ? 'videoIn' : 'videoOut'}>
                <source src="/assets/background/Night_clear.mp4" type="video/mp4" />
            </video>
            {/* <video autoPlay muted loop className={cx('videoOut')}>
                <source src={DayRainBackground} type="video/mp4" />
                </video>
                <video autoPlay muted loop className={cx('videoOut')}>
                <source src={NightRainBackground} type="video/mp4" />
                </video> */}
            <div className={'w-full h-full fixed top-1/3'}>
                <div className={'xl:max-w-[1400px] 2xl:max-w-screen-2xl w-full h-full mx-auto'}>
                    <div className={'text-6xl font-bold drop-shadow-lg my-4'}>
                        <Typewriter
                            options={{
                                strings: ['Hi! My name is Minh', "I'm a Web Developer"],
                                autoStart: true,
                                loop: true,
                            }}
                        />
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
