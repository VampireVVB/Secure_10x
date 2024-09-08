import React from "react";

const AdvantagesSection = () => {
  return (
    <div className="advantages-section pt-20">
      <h2 className="text-3xl font-bold text-center mb-8">WHY US?</h2>
      <div className="advantages-comparison flex justify-center lg:gap-20 max-md:gap-4 max-md:flex-col text-2xl">
        <div className="challenges shadow-lg p-6 border-slate-400 border-4 rounded-xl md:w-[45%] lg:max-w-[45%]">
          <h3 className="text-3xl font-semibold text-center mb-4">
            Challenges You Face
          </h3>
          <ul className="space-y-3">
            {[
              "Lack of Technical Background",
              "Not Having Mentor",
              "Lack of Support",
              "Where to Start First",
              "Time Constraints",
              "Limited Networking",
              "Uncertain Career Path",
              "Special Degree Requirements",
              "Have Skills But No Job",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-red-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-10.707a1 1 0 00-1.414-1.414L10 8.586 7.707 6.293a1 1 0 10-1.414 1.414L8.586 10l-2.293 2.293a1 1 0 101.414 1.414L10 11.414l2.293 2.293a1 1 0 001.414-1.414L11.414 10l2.293-2.293z"
                    clipRule="evenodd"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="solutions shadow-lg p-6 border-slate-400 border-4 rounded-xl md:w-[45%] lg:max-w-[45%]">
          <h3 className="text-3xl font-semibold text-center mb-4">
            Solutions We Provide
          </h3>
          <ul className="space-y-3">
            {[
              "No Technical Background Needed",
              "Experienced Mentorship",
              "Special Support Groups",
              "Complete Roadmap",
              "Learn Anytime",
              "Networking Opportunities",
              "Career Guidance",
              "No Special Degree Required",
              "Job Guarantee",
            ].map((item, index) => (
              <li key={index} className="flex items-center text-green-500">
               <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 48 48">
<path fill="#c8e6c9" d="M36,42H12c-3.314,0-6-2.686-6-6V12c0-3.314,2.686-6,6-6h24c3.314,0,6,2.686,6,6v24C42,39.314,39.314,42,36,42z"></path><path fill="#4caf50" d="M34.585 14.586L21.014 28.172 15.413 22.584 12.587 25.416 21.019 33.828 37.415 17.414z"></path>
</svg>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdvantagesSection;
