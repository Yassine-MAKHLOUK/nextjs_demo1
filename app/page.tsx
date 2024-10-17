'use client'

import Image from "next/image";
import Button from "./components/common/button";
import Header from "./components/layout/header";
import { NavLinkProps } from "./components/layout/navbar";

export default function Home() {
  const links: NavLinkProps[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about'  },
    { name: 'Services', href: '/services'  },
    { name: 'Gallery', href: '/gallery'  },
    { name: 'Contact', href: '/contact'  },
  ];
  
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Header navLinks={links}></Header>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Button 
          label="button Component" className={"btn-primary"} onClick={function (): void {
            console.log("button Component clicked");
            ;
          } }        />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
        
      </footer>
    </div>
  );
}
