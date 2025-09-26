import React from 'react';
import TimeLineComponent from '../TimeLineComponent';

const HowItWorksSection = () => {
  return (
    <section
      id='features'
      className='relative w-full py-24 md:py-32 bg-slate-950'
    >
      <div className='absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-emerald-500/10 to-transparent rounded-bl-[3rem]'></div>
      <div className='absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-blue-500/10 to-transparent rounded-tr-[2.5rem]'></div>

      <TimeLineComponent />
    </section>
  );
};

export default HowItWorksSection;
