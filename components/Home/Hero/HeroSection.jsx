'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { FaCode, FaRobot, FaUsers, FaSearch, FaDollarSign } from 'react-icons/fa';
import { slugify } from '@/lib/util';

const HeroSection = ({ heroHtmlContent = '' }) => {
  const [heroContent, setHeroContent] = useState(null);

  useEffect(() => {
    const parsed = {
      title: 'Website Development & Hosting, Simplified',
      paragraph:
        'We build beautiful websites and host them on blazing-fast servers. Let’s take your business online — the right way.',
      links: [
        { text: 'Get Started', url: '/contact' },
        { text: 'View Pricing', url: '/pricing' },
      ],
      imageUrl: '/images/hero/why-us.png',
    };
    setHeroContent(parsed);
  }, [heroHtmlContent]);

  if (!heroContent) return null;

  const features = [
    { text: 'Hire AI Developers', icon: <FaRobot /> },
    { text: 'Dev Team @ $2900', icon: <FaDollarSign /> },
    { text: 'On-Demand Devs', icon: <FaUsers /> },
    { text: 'Staff Augmentation', icon: <FaCode /> },
    { text: 'Technical SEO Services', icon: <FaSearch /> },
  ];

  return (
    <>
      <section id="home" className="relative z-10 overflow-hidden bg-white dark:bg-black py-4 md:py-8 lg:py-10">
        <div className="container mx-auto px-4">
          {/* ✅ FLEX ROW FOR LEFT-TEXT & RIGHT-IMAGE */}
          <div className="flex flex-col-reverse items-center justify-between my-14 lg:flex-row lg:gap-8">
            {/* Left side: Text */}
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="lg:block flex lg:justify-start justify-center lg:items-start items-center">
                <Image
                  src="/images/icons/industry-left-logo-left-side.png.webp"
                  alt="Industry Leader flex justify-center items-center"
                  className="mb-2"
                  width={20}
                  height={20}
                />
              </div>
              <h1 className="mb-5 text-xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl md:text-xl">
                Premium Web Design Agency
              </h1>
              <h1 className="mb-5 text-4xl font-extrabold leading-tight text-black dark:text-white sm:text-5xl md:text-6xl">
                Website Development & Hosting, <span className="text-gradient">Simplified</span>
              </h1>
              <p className="mb-8 text-base font-medium text-gray-600 dark:text-gray-300 sm:text-lg md:text-xl">
                We build beautiful websites and host them on blazing-fast servers. Let’s take your business online — the{' '}
                <span className="text-primary font-semibold">Right</span> way.
              </p>

              <div className="mb-8 flex flex-wrap justify-center md:justify-start gap-3">
                {features.map(({ text, icon }, index) => {
                  const slug = slugify(text);
                  const url = `/service/${slug}`;

                  return (
                    <Link key={index} href={url}>
                      <div className="flex items-center gap-2 border border-gray-300 dark:border-white/10 px-4 py-2 rounded-full text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-white/5 hover:shadow-md transition cursor-pointer">
                        <span className="text-primary">{icon}</span>
                        {text}
                      </div>
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
                {heroContent.links.map(({ url, text }, index) => (
                  <Link
                    key={index}
                    href={url}
                    className={`rounded-md px-8 py-4 text-base font-semibold transition duration-300 ${
                      index === 0
                        ? // ? ' rounded-md bg-gradient-to-r from-[#17b3ac] to-blue-800 text-white hover:bg-blue-700'
                          'holographic-button rounded-md bg-[linear-gradient(120deg,_#ff8d4d,_#e449ae_49%,_#7746ff)] text-white hover:bg-blue-700'
                        : 'bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-white/10 dark:text-white dark:hover:bg-white/20'
                    }`}
                  >
                    {text}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right side: Image */}
            <div className="w-full lg:w-1/2 flex lg:justify-end justify-center mb-12 lg:mb-0">
              <Image
                src={heroContent.imageUrl}
                alt="Website Hosting"
                width={600}
                height={400}
                className="max-w-full h-auto floating-image"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <div className="mb-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center text-sm text-gray-700 dark:text-gray-300">
        <div>
          <p className="font-bold text-xl text-primary">100+</p>
          <p>Projects Delivered</p>
        </div>
        <div>
          <p className="font-bold text-xl text-primary">24x7</p>
          <p>Support Availability</p>
        </div>
        <div>
          <p className="font-bold text-xl text-primary">5+</p>
          <p>Years of Experience</p>
        </div>
        <div>
          <p className="font-bold text-xl text-primary">99.9%</p>
          <p>Server Uptime</p>
        </div>
        <div>
          <p className="font-bold text-xl text-primary">30+</p>
          <p>Active Clients</p>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
