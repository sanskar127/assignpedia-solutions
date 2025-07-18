import React from 'react';
import WhatWeDoOne from './WhatWeDoOne';

export default function WhatWeDo() {
  const aboutContent = {
    section1: {
      title: 'we offer a range of services designed to elevate your brand and achieve your digital goals.',
      paragraph:
        "Welcome to ZenithX, your ultimate partner in digital transformation and marketing excellence. We specialize in providing innovative solutions to help businesses thrive in the digital world. Whether you're a startup looking to establish your presence or an established brand aiming to scale new heights, ZenithX has the expertise to turn your vision into reality.",
      // features: [
      //   'Custom Software Development',
      //   'AI/ML Integration',
      //   'DevOps & Cloud Infrastructure',
      //   'On-Demand Tech Teams',
      //   'Scalable Architecture',
      //   'Agile Development Process',
      // ],
      image: '/images/about/about.png',
    },
  };

  return (
    <>
      <WhatWeDoOne
        title={aboutContent.section1.title}
        paragraph={aboutContent.section1.paragraph}
        features={aboutContent.section1.features}
        image={aboutContent.section1.image}
      />
    </>
  );
}
