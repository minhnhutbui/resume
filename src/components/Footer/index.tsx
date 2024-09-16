import { FooterItems } from './types/FooterItem';

function Footer() {
    const footerItems: FooterItems = {
        copyRights: [
            {
                id: 1,
                description: '© 2024 by Minh.',
            },
            {
                id: 2,
                description: 'Powered and secured by MB',
            },
        ],
        contacts: [
            {
                id: 1,
                type: 'Call',
                detail: '0426 429 113',
            },
            {
                id: 2,
                type: 'Write',
                detail: 'minhnhutbui2599@gmail.com',
            },
        ],
    };

    return (
        <footer className="w-full relative bottom-0 text-sm">
            <div className="max-w-screen-xl mx-auto flex justify-between py-4">
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
        </footer>
    );
}

export default Footer;
