import SectionTitle from 'components/common/SectionTitle';
import SingleTestimonial from './SingleTestimonial';
import { useState, useEffect } from 'react';
import { IoChevronBackOutline } from 'react-icons/io5';
import { LuChevronRight } from 'react-icons/lu';
import { useKeenSlider } from 'keen-slider/react';

export function extractTestimonialsFromHtml(htmlString) {
  const blocks = htmlString.split('<hr');
  const testimonials = [];

  blocks.forEach((blockHtml) => {
    const temp = document.createElement('div');
    temp.innerHTML = blockHtml;

    const strong = temp.querySelector('strong');
    if (!strong) return;

    const author = strong.textContent.trim();

    const rawHtml = temp.innerHTML;

    // Match Company:
    const companyMatch = rawHtml.match(/Company:\s*([^<]+)/i);
    const company = companyMatch?.[1]?.trim() || '';

    // Match Image from <a href="">
    const imageAnchor = temp.querySelector('a[href]');
    const image = imageAnchor?.getAttribute('href') || '';

    // Match Rating:
    const ratingMatch = rawHtml.match(/Rating:\s*(\d+)/i);
    const star = parseInt(ratingMatch?.[1]) || 0;

    // Match Description:
    const descriptionMatch = rawHtml.match(/Description:\s*([^<]+)/i);
    const content = descriptionMatch?.[1]?.trim() || '';

    testimonials.push({
      name: author,
      designation: company,
      image,
      star,
      content,
    });
  });

  return testimonials;
}

export default function TestimonialsDynamicSection({ htmlContent = '', showTitle = true }) {
  const [testimonials, setTestimonials] = useState([]);

  const [sliderRef, instanceRef] = useKeenSlider(
    {
      loop: true,
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
          slides: { perView: 3, spacing: 24 },
        },
        '(min-width: 1400px)': {
          slides: { perView: 3, spacing: 24 },
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
    if (htmlContent) {
      const parsed = extractTestimonialsFromHtml(htmlContent);
      setTestimonials(parsed);
    }
  }, [htmlContent]);

  return (
    <section className="relative z-10 bg-primary/[.03] py-16 md:py-20 lg:py-28 overflow-x-hidden">
      <div className="container keen-slider-container">
        <div className="text-center text-primary pb-5">Testimonials</div>
        {showTitle && (
          <SectionTitle
            title="What Our Users Say"
            paragraph="Our users consistently share their love for the product."
            center
          />
        )}

        {/* <div ref={sliderRef} className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3"> */}
        <div ref={sliderRef} className="keen-slider max-w-full overflow-x-hidden">
          {testimonials.map((testimonial, index) => (
            <div key={`${testimonial.name}-${index}`} className="keen-slider__slide min-w-0">
              <SingleTestimonial testimonial={testimonial} />
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
            onClick={(e) => e.stopPropagation() || instanceRef.current.next()}
            className="text-primary bg-primary/[0.1] hover:bg-primary hover:text-white transition-colors duration-500 p-3 rounded-full"
          >
            <LuChevronRight size={24} />
          </button>
        </div>
      </div>
      <div className="absolute top-5 right-0 z-[-1]">
        <svg width="238" height="531" viewBox="0 0 238 531" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect
            opacity="0.3"
            x="422.819"
            y="-70.8145"
            width="196"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 422.819 -70.8145)"
            fill="url(#paint0_linear_83:2)"
          />
          <rect
            opacity="0.3"
            x="426.568"
            y="144.886"
            width="59.7544"
            height="541.607"
            rx="2"
            transform="rotate(51.2997 426.568 144.886)"
            fill="url(#paint1_linear_83:2)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_83:2"
              x1="517.152"
              y1="-251.373"
              x2="517.152"
              y2="459.865"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17b3ac" />
              <stop offset="1" stopColor="#17b3ac" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_83:2"
              x1="455.327"
              y1="-35.673"
              x2="455.327"
              y2="675.565"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17b3ac" />
              <stop offset="1" stopColor="#17b3ac" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute left-0 bottom-5 z-[-1]">
        <svg width="279" height="106" viewBox="0 0 279 106" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <path
              d="M-57 12L50.0728 74.8548C55.5501 79.0219 70.8513 85.7589 88.2373 79.3692C109.97 71.3821 116.861 60.9642 156.615 63.7423C178.778 65.291 195.31 69.2985 205.911 62.3533C216.513 55.408 224.994 47.7682 243.016 49.1572C255.835 50.1453 265.278 50.8936 278 45.3373"
              stroke="url(#paint0_linear_72:302)"
            />
            <path
              d="M-57 1L50.0728 63.8548C55.5501 68.0219 70.8513 74.7589 88.2373 68.3692C109.97 60.3821 116.861 49.9642 156.615 52.7423C178.778 54.291 195.31 58.2985 205.911 51.3533C216.513 44.408 224.994 36.7682 243.016 38.1572C255.835 39.1453 265.278 39.8936 278 34.3373"
              stroke="url(#paint1_linear_72:302)"
            />
            <path
              d="M-57 23L50.0728 85.8548C55.5501 90.0219 70.8513 96.7589 88.2373 90.3692C109.97 82.3821 116.861 71.9642 156.615 74.7423C178.778 76.291 195.31 80.2985 205.911 73.3533C216.513 66.408 224.994 58.7682 243.016 60.1572C255.835 61.1453 265.278 61.8936 278 56.3373"
              stroke="url(#paint2_linear_72:302)"
            />
            <path
              d="M-57 35L50.0728 97.8548C55.5501 102.022 70.8513 108.759 88.2373 102.369C109.97 94.3821 116.861 83.9642 156.615 86.7423C178.778 88.291 195.31 92.2985 205.911 85.3533C216.513 78.408 224.994 70.7682 243.016 72.1572C255.835 73.1453 265.278 73.8936 278 68.3373"
              stroke="url(#paint3_linear_72:302)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_72:302"
              x1="256.267"
              y1="53.6717"
              x2="-40.8688"
              y2="8.15715"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17b3ac" stopOpacity="0" />
              <stop offset="1" stopColor="#17b3ac" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_72:302"
              x1="256.267"
              y1="42.6717"
              x2="-40.8688"
              y2="-2.84285"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17b3ac" stopOpacity="0" />
              <stop offset="1" stopColor="#17b3ac" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_72:302"
              x1="256.267"
              y1="64.6717"
              x2="-40.8688"
              y2="19.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17b3ac" stopOpacity="0" />
              <stop offset="1" stopColor="#17b3ac" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_72:302"
              x1="256.267"
              y1="76.6717"
              x2="-40.8688"
              y2="31.1572"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#17b3ac" stopOpacity="0" />
              <stop offset="1" stopColor="#17b3ac" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
