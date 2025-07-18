const FaqFeature = ({ faq, index, isOpen, toggleIndex }) => {
  const { title, paragraph } = faq;

  return (
    <div
      key={index}
      className={`p-4 border rounded-xl transition-all duration-300 ${
        isOpen ? 'bg-primary/5 border-gray-600 ' : 'border-gray-700'
      }`}
    >
      <button
        onClick={() => toggleIndex(index)}
        className="w-full px-6 py-1 flex items-center justify-between text-left text-lg font-medium text-gray-900 hover:text-gray-600 focus:outline-none"
      >
        <span className="font-bold text-dark dark:text-white line-clamp-2 min-h-[3.5rem] leading-snug pt-4">
          {title}
        </span>
        <svg
          className={`w-6 h-6 transform transition-transform duration-300 ${
            isOpen ? 'rotate-180 text-gray-600' : ' text-gray-700'
          }`}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
        </svg>
      </button>

      <div
        className={`px-6 overflow-hidden transition-max-height duration-300 ${
          isOpen ? 'max-h-[500px] py-4' : 'max-h-0'
        }`}
      >
        <div className="text-lg text-gray-800 dark:text-gray-200 line-clamp-3 mb-2 mt-1 font-normal font-sans">
          {paragraph}
        </div>
      </div>
    </div>
  );
};

export default FaqFeature;
