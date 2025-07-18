import React, { useEffect, useState } from 'react';
import parse from 'html-react-parser';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import { coy } from 'react-syntax-highlighter/dist/cjs/styles/prism';

const ContentRenderer = ({ content }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (code, index) => {
    navigator.clipboard.writeText(code).then(() => {
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  let codeBlockCount = 0;

  useEffect(() => {
    // Tailwind applies 'dark' class on <html> or <body>
    const darkClass = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkClass);

    // Optional: Listen for class changes if your theme toggles dynamically
    const observer = new MutationObserver(() => {
      setIsDarkMode(document.documentElement.classList.contains('dark'));
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  // Syntax Highlighter style based on current mode
  const style = isDarkMode ? oneDark : coy;

  // same parsing logic as before
  const options = {
    replace: (domNode) => {
      if (domNode.name === 'pre' && domNode.children.length === 1 && domNode.children[0].name === 'code') {
        const codeNode = domNode.children[0];
        const className = codeNode.attribs?.class || '';
        const match = className.match(/language-(\w+)/);
        const language = match ? match[1] : 'text';
        const codeContent = codeNode.children[0]?.data || '';

        const currentIndex = codeBlockCount;
        codeBlockCount += 1;

        return (
          <>
            <div className="relative group mb-6">
              <SyntaxHighlighter language={language} style={style} showLineNumbers>
                {codeContent}
              </SyntaxHighlighter>

              {/* Copy button */}
              <button
                onClick={() => handleCopy(codeContent, currentIndex)}
                className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 dark:bg-text-800 text-white text-xs py-1 px-3 rounded select-none"
                aria-label="Copy code to clipboard"
                type="button"
              >
                {copiedIndex === currentIndex ? 'Copied!' : 'Copy'}
              </button>
            </div>
          </>
        );
      }
    },
  };

  return (
    <div className="prose dark:prose-invert max-w-none mb-8 font-base leading-relaxed text-gray-700 dark:text-gray-300 sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
      {parse(content, options)}
    </div>
  );
};

export default ContentRenderer;
