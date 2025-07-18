import React from 'react';
import AboutOne from './AboutOne';

export default function About() {
  const aboutContent = {
    section1: {
      title: 'Our Main Goal to Satisfied Local & Global Clients',
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
      <AboutOne
        title={aboutContent.section1.title}
        paragraph={aboutContent.section1.paragraph}
        features={aboutContent.section1.features}
        image={aboutContent.section1.image}
      />
    </>
  );
}
