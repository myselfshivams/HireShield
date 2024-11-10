import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Footer from "./components/Footer";

const Custom404: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prev) => {
        const nextPercent = prev + 5;
        if (nextPercent > 100) {
          clearInterval(interval);
          setLoading(false);
          return 100;
        }
        return nextPercent;
      });
    }, 150); 
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
        <>
       
      <div className="flex flex-col items-center justify-center h-screen bg-gray-50">
        <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
        <div className="text-sm font-medium mt-2 text-gray-800">{percent}%</div>
      </div>
      <Footer />
      </>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4 h-screen">
        <div className="bg-white shadow-xl rounded-2xl p-10 m-4 text-center">
          <h1 className="text-8xl sm:text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-gray-800 to-gray-600 animate-bounce">
            404
          </h1>
          <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-4xl sm:text-5xl font-extrabold py-1 text-center mt-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
            Website under Maintenance
          </h2>
          
          <h3 className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-xl sm:text-2xl font-semibold mt-4 text-center">
            Page is under Construction.
          </h3>
          <Link href="/">
            <button className="mt-8 inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-400 to-blue-200 hover:bg-gradient-to-br hover:from-blue-200 hover:to-blue-400 text-gray-800 text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-100 py-2 px-4 sm:py-3 sm:px-6 shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
              Go Back Home
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Custom404;
