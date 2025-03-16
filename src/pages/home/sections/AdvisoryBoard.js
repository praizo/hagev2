import React from "react";

import image1 from "../../../assests/babatundeabimbola.png";
import image2 from "../../../assests/abiodunogunmodede.png";
import image3 from "../../../assests/Kofi.png";
import mail from "../../../assests/mail.svg";
import linkedin from "../../../assests/LinkedInfilled.svg";

const advisoryBoardMembers = [
  {
    name: "Babatunde Abimbola",
    position: "Risk & Compliance Advisor",
    description:
      "Experienced Chartered Accountant with a robust auditing background across financial, manufacturing, logistics, and oil & gas sectors. He offers invaluable expertise in mitigating risks and optimizing insurance strategies to safeguard business interests and ensure operational resilience.",
    email: "Babatunde.abimbola@gmail.com",
    linkedin:
      "https://www.linkedin.com/in/babatunde-abimbola-mba-aca-dcp-3130ba50/",
    image: image1,
  },
  {
    name: "Abiodun Ogunmodede",
    position: "Strategic Planning & Compliance Advisor",
    description:
      "Over 20 years' experience in banking and regulatory compliance, as well as expertise spanning business administration, labor relations, business analytics, and risk management.",
    email: "abiodunhotsopt@yahoo.com",
    linkedin: "https://www.linkedin.com/in/abiodunogunmodede/",
    image: image2,
  },
  {
    name: "Kofi K. Achampong",
    position: "Legal Advisor",
    description:
      "A Toronto lawyer and advisor specializing in government regulation, international trade, and business development. Called to the Ontario Bar in 2013, he served as a Senior Advisor to Ontario ministers and now runs his own practice.",
    email: "kofi@example.com",
    linkedin:
      "http://linkedin.com/in/kofi-achampong-jd-mba-candidate-a144b4153",
    image: image3,
  },
];

const AdvisoryBoard = () => {
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleLinkedInClick = (linkedin) => {
    window.open(linkedin, "_blank");
  };

  return (
    <div className="bg-white-100 py-8 md:py-16 px-4 md:px-20">
        <div className="flex flex-col justify-center items-center">
          <h4 className="text-base font-body font-normal mb-4">Meet</h4>
          <h1 className="font-main font-normal text-2xl md:text-5xl leading-9 md:leading-tight">
            Our advisory board
          </h1>
        </div>

        <div className="mt-8 md:mt-16 md:flex justify-center items-center">
          {advisoryBoardMembers.map((member, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center my-6 xl:my-0 px-8 xl:w-[20%] xl:mx-11"
            >
              <div>
                <img src={member.image} alt={member.name} className="w-full" />
                <div className="mt-3 text-center">
                  <h4 className="text-base font-body font-semibold">
                    {member.name}
                  </h4>
                  <p className="text-sm font-main font-light leading-5 mt-2">
                    {member.position}
                  </p>
                </div>
              </div>
              <div className="my-1 md:my-3">
                <p className="hidden xl:flex text-center text-xs font-body leading-5">
                  {member.description}
                </p>
              </div>
              <div className="">
                <button onClick={() => handleEmailClick(member.email)}>
                  <img src={mail} className="px-2" alt="mail-box" />
                </button>
                <button onClick={() => handleLinkedInClick(member.linkedin)}>
                  <img src={linkedin} className="px-2" alt="linkedin" />
                </button>
              </div>
            </div>
          ))}
        </div>
      
    </div>
  );
};

export default AdvisoryBoard;
