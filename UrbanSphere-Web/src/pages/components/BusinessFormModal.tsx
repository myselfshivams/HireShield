import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useRouter } from "next/router";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface BusinessInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BusinessInquiryModal: React.FC<BusinessInquiryModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [businessName, setBusinessName] = useState(""); 
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [serviceType, setServiceType] = useState("");
  const router = useRouter();

  if (!isOpen) return null;

  const validateForm = () => {
    if (step === 1) {
      if (!name) {
        toast.error("Please enter your name.");
        return false;
      }
      if (!businessName) {
        toast.error("Please enter your business name.");
        return false;
      }
    }
    if (step === 2) {
      if (!contactNumber) {
        toast.error("Please enter your contact number.");
        return false;
      }
      if (contactNumber.length !== 10) {
        toast.error("Contact number must be 10 digits.");
        return false;
      }
    }
    if (step === 3 && !email) {
      toast.error("Please enter your email.");
      return false;
    }
    if (step === 3) {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email)) {
        toast.error("Please enter a valid email address.");
        return false;
      }
    }
    if (step === 4) {
      if (!address) {
        toast.error("Please enter your address.");
        return false;
      }
      if (address.length <= 10) {
        toast.error("Address must be more than 10 characters.");
        return false;
      }
    }
    if (step === 5 && !serviceType) {
      toast.error("Please select a type of service.");
      return false;
    }
    return true;
  };

  const handleNext = () => {
    if (!validateForm()) return;
  
    if (step === 5) {
      router.push({
        pathname: "/business/services",
        query: { name, businessName, contactNumber, email, address, serviceType },
      });
    } else {
      setStep((prevStep) => prevStep + 1);
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <label className="block mb-2 text-gray-700">
              Name:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
            <label className="block mb-2 text-gray-700">
              Business Name: {/* New input for business name */}
              <input
                type="text"
                value={businessName}
                onChange={(e) => setBusinessName(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
          </div>
        );
      case 2:
        return (
          <div>
            <label className="block mb-2 text-gray-700">
              Contact Number:
              <input
                type="tel"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
          </div>
        );
      case 3:
        return (
          <div>
            <label className="block mb-2 text-gray-700">
              Email:
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
          </div>
        );
      case 4:
        return (
          <div>
            <label className="block mb-2 text-gray-700">
              Address:
              <input
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </label>
          </div>
        );
      case 5:
        return (
          <div>
            <label className="block mb-2 text-gray-700">
              Type of Service:
              <select
                value={serviceType}
                onChange={(e) => setServiceType(e.target.value)}
                className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              >
                <option value="">Select a service</option>
                <option value="electrician">Electrician</option>
                <option value="plumber">Plumber</option>
                <option value="labour">Labour</option>
                <option value="craftsman">Craftsman</option>
                <option value="other">Other</option>
              </select>
            </label>
          </div>
        );
      default:
        return null;
    }
  };

  return ReactDOM.createPortal(
    <>
      <ToastContainer />
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-11/12 max-w-lg relative p-6" onClick={(e) => e.stopPropagation()}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none text-2xl transition-colors duration-200"
            aria-label="Close"
          >
            &times;
          </button>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">For Business</h2>
          {renderStep()}

          <div className="mt-4 flex justify-between">
            <button
              onClick={handleNext}
              className="mt-2 inline-flex items-center px-6 py-2 font-bold text-white bg-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              {step === 5 ? "Submit" : "Next"}
            </button>
            <button
              onClick={onClose}
              className="mt-2 inline-flex items-center px-6 py-2 font-bold text-gray-900 border-2 border-gray-300 rounded-xl hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>,
    document.body
  );
};

export default BusinessInquiryModal;
