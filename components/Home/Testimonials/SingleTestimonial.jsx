// import { Testimonial } from "@/types/testimonial";
import Image from 'next/image';
import { BsChatQuoteFill } from 'react-icons/bs';
import { ImQuotesLeft } from 'react-icons/im';

const starIcon = (
  <svg width="18" height="16" viewBox="0 0 18 16" className="fill-current">
    <path d="M9.09815 0.361679L11.1054 6.06601H17.601L12.3459 9.59149L14.3532 15.2958L9.09815 11.7703L3.84309 15.2958L5.85035 9.59149L0.595291 6.06601H7.0909L9.09815 0.361679Z" />
  </svg>
);

const SingleTestimonial = ({ testimonial }) => {
  const { star, name, image, content, designation } = testimonial;

  let ratingIcons = [];
  for (let index = 0; index < star; index++) {
    ratingIcons.push(
      <span key={index} className="text-yellow">
        {starIcon}
      </span>
    );
  }

  return (
    <div className="w-full h-full">
      <div
        className="flex flex-col justify-between h-full group wow fadeInUp rounded-md bg-white p-8 shadow-default border border-gray-200 dark:border-gray-700 dark:bg-primary/5 lg:px-5 xl:px-8 hover:border-primary dark:hover:border-primary transition-colors duration-300"
        data-wow-delay=".1s"
      >
        <div className="mb-5 flex items-center space-x-1">{ratingIcons}</div>
        <p className="mb-8 border-b border-body-color border-opacity-10 pb-6 text-base leading-relaxed text-body-color dark:border-white dark:border-opacity-10 dark:text-white">
          <ImQuotesLeft
            size={25}
            className="text-primary/[0.3] group-hover:text-primary transition-colors duration-300"
          />
          {content}
        </p>
        <div className="flex items-center">
          <div className="relative mr-4 h-[50px] w-full max-w-[50px] overflow-hidden rounded-full">
            <Image src={image} alt={name} fill />
          </div>
          <div className="w-full">
            <h5 className="mb-1 text-lg font-semibold text-dark dark:text-white lg:text-base xl:text-lg">{name}</h5>
            <p className="text-sm text-body-color">{designation}</p>
          </div>
        </div>
        <div className="flex justify-end">
          <BsChatQuoteFill
            size={25}
            className="text-primary/[0.3] group-hover:text-primary transition-colors duration-300"
          />
        </div>
      </div>
    </div>
  );
};

export default SingleTestimonial;
