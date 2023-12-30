import React from 'react';

const SectionContainer = ({ className, id, children }) => (
  <section
    id={id}
    data-section={id}
    className={`section ${className} w-full mx-auto lg:w-[740px] px-3.5 md:px-0`}
  >
    {children}
  </section>
);

export default SectionContainer;
