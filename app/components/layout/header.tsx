import { FC } from "react";
import Navbar, { NavLinkProps } from "./navbar"

interface HeaderProps {
    navLinks: NavLinkProps[];
    
}

const Header :FC<HeaderProps> = ({navLinks}) => (
    <header>
        <div className="logo"></div>
        <Navbar linkprops={navLinks}  ></Navbar>
        <div className="socials"></div>
    </header>
)
export default Header;