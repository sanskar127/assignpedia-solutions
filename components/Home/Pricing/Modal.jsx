import React, { useEffect, useRef, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import toast from 'react-hot-toast';

const StartTrialModal = ({ show, onClose, planName = '' }) => {
  const [formData, setFormData] = useState({
    'your-name': '',
    'your-email': '',
    'your-phone': '',
    'your-message': '',
  });
  const modalRef = useRef();

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (show) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [show, onClose]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isFormValid = Object.values(formData).every((val) => val.trim() !== '');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending...');

    const formDataToSend = new FormData();
    formDataToSend.append('_wpcf7', '121');
    formDataToSend.append('_wpcf7_version', '6.1');
    formDataToSend.append('_wpcf7_locale', 'en_US');
    formDataToSend.append('_wpcf7_unit_tag', 'wpcf7-f121-p73-o1');
    formDataToSend.append('_wpcf7_container_post', '73');
    formDataToSend.append('_wpcf7_posted_data_hash', '...');
    formDataToSend.append('your-name', formData['your-name']);
    formDataToSend.append('your-email', formData['your-email']);
    formDataToSend.append('your-phone', formData['your-phone']);
    // formDataToSend.append('your-message', formData['your-message']);
    formDataToSend.append('your-message', `${formData['your-message']}\n\n---\nPlan Selected: ${planName}`);

    try {
      const res = await fetch('https://blog.arvinditi.com/wp-json/contact-form-7/v1/contact-forms/121/feedback', {
        method: 'POST',
        body: formDataToSend,
      });

      const data = await res.json();
      toast.dismiss(loadingToast);

      if (data.status === 'mail_sent') {
        toast.success('Trial request sent Successfully!');
        setFormData({ 'your-name': '', 'your-email': '', 'your-phone': '', 'your-message': '' });
        onClose(); // Close modal
      } else {
        toast.error(data.message || 'Submission failed');
      }
    } catch (err) {
      toast.dismiss(loadingToast);
      console.error(err);
      toast.error('Something went wrong');
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div ref={modalRef} className="bg-white dark:bg-gray-900 rounded-md w-full max-w-xl shadow-lg relative">
        <h2 className="text-xl text-black dark:text-white font-semibold mb-4 py-4 border-b border-primary px-6 py-7">
          Start Your Free Trial
        </h2>
        <form className="space-y-4 p-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="your-name"
            value={formData['your-name']}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full rounded-md  border border-gray-200 dark:border-gray-700 py-3 px-6 text-base text-body-color placeholder-body-color outline-none dark:bg-primary/5 focus:border-primary dark:focus:border-primary"
          />
          <input
            type="email"
            name="your-email"
            value={formData['your-email']}
            onChange={handleChange}
            placeholder="Email"
            className="w-full rounded-md  border border-gray-200 dark:border-gray-700 py-3 px-6 text-base text-body-color placeholder-body-color outline-none dark:bg-primary/5 focus:border-primary dark:focus:border-primary"
          />
          <input
            type="text"
            name="your-phone"
            value={formData['your-phone']}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full rounded-md  border border-gray-200 dark:border-gray-700 py-3 px-6 text-base text-body-color placeholder-body-color outline-none dark:bg-primary/5 focus:border-primary dark:focus:border-primary"
          />
          <textarea
            name="your-message"
            value={formData['your-message']}
            onChange={handleChange}
            placeholder="Describe your project"
            rows={4}
            className="w-full resize-none rounded-md border border-gray-200 dark:border-gray-700 py-3 px-6 text-base text-body-color placeholder-body-color outline-none focus:border-primary dark:bg-primary/5 dark:focus:border-primary"
          ></textarea>
          <button
            disabled={!isFormValid}
            type="submit"
            className={`w-full py-2 rounded-md font-semibold transition-all duration-300 ${
              isFormValid
                ? 'bg-primary text-white hover:bg-opacity-90'
                : 'border border-primary text-primary bg-transparent cursor-not-allowed'
            }`}
          >
            Submit
          </button>
        </form>
        <button
          className="absolute top-6 right-6 text-xl text-gray-600 dark:text-gray-200 hover:bg-gray-800 p-2 rounded-md hover:text-gray-200 transition-colors duration-500"
          onClick={onClose}
        >
          <IoMdClose />
        </button>
      </div>
    </div>
  );
};

export default StartTrialModal;
