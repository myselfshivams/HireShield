import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { FaBriefcase, FaUser } from "react-icons/fa";
import BusinessInquiryModal from "./BusinessFormModal"; 
import { useRouter } from "next/router";

interface GetStartedModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GetStartedModal: React.FC<GetStartedModalProps> = ({ isOpen, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isBusinessModalOpen, setIsBusinessModalOpen] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isOpen]);

  const handleBusinessClick = () => {
    setIsBusinessModalOpen(true);
  };

  const handleUserClick = () => {
    router.push(
      {
        pathname: "/search",
      },
    );
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div
          ref={modalRef}
          className="bg-white rounded-xl shadow-lg overflow-hidden w-11/12 max-w-lg relative"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none text-2xl transition-colors duration-200"
            aria-label="Close"
          >
            &times;
          </button>
          
          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Get Started</h2>
            <p className="text-base text-gray-700 mb-8">Choose an option to continue</p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <button 
                onClick={handleBusinessClick} 
                className="flex flex-col items-center justify-center p-4 border-2 border-blue-600 rounded-lg hover:bg-blue-600 transition-colors duration-200 group w-full"
              >
                <FaBriefcase className="w-8 h-8 mb-2 text-blue-600 group-hover:text-white" />
                <span className="font-bold text-gray-900 group-hover:text-white">For Business</span>
              </button>
              <button
                onClick={handleUserClick} 
                className="flex flex-col items-center justify-center p-4 border-2 border-blue-600 rounded-lg hover:bg-blue-600 transition-colors duration-200 group w-full"
              >
                <FaUser className="w-8 h-8 mb-2 text-blue-600 group-hover:text-white" />
                <span className="font-bold text-gray-900 group-hover:text-white">For End User</span>
              </button>
            </div>
            
            <button
              onClick={onClose}
              className="mt-8 inline-flex items-center px-6 py-2 font-bold text-gray-900 border-2 border-gray-300 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Close
            </button>
          </div>
        </div>
      </div>

      <BusinessInquiryModal isOpen={isBusinessModalOpen} onClose={() => setIsBusinessModalOpen(false)} />
    </>,
    document.body
  );
};

export default GetStartedModal;
