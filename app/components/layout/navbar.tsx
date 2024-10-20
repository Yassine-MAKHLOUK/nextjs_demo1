import Link from "next/link";
import { FC } from "react";

export interface NavLinkProps {
    name: string;
    href: string;
    class_name?: string;
}

export interface NavbarProps {
    linkprops: NavLinkProps[]; 
}

const Navbar :FC<NavbarProps> = ({linkprops}) => (
    <nav>
        <div className="navlinks">
          <ul className="hidden md:flex md:gap-x-6">
          {linkprops.map((link, index) => (
            <li key={index}>
              <Link href={link.href} className={` ${link.class_name}`}>
                {link.name}
              </Link>
            </li>
          ))}
          </ul>
        </div>
    </nav>
)
export default Navbar;