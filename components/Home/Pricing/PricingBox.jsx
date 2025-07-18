import React from 'react';

const PricingBox = ({
  price,
  duration,
  packageName,
  subtitle,
  children,
  showMore,
  setShowMore,
  isPopular,
  setShowModal,
  setModalPlanName,
}) => {
  const childrenArray = React.Children.toArray(children);
  const visibleFeatures = showMore ? childrenArray : childrenArray.slice(0, 7);
  const [mainPrice = '', oldPrice = ''] = (price || '').split('|').map((p) => p.trim());
  return (
    <div className="w-full">
      <div
        className="wow fadeInUp relative z-10 rounded-md bg-white px-8 py-10 mt-10 shadow-default border border-gray-200 dark:border-gray-700 dark:bg-primary/5"
        data-wow-delay=".1s"
      >
        {isPopular && (
          <div className="absolute -top-6 right-0 bg-primary w-full text-center text-white px-3 py-1 text-sm font-medium rounded-t-md">
            Most Popular
          </div>
        )}
        <div className="flex items-center justify-between">
          <h3 className="price mb-2 text-3xl font-bold text-black dark:text-white">
            <div>
              $<span className="text-primary">{mainPrice}</span>
              <span className="time text-body-color">/{duration}</span>
            </div>
            {<div className="text-lg text-gray-400 line-through">${oldPrice}</div>}
          </h3>

          <h4 className="mb-2 text-xl font-bold text-dark dark:text-white">{packageName}</h4>
        </div>
        <p className="mb-7 text-base text-body-color">{subtitle}</p>
        <div className="mb-8 border-b border-body-color border-opacity-10 pb-8 dark:border-white dark:border-opacity-10">
          <button
            onClick={() => {
              setModalPlanName(packageName);
              setShowModal(true);
            }}
            className={`flex w-full items-center justify-center rounded-md p-3 text-base font-semibold transition duration-300 ease-in-out ${
              isPopular
                ? 'bg-primary text-white hover:bg-opacity-80 hover:shadow-signUp'
                : 'border border-primary text-primary hover:bg-primary/5'
            }`}
          >
            Get Started for free
          </button>
        </div>
        <div>{visibleFeatures}</div>

        {childrenArray.length > 7 && (
          <div className="mt-4 text-center">
            <button className="text-primary hover:underline text-sm font-medium" onClick={() => setShowMore(!showMore)}>
              {showMore ? 'Show Less' : 'Show More'}
            </button>
          </div>
        )}
        <div className="absolute bottom-0 right-0 z-[-1]">
          <svg width="179" height="158" viewBox="0 0 179 158" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.5"
              d="M75.0002 63.256C115.229 82.3657 136.011 137.496 141.374 162.673C150.063 203.47 207.217 197.755 202.419 167.738C195.393 123.781 137.273 90.3579 75.0002 63.256Z"
              fill="url(#paint0_linear_70:153)"
            />
            <path
              opacity="0.3"
              d="M178.255 0.150879C129.388 56.5969 134.648 155.224 143.387 197.482C157.547 265.958 65.9705 295.709 53.1024 246.401C34.2588 174.197 100.939 83.7223 178.255 0.150879Z"
              fill="url(#paint1_linear_70:153)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_70:153"
                x1="69.6694"
                y1="29.9033"
                x2="196.108"
                y2="83.2919"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#17b3ac" stopOpacity="0.62" />
                <stop offset="1" stopColor="#17b3ac" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_70:153"
                x1="165.348"
                y1="-75.4466"
                x2="-3.75136"
                y2="103.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#17b3ac" stopOpacity="0.62" />
                <stop offset="1" stopColor="#17b3ac" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PricingBox;
