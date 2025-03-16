import React from 'react';

import Hero from './sections/Hero';
import WhyChooseHage from './sections/WhyChooseHage';
import Marketplacesection from './sections/Marketplacesection';
import Pricing from './sections/Pricing';
import About from './sections/About';
// import Blog from './sections/Blog';
import BusinessCallToAction from './sections/BusinessCallToAction';

const Homepage = () => {
  const bgcolor = 'bg-white-200';

  return (
    <div className="pt-32 md:pt-48">
      <Hero />
      <section id="marketplace">
        <Marketplacesection bgcolor={bgcolor} />
      </section>
      <WhyChooseHage />
      <Pricing />
      <About />
      {/* <Blog /> */}
      <BusinessCallToAction />
    </div>
  );
};

export default Homepage;
