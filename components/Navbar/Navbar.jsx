import React from "react";
import { NavLink } from "../Navlink/Navlink";
import DarkModeToggleButton from "../DarkModeToggleButton";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex lg:flex-row flex-wrap justify-between py-10">
      <div>
        <Link href="/">
          <a>
            <Image
              className="rounded-full"
              src="/dp.jpg"
              width="70"
              height="70"
              alt="navbar-dp"
            />
          </a>
        </Link>
      </div>
      <ul className="flex flex-wrap lg:justify-center lg:py-0 pt-4 text-xl">
        <li className="mx-3 hover:underline">
          <NavLink href="/about">About</NavLink>
        </li>
        <li className="mx-3 hover:underline">
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li className="mx-3 hover:underline">
          <NavLink href="/resume">Resume</NavLink>
        </li>
        <li className="mx-3 hover:underline">
          <NavLink href="/talks">Talks</NavLink>
        </li>
        <li className="mx-3 hover:underline">
          <a
            href="https://sohamsshah.hashnode.dev/"
            target="_blank"
            rel="noreferrer"
          >
            Blog
          </a>
        </li>
        <li>
          <DarkModeToggleButton />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
