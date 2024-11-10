import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaStar } from 'react-icons/fa'; 
import ReactDOM from "react-dom";

interface FeedbackModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FeedbackModal: React.FC<FeedbackModalProps> = ({ isOpen, onClose }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState<number | null>(null);
  const [feedbackText, setFeedbackText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (rating === 0) {
      toast.error('Please select a star rating!');
      return;
    }

    if (feedbackText.trim() === '') {
      toast.error('Please write your feedback!');
      return;
    }

    toast.success('Feedback sent successfully!');
    onClose(); 
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        style={{ backdropFilter: "blur(5px)" }}
      >
        <div className="bg-white rounded-xl shadow-lg overflow-hidden w-11/12 max-w-lg relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 focus:outline-none text-2xl transition-colors duration-200"
            aria-label="Close"
          >
            &times;
          </button>

          <div className="p-6 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Leave Your Feedback</h2>
            
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <label key={index}>
                    <input
                      type="radio"
                      name="rating"
                      value={starValue}
                      onClick={() => setRating(starValue)}
                      className="hidden"
                    />
                    <FaStar
                      className="cursor-pointer"
                      color={starValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
                      size={30}
                      onMouseEnter={() => setHover(starValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>

            <textarea
              className="w-full border-2 border-gray-300 rounded-lg p-3 mb-4 text-black focus:ring-2 focus:ring-blue-500 focus:outline-none"
              rows={4}
              placeholder="Write your feedback here..."
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
            />

            <button
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Submit Feedback
            </button>
          </div>
        </div>
      </div>

      <ToastContainer  />
    </>,
    document.body
  );
};

export default FeedbackModal;
