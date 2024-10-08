"use client";

import Link from "next/link";
import Logo from "./logo";
import React from "react";
import ConnectButton from "./connectWallet";

export default function Navbar() {
  function toggleBtn() {
    const mobileMenu = document.getElementById("mobile-menu-4");
    if (mobileMenu) {
      mobileMenu.classList.toggle("hidden");
    }
  }
  return (
    <nav className="bg-white border-gray-200  py-6  ">
      <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto ">
        <Logo color="#000" />

        <div className="flex items-center lg:order-2">
          <div className="hidden mt-2 mr-4 sm:inline-block">
            <span></span>
          </div>
          <div className="hidden lg:block">
            <ConnectButton />
          </div>

          <button
            onClick={toggleBtn}
            data-collapse-toggle="mobile-menu-2"
            type="button"
            className="inline-flex items-center p-2 ml-1 text-sm text-[#222] rounded-lg lg:hidden hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-[#333] dark:hover:bg-blue-300 dark:focus:ring-blue-400 z-40"
            aria-controls="mobile-menu-2"
            aria-expanded="false"
          >
            <span className="sr-only"></span>
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              className="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className="z-20 inset-x-0 top-16 bg-white items-center justify-between w-full h-fit lg:flex lg:w-auto lg:order-1 hidden px-2 py-3 mx-auto"
          id="mobile-menu-4"
        >
          <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
            <li>
              <Link
                href="/"
                className="relative block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#005A5A] lg:p-0"
                aria-current="page"
              >
                How It works
              </Link>
            </li>
            <li>
              <Link
                href="/features"
                className="relative block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#005A5A] lg:p-0"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#005A5A] lg:p-0  "
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/map"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#005A5A] lg:p-0  "
              >
                Road Map
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 pl-3 pr-4 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#005A5A] lg:p-0  "
              >
                Contact
              </Link>
            </li>

            <li className="text-sm mt-2 sm:hidden">
              <ConnectButton />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
