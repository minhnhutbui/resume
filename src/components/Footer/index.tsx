'use client';
import { ReactElement, useEffect, useState } from 'react';
import loadYaml from '@/utils/loadYaml';
import { FooterItems } from './types/FooterItem';

function Footer(): ReactElement {
    const [footerItems, setFooterItems] = useState<FooterItems>();
    useEffect(() => {
        async function fetchData() {
            const footer_items: FooterItems = await loadYaml(process.env.NEXT_PUBLIC_FOOTER_ITEMS_PATH || '');
            setFooterItems(footer_items);
        }
        fetchData();
    }, []);
    return (
        <div className="w-full absolute bottom-0 text-sm">
            <div className="xl:max-w-[1400px] 2xl:max-w-screen-2xl mx-auto flex justify-between py-4">
                <div className="flex flex-col items-start">
                    {footerItems?.copyRights.map((copyRight) => (
                        <div key={copyRight.id}>{copyRight.description}</div>
                    ))}
                </div>
                <div className="flex basis-1/3 justify-evenly">
                    {footerItems?.contacts.map((contact) => (
                        <div key={contact.id} className="flex flex-col items-center">
                            <span>{contact.type}</span>
                            <span>{contact.detail}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
