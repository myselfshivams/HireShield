import Image from "next/image";
import logo from "../../../public/logo.svg";
import React, { useState, useEffect } from "react";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { FaXTwitter, FaGithub, FaYoutube } from "react-icons/fa6";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <>
      <footer className="bg-white dark:bg-gray-900 border-t relative">
        <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <Link
  href="/"
  className="flex items-center rounded outline-none font-bold text-3xl focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
>
  <Image
    src={logo}
    width={75}
    height={70}
    className="mx-1"
    alt="Urban Sphere Logo"
  />
  <span className="ml-2">
    <span className="text-white">Urban</span> <span className="text-blue-600">Sphere</span>
  </span>.
</Link>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a
              href="https://www.instagram.com/itshivamss.pvt/"
              target="_blank"
              className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <AiFillInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/ershivams/"
              target="_blank"
              className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <AiFillLinkedin />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://github.com/myselfshivams"
              target="_blank"
              className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              target="_blank"
              className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              <FaYoutube />
            </a>
          </div>

          <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">
        
            Designed by{" "}
            <a
              href="https://itshivam.tech"
              target="_blank"
              className="text-xl text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400"
            >
              Shivam
            </a>
            .
          </p>
        </div>

        {/* Move to Top Button */}
        {isVisible && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-blue-600 text-white rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-300"
            aria-label="Scroll to Top"
          >
            <IoIosArrowUp size={24} />
          </button>
        )}
      </footer>
    </>
  );
};

export default Footer;
