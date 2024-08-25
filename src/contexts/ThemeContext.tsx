'use client';
import { createContext, ReactNode, useState } from 'react';

interface ChildrenProps {
    children: ReactNode;
}
export interface ThemeContextProps {
    theme: string;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
    theme: 'light',
    toggleTheme: () => {},
});

function ThemeProvider({ children }: ChildrenProps) {
    const [theme, setTheme] = useState<string>('light');
    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };
    const value = {
        theme,
        toggleTheme,
    };
    return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export { ThemeProvider, ThemeContext };
