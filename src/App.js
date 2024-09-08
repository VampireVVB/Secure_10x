import React, { useState, useEffect } from 'react';
import "./App.css";
import Hero from "./Components/Hero";
import Carousel from "./Components/Carousel";
import ImageCards from "./Components/ImageCards";
import AdvantagesSection from "./Components/Advantages";
import WhyLearn from "./Components/WhyLearn";
import CertificateOffering from "./Components/CertificateOffering";
import WhoIsThisFor from "./Components/WhoIsThisFor";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import FooterFixed from "./Components/Footer";
import EnrollButton from './Assests/EnrollButton';

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    // Show the popup after 5 seconds
    const timeout = setTimeout(() => setShowPopup(true), 5000);

    // Clear the timeout if the component unmounts
    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-600">
      <div className="fixed top-0 -z-10 h-full w-full">
        <div class="relative h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        </div>
      </div>
      <div className="relative w-md">
        {/* Your existing website content goes here */}

        {/* Popup */}
        {showPopup && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-slate-950 rounded-lg shadow-lg p-8 w-1/2 border-8 border-[#0097a7] relative">
              <button
                className="absolute top-2 right-2 text-white hover:text-gray-200 transition duration-300"
                onClick={() => setShowPopup(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <h2 className="text-5xl font-bold mb-4 text-white w-full flex items-center justify-center">
                <span className='text-green-500'>Wait! Are you sure?</span>
              </h2>
              <p className="text-gray-200 mb-6 w-full flex items-center justify-center text-2xl">
                You will miss out on all these awesome bonuses!
              </p>
              <div className="list-disc text-white">
                <ul className="list-disc pl-12 text-white bg-blue-700 border border-teal-800 rounded-md p-4 text-2xl gap-5 flex flex-col py-7 px-10 ">
                  <li>Receive a certificate for completion of Secure10X Masterclass Webinar.<span className='text-lime-500 font-bold'>(Priceless)</span></li>
                  <li>Receive a chance to win 3 premium hacking softwares and tools.<span className='text-lime-500 font-bold'>(Worth Rs. 7,000)</span></li>
                  <li>Obtain a WorkBook covering Masterclass Topics for Future Reference.<span className='text-lime-500 font-bold'>(Worth Rs. 1,000)</span></li>
                  <li>Receive 15 practical techniques to protect yourself when pre & post Hacking session.<span className='text-lime-500 font-bold'>(Worth Rs. 3,000)</span></li>
                  <li>Get  30+ AI tools with Real Life Use Cases & Newsletter.<span className='text-lime-500 font-bold'>(Worth Rs. 4,000)</span></li>
                  <li>Receive 20+ productivity hacks using ChatGpt to 10x your Hacking and Income Efficiency.<span className='text-lime-500 font-bold'>(Worth Rs. 2,000)</span></li>
                </ul>
              </div>
              <div className='pt-4 float-right'><EnrollButton/></div>
            </div>
          </div>
        )}
      </div>




      <div className="container mx-auto px-8 py-14">
        <Hero />
        <ImageCards />
        <WhyLearn />
        <AdvantagesSection />
        <CertificateOffering />
        <WhoIsThisFor />
        <FAQ />
        <FooterFixed />

        {
          //<Navbar/>
          // <Hero/>
          // <About/>
          // <Technologies/>
          // <Experience/>
          // <Projects/>
          // <Contact/>
        }
      </div>
    </div>
  );
};

export default App;
