export interface NavLink {
    section: string;
    children: NavLinkChild[];
}

interface NavLinkChild {
    name: string;
    link: string;
}