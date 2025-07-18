import AboutSectionOne from './AboutSectionOne';
import AboutSectionTwo from './AboutSectionTwo';

export default function StAboutSection() {
  // ✅ Hardcoded content
  const aboutContent = {
    section1: {
      title: 'Who We Are',
      paragraph:
        'ZenithX is a full-service digital marketing and development agency. Our talented team of creative minds, strategists, developers, and marketing professionals are dedicated to delivering tailored solutions that drive results.',
      features: [
        'Website & App Development',
        'Digital Marketing Services',
        'SEO Expertise',
        'Product Design & UI/UX',
        'Brand-Building',
        '24/7 Technical Support',
      ],
      image: '/images/about/illustration.png',
    },
    section2: {
      image: '/images/about/illustration-5.png',
      blocks: [
        {
          id: 1,
          title: 'Our Mission',
          content:
            'At ZenithX, our mission is to empower businesses by providing cutting-edge solutions that combine creativity, technology, and strategy.',
        },
        {
          id: 2,
          title: 'Our Vision',
          content:
            'Our vision is to become a global leader in digital innovation — enabling businesses of all sizes to thrive through scalable, secure, and future-ready web solutions.',
        },
        {
          id: 3,
          title: 'Our Culture',
          content:
            'At ZenithX, we believe in innovation with intention. Our culture thrives on collaboration, curiosity, and continuous learning. We’re a diverse, remote-friendly team united by a passion for solving real problems through technology. Every line of code, every design, and every interaction reflects our commitment to excellence, transparency, and long-term impact.',
        },
      ],
    },
  };

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
