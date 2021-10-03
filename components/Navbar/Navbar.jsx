import React from "react";
import { NavLink } from "../Navlink/Navlink";

const Navbar = () => {
  return (
    <nav className="flex lg:flex-row flex-wrap justify-between py-14">
      <div>My Logo here</div>
      <ul className="flex flex-wrap lg:justify-center lg:py-0 pt-4">
        <li className="pr-5">
          <NavLink href="/blog">Blog</NavLink>
        </li>
        <li className="pr-5">
          <NavLink href="/projects">Projects</NavLink>
        </li>
        <li className="pr-5">
          <NavLink href="/about">About</NavLink>
        </li>
        <li className="pr-5">
          <NavLink href="/resume">Resume</NavLink>
        </li>
        <li className="pr-5">
          <NavLink href="/talks">Talks</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
