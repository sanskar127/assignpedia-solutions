import SectionTitle from 'components/common/SectionTitle';
import Image from 'next/image';
import Link from 'next/link';

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

export default function AboutOne({ title, paragraph, features = [], image }) {
  const List = ({ text }) => (
    <p className="mb-5 flex items-center text-lg font-medium text-body-color">
      <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
        {checkIcon}
      </span>
      {text}
    </p>
  );

  // Split features into two columns like AboutSectionOneO
  const mid = Math.ceil(features.length / 2);
  const col1 = features.slice(0, mid);
  const col2 = features.slice(mid);

  return (
    <section id="about" className="bg-primary/5 pt-16 md:pt-20 lg:pt-28">
      <div className="container">
        <div className="pb-16 md:pb-20 lg:pb-28">
          <div className="-mx-4 flex flex-wrap items-center">
            <div className="w-full px-4 lg:w-1/2">
              {image && (
                <div className="wow fadeInUp relative mx-auto aspect-[25/24] max-w-[500px]" data-wow-delay=".2s">
                  <Image
                    src={image}
                    alt="about-image"
                    fill
                    className="mx-auto max-w-full lg:mr-0"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
              )}
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <p className="text-primary mb-2">About Company</p>
              <SectionTitle title={title} paragraph={paragraph} mb="44px" />

              <div className="wow fadeInUp mb-12 max-w-[570px] lg:mb-0" data-wow-delay=".15s">
                <div className="mx-[-12px] flex flex-wrap">
                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {col1.map((text, i) => (
                      <List key={i} text={text} />
                    ))}
                  </div>

                  <div className="w-full px-3 sm:w-1/2 lg:w-full xl:w-1/2">
                    {col2.map((text, i) => (
                      <List key={i} text={text} />
                    ))}
                  </div>
                </div>
              </div>
              <Link href="/about" className="flex">
                <button className="text-dark dark:text-white mr-3 text-lg">View More</button>
                <Image src="/images/button/Redirect.svg" width={40} height={40} alt="View More" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
