import React, { useState } from 'react';

const data = [
    {
      id  : '1',
      question: "I don't have any prior knowledge and experience in cyber security. Can I still join this masterclass?",
      answer:
        "Yes, This masterclass teaches you about cybersecurity and the opportunities that you can find in this field and there will be live demos in the masterclass which will help you understand the applications and the importance of cybersecurity.",
    },
    {
      id  : '2',
      question: "Will this masterclass be worth it?/ How is this masterclass going to help me?",
      answer:
        "Yes absolutely, in this masterclass we will dive deep into the cybersecurity space and look into the applications and opportunities and the basic fundamentals of cybersecurity. We will be showing 2 live demos of cyber attacks which will give you a brief idea of what exactly is cybersecurity.",
    },
    {
      id  : '3',
      question: "Will I get a certificate for attending the masterclass?",
      answer:
        "Yes, you will be given a certificate for attending the masterclass and staying till the end. More information on this will be provided once you enroll to this masterclass.",
    },
    {
      id  : '4',
      question: "I'm currently doing a job/homemaker/retired, should I join the workshop?",
      answer:
        "Age is just a number and there is no limit to when you can learn and cybersecurity is a subject which everyone should be aware of as this is the one which can keep our information safe. So learning this is always helpful irrepective of age.",
    },
  ];

const FAQ = () => {
    const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multi, setMulti] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected(getCurrentId === selected ? null : getCurrentId);
  }

  const getSymbol = (id) => (selected === id || multi.includes(id)) ? '-' : '+';

  return (
    <div className="flex flex-col items-center justify-center py-10">
      <div
        className="rounded-lg border-4 border-emerald-600 bg-transparent px-8 py-4 lg:w-[800px] md:w-[650px] max-md:w-fullx`"
      >
        {data && data.length > 0 ? (
          data.map((dataItem) => (
            <div key={dataItem.id} className="mb-4">
              <div
                onClick={() => handleSingleSelection(dataItem.id)}
                className="flex items-center justify-between text-white px-4 py-2 hover:bg-emerald-900 cursor-pointer"
              >
                <h3>{dataItem.question}</h3>
                <span>{getSymbol(dataItem.id)}</span>
              </div>
              {enableMulti ? (
                multi.includes(dataItem.id) && (
                  <div className="text-white px-4 py-4 border-2 rounded-xl">{dataItem.answer}</div>
                )
              ) : (
                selected === dataItem.id && (
                  <div className="text-white px-4 py-4 border-2 rounded-xl">{dataItem.answer}</div>
                )
              )}
            </div>
          ))
        ) : (
          <div>no data found</div>
        )}
      </div>
    </div>
  );
};

export default FAQ;
