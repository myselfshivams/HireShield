import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/logo.png";
import dashboardmobile from "../../../public/assets/8.webp";
import dashboard from "../../../public/assets/2.jpg";
import WatchDemoModal from "./WatchDemoModal"; 
import GetStartedModal from "./getStartedModal";
import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

const Home = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isGetStartedModalOpen, setGetStartedModalOpen] = useState(false); 

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);
  const openGetStartedModal = () => setGetStartedModalOpen(true);
  const closeGetStartedModal = () => setGetStartedModalOpen(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (

      <div className="overflow-x-hidden bg-gray-50">
        <header className="py-4 md:py-6 relative z-50 bg-gray-50">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0 p-4 sm:p-0">
              <Link
  href="/"
  className="flex items-center rounded outline-none font-bold text-3xl focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
>
  <Image
    src={logo}
    width={75}
    height={70}
    className="mx-1"
    alt="UrbanSphere Logo"
  />
  <span className="ml-2">
    <span className="text-black">Urban</span> <span className="text-blue-600">Sphere</span>
  </span>.
</Link>
             
              </div>

              <div className="flex lg:hidden">
                <button type="button" className="text-gray-900 z-50" onClick={toggleMobileMenu}>
                  <span aria-hidden="true">
                    {isMobileMenuOpen ? (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    ) : (
                      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    )}
                  </span>
                </button>
              </div>

              <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                <a
                  href="#features"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Features
                </a>
                <a
                  href="#pricing"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Pricing
                </a>
                <a
                  href="#feedback"
                  className="text-base font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  Feedback
                </a>
              </div>

              <SignedOut>
                <SignInButton mode="modal" >
                  <div className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900" role="button">
                    Login
                  </div>
                </SignInButton>
              </SignedOut>
              <SignedIn>
                <UserButton>
                  <div className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900" role="button">
                    My Profile
                  </div>
                </UserButton>
              </SignedIn>
            </div>
          </div>
        </header>

        <div
          className={`lg:hidden fixed inset-0 z-40 bg-gray-50 transform ${
            isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
          } transition-transform duration-300 ease-in-out`}
        >
          <div className="flex flex-col h-full pt-20">
            <div className="flex flex-col flex-grow justify-center items-center">
              <a
                href="#features"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Pricing
              </a>
              <a
                href="#"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Automation
              </a>
              <a
                href="#feedback"
                className="text-2xl font-medium text-gray-900 transition-all duration-200 rounded focus:outline-none font-pj hover:text-opacity-50 focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 mb-8"
                onClick={toggleMobileMenu}
              >
                Feedback
              </a>
              <Link href="/sign-in">
                <div
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl hover:bg-blue-700 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
                  role="button"
                >
                Login
                </div>
              </Link>
            </div>
          </div>
        </div>

        <section className="pt-12 bg-gray-50 sm:pt-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="px-6 text-lg text-gray-600 font-inter">
              Find the Right Place, Tailored to Your Life
              </h1>
              <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-5xl lg:leading-tight font-pj">
              UrbanSphere ranks neighborhoods to help buyers
                <span className="relative inline-flex sm:inline">
                  <span className="bg-gradient-to-r from-blue-500 to-blue-600 blur-lg filter opacity-30 w-full h-full absolute inset-0" />
                  <span className="relative"> find the perfect place based on quality-of-life factors.</span>
                </span>
              </p>
              <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <button
    onClick={openGetStartedModal}
    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 mt-4 sm:mt-0 text-lg font-bold leading-7 text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-xl font-pj hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
    role="button"
  >
    Get Started
  </button>
  <button
    onClick={openModal}
    className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 mt-4 sm:mt-0 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 hover:bg-gray-200 focus:bg-gray-200"
    role="button"
  >
    Watch the demo
  </button>

              </div>
              <p className="mt-8 text-base text-gray-500 font-inter">
              Discover Your Ideal Neighborhood with Data-Driven Insights
              </p>
            </div>
          </div>
          <div className="pb-12">
            <div className="relative ">
              <div className="absolute inset-0 h-2/3 bg-gray-50" />
              <div className="relative mx-auto">
                <div className="lg:max-w-6xl lg:mx-auto my-6">
                <Image src={dashboard} alt="UrbanSphere Dashboard" className="rounded-md hidden sm:block shadow-2xl shadow-blue-500/50" />
                <Image src={dashboardmobile} alt="UrbanSphere Mobile Dashboard" className="rounded-md block ml-4 sm:hidden shadow-2xl shadow-blue-500/50" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Watch Video Modal */}
        <WatchDemoModal isOpen={isModalOpen} onClose={closeModal} />
        <GetStartedModal isOpen={isGetStartedModalOpen} onClose={closeGetStartedModal} />
      </div>

  );
};

export default Home;
