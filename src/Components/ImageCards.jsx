import React from "react";
import {myImg9, myImg10, myImg11, myImg12} from "../Assests/images";
import EnrollButton from "../Assests/EnrollButton";


const ImageCards = () => {
    const s100 = "Saudi Aramco confirmed that some company files were leaked after hackers reportedly demanded a $50 million ransom from the world's most-valuable oil producer. “Aramco recently became aware of the indirect release of a limited amount of company data which was held by third-party contractors,”."
    const s200 = "A hacker claimed to have access to Airtel India customers database comprising details of 37.5 crore users. The database allegedly contains customer's mobile numbers, date of birth, father's name, Aadhaar ID, email ID and more."
    const s300 = "In July 2024, a software update to a product from the cybersecurity firm CrowdStrike caused a widespread IT outage that affected many industries, including airlines and hospitals. The outage was caused by a faulty sensor configuration update that affected Microsoft Windows systems."
    const s400 = "Dell recently issued a notice regarding a data breach that occurred on May 9, which has reportedly affected over 49 million customers.Dell initiated the distribution of notifications cautioning its customers that their personally identifiable information (PII) had been compromised in a data breach."
  return (
    <div className="w-full pt-20 ">
      <div className="flex md:gap-9 max-md:gap-7 items-center justify-around max-md:flex-col">

        <div className="rounded-3xl w-1/4 max-md:w-[90%] overflow-hidden hover:scale-105 transform transition duration-[400ms]">
          <img src={myImg9} alt="company or person" className="w-full" />
          <div className="pb-4 pt-3 px-[12px] bg-gradient-to-br from-fuchsia-800/45 via-violet-900 via-60% to-fuchsia-900">
            <p>{s100}</p>
          </div>
        </div>
        <div className="rounded-3xl w-1/4 max-md:w-[90%] overflow-hidden hover:scale-105 transform transition duration-[400ms]">
          <img src={myImg10} alt="company or person" className="w-full" />
          <div className="pb-4 pt-3 px-[12px] bg-gradient-to-br from-fuchsia-800/45 via-violet-900 via-60% to-fuchsia-900">
            <p>{s200}</p>
          </div>
        </div>
        <div className="rounded-3xl w-1/4 max-md:w-[90%] overflow-hidden hover:scale-105 transform transition duration-[400ms]">
          <img src={myImg11} alt="company or person" className="w-full" />
          <div className="pb-4 pt-3 px-[12px] bg-gradient-to-br from-fuchsia-800/45 via-violet-900 via-60% to-fuchsia-900">
            <p>{s300}</p>
          </div>
        </div>
        <div className="rounded-3xl w-1/4 max-md:w-[90%] overflow-hidden hover:scale-105 transform transition duration-[400ms]">
          <img src={myImg12} alt="company or person" className="w-full" />
          <div className="pb-4 pt-3 px-[12px] bg-gradient-to-br from-fuchsia-800/45 via-violet-900 via-60% to-fuchsia-900">
            <p>{s400}</p>
          </div>
        </div>

        
      </div>

      <div className="w-full flex items-center justify-center flex-col pt-14">
        <p className="font-semibold tracking-wider text-2xl pb-5">Seize the Opportunity Before it is too Late!</p>
        <p className="font-light text-lg tracking-wide pb-1">Mastering Cyber Security Today is Like Investing in in Bitcoin in 2015</p>
        <p className="font-light text-lg tracking-wide pb-5">Or Like Starting a YouTube Channel in 2010</p>
        <p className="bg-[#04e2a8] text-black py-6 px-10 font-semibold tracking-tight text-xl">You'll be Jobless by 2025 if You Don't Master CYBER SECURITY, Take Action NOW!</p>
      </div>

        <div className="w-full items-center justify-center flex pt-10">
            <EnrollButton/>
        </div>

    </div>
  );
};

export default ImageCards;
