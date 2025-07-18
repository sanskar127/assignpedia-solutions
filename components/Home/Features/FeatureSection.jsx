import { useEffect, useRef, useState } from 'react';
import SectionTitle from 'components/common/SectionTitle';
import { getFeaturesContent } from './getFeaturesContent';
import Single from './Single';
import { useKeenSlider } from 'keen-slider/react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { LuChevronRight } from 'react-icons/lu';

const FeaturesSection = ({ featuresHtmlContent = '' }) => {
  const [featuresContent, setFeaturesContent] = useState(null);
  const [pause, setPause] = useState(false);
  const timer = useRef();
  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
      initial: 0,
      duration: 800,
      dragStart: () => {
        setPause(true);
      },
      dragEnd: () => {
        setPause(false);
      },
      slides: { perView: 1, spacing: 20 },
      breakpoints: {
        '(min-width: 640px)': {
          slides: { perView: 1, spacing: 20 },
        },
        '(min-width: 768px)': {
          slides: { perView: 2, spacing: 20 },
        },
        '(min-width: 1024px)': {
          slides: { perView: 3, spacing: 24 },
        },
        '(min-width: 1200px)': {
          slides: { perView: 4, spacing: 24 },
        },
        '(min-width: 1400px)': {
          slides: { perView: 5, spacing: 24 },
        },
      },
    },
    [
      (slider) => {
        const updateOnResize = () => slider.update();
        window.addEventListener('resize', updateOnResize);
        return () => window.removeEventListener('resize', updateOnResize);
      },
    ]
  );

  useEffect(() => {
    const sliderEl = sliderRef.current;
    if (!sliderEl) return;

    const handleMouseOver = () => setPause(true);
    const handleMouseOut = () => setPause(false);

    sliderEl.addEventListener('mouseover', handleMouseOver);
    sliderEl.addEventListener('mouseout', handleMouseOut);

    return () => {
      sliderEl.removeEventListener('mouseover', handleMouseOver);
      sliderEl.removeEventListener('mouseout', handleMouseOut);
    };
  }, [sliderRef]);

  useEffect(() => {
    timer.current = setInterval(() => {
      if (!pause && instanceRef.current) {
        instanceRef.current.next();
      }
    }, 4000);

    return () => {
      clearInterval(timer.current);
    };
  }, [pause, instanceRef]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const parsed = getFeaturesContent(featuresHtmlContent);
    setFeaturesContent(parsed);
  }, [featuresHtmlContent]);

  if (!featuresContent) {
    return null;
  }

  return (
    <section id="features" className="py-16 md:py-20 lg:py-28">
      <div className="container keen-slider-container">
        <div className="text-center text-primary pb-5">Our Services</div>
        <SectionTitle
          title="What we can do for you?"
          paragraph="ZenithX offers complete cycle of Mobile and Web development services. Besides creating Apps for iOS & Android natively and UI/ UX Design, we also create amazing cross-platform apps and powerful web applications using latest technologies like Angular, React, Node.js and Vue.js."
          center
          width="850"
        />

        <div ref={sliderRef} className="keen-slider max-w-full overflow-x-hidden">
          {featuresContent.map((feature, index) => (
            <div key={`${feature.name}-${index}`} className="keen-slider__slide min-w-0">
              <Single key={feature.id} feature={feature} />
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={(e) => e.stopPropagation() || instanceRef.current.prev()}
            className="text-primary bg-primary/[0.1] hover:bg-primary hover:text-white transition-colors duration-500 p-3 rounded-full"
          >
            <IoChevronBackOutline size={24} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              instanceRef.current?.next();
            }}
            className="text-primary bg-primary/[0.1] hover:bg-primary hover:text-white transition-colors duration-500 p-3 rounded-full"
          >
            <LuChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
