import React, { useState } from 'react';
import illustration from '../../../public/assets/7.png';
import Image from 'next/image';
import FeedbackModal from './FeedbackModal'; 

const Feedback = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };



  return (
    <>
      <div className="bg-white" id="feedback">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">We Value Your Feedback</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">Your opinion helps us improve our services. Share your thoughts and let us know how we can serve you better.</p>
              <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                <button onClick={openModal} className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100">
                  Leave Feedback
                </button>
              </div>
            </div>
            <div className="relative mt-16 h-80 lg:mt-8">
              <Image src={illustration} alt="3D illustration representing feedback" width={450} height={450} />
            </div>
          </div>
        </div>
      </div>

      <FeedbackModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Feedback;
