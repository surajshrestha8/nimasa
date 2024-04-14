"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { NAVLINKS } from "../constants/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faListAlt } from "@fortawesome/free-regular-svg-icons";
const breadCrumb = {
  position: "absolute",
  height: "200px",
  width: "100vw",
  backgroundColor: "#1c61a5",
  opacity: 0.9,
  top: "0px",
  padding: "20px",
  transition: "all 0.3s ease",
  transform: "translateY(0%)",
  display: "flex",
  justifyContent: "center",
};

const breadCrumbActive = {
  top: "0",
};

const NavBar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const openNav = () => {
    setOpen(true);
  };
  return (
    <nav
      className="flexBetween max-container px-6 lg:px-20 3xl:px-0 relative z-30 py-5"
      style={{ color: "rgb(46 48 148)" }}
    >
      <Link href="/">
        <Image
          src="/nimasa-logo.jpg"
          alt="nimasa logo"
          width={90}
          height={50}
        />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAVLINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <button
          type="button"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          +977 9814124516
        </button>
      </div>
      <FontAwesomeIcon
        onClick={openNav}
        height={40}
        width={40}
        icon={faListAlt}
        className="inline-block cursor-pointer lg:hidden"
      />
      {open && (
        <div
          style={{
            position: "absolute",
            height: "200px",
            width: "100vw",
            backgroundColor: "#1c61a5",
            opacity: 0.9,
            top: "0px",
            padding: "20px",
            transition: "all 0.3s ease",
            transform: "translateY(0%)",
          }}
          className="lg:hidden"
        >
          <button
            style={{
              color: "red",
              width: "50px",
              height: "50px",
              position: "absolute",
              top: "2px",
              right: "50px",
            }}
            onClick={() => setOpen(false)}
          >
            Close
          </button>
          <ul>
            {NAVLINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                style={{
                  color: "white",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
