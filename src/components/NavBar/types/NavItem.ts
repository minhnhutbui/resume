import { IconProp } from "@fortawesome/fontawesome-svg-core";

export interface NavItem {
    id: number;
    name: string;
    link: string;
    active: boolean;
}

export interface NavSocial {
    id: number;
    class: string;
    icon: IconProp;
    link: string
}

export interface NavBarItem {
    navItems: NavItem[];
    navSocials: NavSocial[];
}