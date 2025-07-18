import React, { useEffect, useState } from 'react';
import { getAboutContent } from './getAboutContent';
import AboutSectionOne from './AboutSectionOne';
import AboutSectionTwo from './AboutSectionTwo';

export default function AboutSection({ aboutHtmlContent = '' }) {
  const [aboutContent, setAboutContent] = useState(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const parsed = getAboutContent(aboutHtmlContent);
    setAboutContent(parsed);
  }, [aboutHtmlContent]);

  if (!aboutContent || !aboutContent.section1 || !aboutContent.section2) {
    return null; // or <div>Loading...</div>
  }

  return (
    <>
      <AboutSectionOne
        title={aboutContent.section1.title}
        paragraph={aboutContent.section1.paragraph}
        features={aboutContent.section1.features}
        image={aboutContent.section1.image}
      />
      <AboutSectionTwo blocks={aboutContent.section2.blocks} image={aboutContent.section2.image} />
    </>
  );
}
