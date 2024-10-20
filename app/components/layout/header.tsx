import { FC } from "react";
import Image from "next/image"
import Link from "next/link"
import Navbar, { NavLinkProps } from "./navbar"

interface HeaderProps {
    navLinks: NavLinkProps[];
    
}

const Header :FC<HeaderProps> = ({navLinks}) => (
    <header className="py-10">
        <div className="header_container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <nav className="relative z-50 flex justify-between items-center">
                <div className="logo">
                    <Link href="/">
                        <Image
                            src="/assets/logos/logo.png"
                            alt="Block image"
                            width={100}
                            height={100}
                            quality={100}
                        />
                    </Link>
                </div>
                <Navbar linkprops={navLinks}  ></Navbar>
                <div className="socials">
                    <a href="" title="" className="social_icon" target="_blank"></a>
            </div>
            </nav>
        </div>
    </header>
)
export default Header;