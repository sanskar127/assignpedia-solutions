import SectionTitle from 'components/common/SectionTitle';
import Single from './Single';

const featuresContent = [
  {
    id: 1,
    title: 'Wep App Development',
    paragraph: 'We build scalable mobile and web apps tailored to your needs.',
    iconName: 'FaMobileAlt',
    image: '/images/features/app-dev.jpg',
  },
  {
    id: 2,
    title: 'Cloud Services',
    paragraph: 'Secure cloud infrastructure with DevOps practices.',
    iconName: 'RiCloudLine',
    image: '/images/features/cloud.jpg',
  },
  {
    id: 3,
    title: 'AI Solutions',
    paragraph: 'Smart AI-driven systems to automate and innovate.',
    iconName: 'AiOutlineRobot',
    image: '/images/features/ai.jpg',
  },
  {
    id: 3,
    title: 'On-Demand Developers',
    paragraph: 'Smart AI-driven systems to automate and innovate.',
    iconName: 'AiOutlineRobot',
    image: '/images/features/ai.jpg',
  },
  {
    id: 3,
    title: 'Hosting Solutions',
    paragraph: 'Smart AI-driven systems to automate and innovate.',
    iconName: 'AiOutlineRobot',
    image: '/images/features/ai.jpg',
  },
];

const Feature = () => {
  return (
    <section id="features" className="bg-primary/[.03] py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="text-center text-primary pb-5">Our Services</div>
        <SectionTitle
          title="What we can do for you?"
          paragraph="ZenithX offers complete cycle of Mobile and Web development services. Besides creating Apps for iOS & Android natively and UI/ UX Design, we also create amazing cross-platform apps and powerful web applications using latest technologies like Angular, React, Node.js and Vue.js."
          center
          width="850"
        />

        <div className="grid grid-cols-1 gap-x-12 gap-y-14 md:grid-cols-2 lg:grid-cols-5">
          {featuresContent.map((feature) => (
            <Single key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Feature;
