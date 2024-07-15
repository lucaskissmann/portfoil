"use client"

import Container from "@/components/ui/container"
import Image from "next/image";
import Link from "next/link"
import NavItem from "./nav-item";
import { MenuToggle } from "./menu-toggle";

const Navbar = () => {
	return (
		<div className="border-b bg-[#BEE7F9]">
      <Container>
        <div className="relative px-4 pr-0 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
          <div className="flex items-center gap-x-6">
            <Link href="https://db.tec.br/" className="ml-4 flex lg:ml-0 gap-x-2" target="_blank">
              <Image src={'/db_logo.png'} height={60} width={87} alt="Logo da DB azul escuro"></Image>
            </Link>
            <div className="hidden sm:flex">
              <NavItem label="Sobre"/>
              <NavItem label="Currículo" href="curriculum" />
              <NavItem label="Projetos" href="projects" />
            </div>
          </div>
          <div className="hidden sm:flex ml-auto items-center gap-x-4">
            <Link href="https://github.com/lucaskissmann" target="_blank" rel="noopener noreferrer">
              <Image src="/github.svg" height={30} width={30} alt="GitHub Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/lucas-kissmann-862395207/" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.svg" height={30} width={30} alt="LinkedIn Icon" />
            </Link>
          </div>
          <div className="sm:hidden ml-auto">
            <MenuToggle />            
          </div>
        </div>

      </Container>
    </div>
	)
}

export default Navbar;