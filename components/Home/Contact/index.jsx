import { useState } from 'react';
import ContactDetailsCard from './ContactDetailsCard';
import toast from 'react-hot-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    'your-name': '',
    'your-email': '',
    'your-phone': '',
    'your-message': '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending...');

    const formDataToSend = new FormData();

    // Hidden fields (from CF7 DOM values)
    formDataToSend.append('_wpcf7', '121');
    formDataToSend.append('_wpcf7_version', '6.1');
    formDataToSend.append('_wpcf7_locale', 'en_US');
    formDataToSend.append('_wpcf7_unit_tag', 'wpcf7-f121-p73-o1');
    formDataToSend.append('_wpcf7_container_post', '73');
    formDataToSend.append('_wpcf7_posted_data_hash', '772f232eef5da9f314b46b3ca770b5ba');

    // Actual input values from user
    formDataToSend.append('your-name', formData['your-name']);
    formDataToSend.append('your-email', formData['your-email']);
    formDataToSend.append('your-phone', formData['your-phone']);
    formDataToSend.append('your-message', formData['your-message']);

    try {
      const res = await fetch('https://blog.arvinditi.com/wp-json/contact-form-7/v1/contact-forms/121/feedback', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await res.json();
      toast.dismiss(loadingToast);

      if (data.status === 'mail_sent') {
        toast.success('Message sent successfully!');
        setFormData({
          'your-name': '',
          'your-email': '',
          'your-phone': '',
          'your-message': '',
        });
      } else {
        toast.error(`${data.message}`);
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      console.error(err);
      toast.error('Error sending message.');
    }
  };

  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-20">
      <div className="container">
        <div className="text-white text-3xl font-bold text-center mb-8">Let&apos;s Plan Your Business Success</div>
        <div
          className="w-full grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-md bg-primary/[3%] border border-gray-200 dark:border-gray-700 dark:bg-primary/5"
          data-wow-delay=".2s"
        >
          <div className="lg:col-span-5 mb-2 h-full">
            <ContactDetailsCard />
          </div>
          <div className="lg:col-span-7">
            <div
              className="wow fadeInUp mb-12 rounded-md py-11 px-4 sm:px-8 sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s
              "
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Need Help? Open a Ticket
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Our support team will get back to you ASAP via email.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="-mx-4 flex flex-wrap">
                  <input type="hidden" name="_wpcf7" value="121" />
                  <input type="hidden" name="_wpcf7_version" value="6.1" />
                  <input type="hidden" name="_wpcf7_locale" value="en_US" />
                  <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f121-p73-o1" />
                  <input type="hidden" name="_wpcf7_container_post" value="73" />
                  <input type="hidden" name="_wpcf7_posted_data_hash" value="...hash..." />

                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="name" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="your-name"
                        value={formData['your-name']}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full rounded-md  border border-gray-200 dark:border-gray-700 py-3 px-6 text-base text-body-color placeholder-body-color outline-none dark:bg-primary/5 focus:border-primary dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label htmlFor="email" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Your Email
                      </label>
                      <input
                        type="email"
                        name="your-email"
                        value={formData['your-email']}
                        onChange={handleChange}
                        placeholder="info@zenithx.in"
                        className="w-full rounded-md  border border-gray-200 dark:border-gray-700 py-3 px-6 text-base text-body-color placeholder-body-color outline-none dark:bg-primary/5 focus:border-primary dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label htmlFor="phone_no" className="mb-3 block text-sm font-medium text-dark dark:text-white">
                        Phone Number
                      </label>
                      <input
                        type="text"
                        name="your-phone"
                        value={formData['your-phone']}
                        onChange={handleChange}
                        placeholder="+91 89794 54475"
                        className="w-full rounded-md  border border-gray-200 dark:border-gray-700 py-3 px-6 text-base text-body-color placeholder-body-color outline-none dark:bg-primary/5 focus:border-primary dark:focus:border-primary"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="your-message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="your-message"
                        rows={4}
                        value={formData['your-message']}
                        onChange={handleChange}
                        placeholder="Describe your project"
                        className="w-full resize-none rounded-md border border-gray-200 dark:border-gray-700 py-3 px-6 text-base text-body-color placeholder-body-color outline-none focus:border-primary dark:bg-primary/5 dark:focus:border-primary"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button
                      type="submit"
                      className="holographic-button relative overflow-hidden rounded-md px-5 py-3.5 text-sm font-semibold text-white border border-transparent bg-gradient-to-r from-[#ff8d4d] via-[#e449ae] to-[#7746ff] transition duration-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
