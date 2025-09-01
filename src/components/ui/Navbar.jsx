import React, { useState } from "react";
import useFetchJSON from "../../hooks/useFetchJSON";
import { NavLink } from "react-router-dom";

function Navbar({ to, children }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "font-semibold border-b-1 border-blue-500 "
            : "hover: opacity-80"
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const { data: socials } = useFetchJSON("../../../public/data/socials.json"); 
  return (
    <nav
      className="bg-black border-b-2 border-violet-800"
      aria-label="Hauptnavigation"
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between py-6">
        <div className="flex items-center p4">
          <a href="/">INFECTED RAIN</a>
          <button
            className="md:hidden ml-4 p-2"
            aria-controls="site-navigation"
            aria-expanded={open}
            aria-label="Menü umschalten"
            onClick={() => setOpen((s) => !s)}
          >
            ☰
          </button>
          {/* md: hidden */}
        </div>

        <ul
          id="site-navigation"
          className={`${
            open ? "block" : "hidden"
          } md:flex gap-6 list-none items-center`}
        >
          <Navbar to="/">Home</Navbar>
          <Navbar to="/about">About</Navbar>
          <Navbar to="/music">Music</Navbar>
          <Navbar to="/tour">Tour</Navbar>
          <Navbar to="/media">Media</Navbar>
          <Navbar to="/contact">Contact</Navbar>
          {socials?.socials?.map((s) => (
            <li key={s.provider}>
              <a href={s.url} target="_blank" rel="moreferrer" aria-label={s.label}>{s.provider}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
