import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.scss';
import { ThemeProvider } from '@/contexts/ThemeContext';
import { AOSInit } from './aos';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Resume',
    description: 'Minh Bui Resume',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AOSInit />
            <body>
                <ThemeProvider>
                    <div className="bg-[#d6c4b2] flex flex-col min-h-screen">
                        <NavBar />
                        <div className="max-w-screen-xl w-full h-full mx-auto py-40 flex-1">{children}</div>
                        <Footer />
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}
