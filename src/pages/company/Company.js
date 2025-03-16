import React, { useEffect } from 'react';

import AboutusFeatures from './sections/AboutusFeatures';
import BookDemo from '../../components/Bookdemo/BookDemo';
// import AdvisoryBoard from '../home/sections/AdvisoryBoard';
// import TeamHage from '../home/sections/TeamHage';
import Faqs from '../../components/FAQs/Faqs';
import SuccessCount from '../home/sections/SuccessCount';
import { useLocation } from 'react-router-dom';
// import Hiring from '../home/sections/Hiring';

const faqs = [
  {
    question: 'How can I send cargo to my distributors?',
    answer:
      'Register as an enterprise. You can create a new account on our Marketplace. Find your selected distributors and create an order with them. You might need to invite your distributors if they are not on the marketplace.',
  },
  {
    question: 'How can I sign up as a distributor?',
    answer:
      'Download our mobile app. Login or create an account as a distributor. Find suppliers or manufacturers and create your order with them.',
  },
  {
    question: 'How can I become a truck transporter?',
    answer:
      'Download our mobile app and login or create an account as a transporter. You will receive orders from our numerous enterprises.',
  },
  {
    question: 'How can I earn with my fleet?',
    answer:
      'Download our mobile app and login or create an account as a fleet manager. You will receive orders from our numerous enterprises.',
  },
];

const Company = () => {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const targetSection = document.getElementById(hash.slice(1));
      if (targetSection) {
        let navbarHeight = document.querySelector('nav').offsetHeight;

        if (window.innerWidth <= 768) {
          navbarHeight = 100;
        }

        const targetPosition =
          targetSection.getBoundingClientRect().top +
          window.pageYOffset -
          navbarHeight;
        window.scrollTo({ top: targetPosition, behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <section id="about">
        <AboutusFeatures />
        <BookDemo demoButtonText="Check it out" />
      </section>

      <section id="faq">
        <Faqs faqs={faqs} />
      </section>

      <SuccessCount />

      {/* <Hiring /> */}
    </>
  );
};

export default Company;
