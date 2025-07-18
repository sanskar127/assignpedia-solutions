import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { BiSolidQuoteRight } from 'react-icons/bi';

const ContactDetailsCard = () => {
  return (
    <section
      className="bg-gray-50 py-12 px-4 sm:px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[45px] wow fadeInUp relative z-10 bg-primary/[3%] dark:bg-primary/5 sm:py-11 lg:py-8 xl:py-11 rounded-br-3xl"
      data-wow-delay=".2s"
    >
      <div className="max-w-2xl mx-auto px-0">
        {/* Title */}
        <h2 className="mb-4 text-2xl font-bold leading-tight text-black dark:text-white">Contact Information</h2>

        {/* 30px underline */}
        <div className="w-[60px] h-[3px] bg-primary my-4 rounded-full"></div>

        {/* Description */}
        <p className="text-gray-500 mb-10">
          We&apos;d love to hear from you! Whether you have a question about features, trials, pricing, or anything
          else.
        </p>
      </div>

      {/* Contact Info Section */}
      <div className="max-w-2xl mx-auto space-y-6 px-0">
        {/* Email */}
        <div className="flex items-start gap-4">
          <FaEnvelope className="text-primary text-2xl mt-1" />
          <div>
            <p className="font-semibold text-dark dark:text-white">Email:</p>
            <p className="text-gray-500">support@zenithx.in</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-start gap-4">
          <FaPhone className="text-primary text-2xl mt-1" />
          <div>
            <p className="font-semibold text-dark dark:text-white">Phone:</p>
            <p className="text-gray-500">+91 (897) 945 4475</p>
          </div>
        </div>

        {/* Address */}
        <div className="flex items-start gap-4">
          <FaMapMarkerAlt className="text-primary text-2xl mt-1" />
          <div>
            <p className="font-semibold text-dark dark:text-white">Address:</p>
            <p className="text-gray-500">Gurugram Haryana, India</p>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-start gap-0 pt-6">
          <a
            href="#"
            className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary bg-opacity-10 text-black dark:text-white duration-300 hover:bg-opacity-100 hover:text-white"
          >
            <FaFacebook className="text-xl" />
          </a>
          <a
            href="#"
            className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary bg-opacity-10 text-black dark:text-white duration-300 hover:bg-opacity-100 hover:text-white sm:ml-3"
          >
            <FaTwitter className="text-xl" />
          </a>
          <a
            href="#"
            className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary bg-opacity-10 text-black dark:text-white duration-300 hover:bg-opacity-100 hover:text-white sm:ml-3"
          >
            <FaLinkedin className="text-xl" />
          </a>
          <a
            href="#"
            className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-md bg-primary bg-opacity-10 text-black dark:text-white duration-300 hover:bg-opacity-100 hover:text-white sm:ml-3"
          >
            <FaInstagram className="text-xl" />
          </a>
        </div>

        <div className="w-full flex justify-center mb-6">
          <hr className="w-full border-t-2 border-gray-300 dark:border-gray-600" />
        </div>
        <div className="text-white text-xl md:text-2xl font-semibold leading-snug flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <BiSolidQuoteRight className="rotate-180 text-primary text-2xl" />
            <span>Dream It, Design It, Develop It, Drive It,</span>
          </div>
          <div className="flex items-center space-x-2">
            <span>Get in Touch to Begin.</span>
            <BiSolidQuoteRight className="text-primary text-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsCard;
