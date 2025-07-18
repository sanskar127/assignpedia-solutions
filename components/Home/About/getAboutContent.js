export function getAboutContent(htmlString) {
  if (typeof window === 'undefined') return null;

  const temp = document.createElement('div');
  temp.innerHTML = htmlString;

  const content = {
    section1: {
      title: '',
      paragraph: '',
      features: [],
      image: '',
    },
    section2: {
      blocks: [],
      image: '',
    },
  };

  try {
    // SECTION 1
    const h2 = temp.querySelector('h2');
    if (h2 && h2.textContent.toLowerCase().includes('title:')) {
      content.section1.title = h2.textContent.replace(/title:/i, '').trim();
    }

    const p = temp.querySelector('p');
    if (p && p.textContent.toLowerCase().includes('paragraph:')) {
      content.section1.paragraph = p.textContent.replace(/paragraph:/i, '').trim();
    }

    const liItems = temp.querySelectorAll('li');
    content.section1.features = Array.from(liItems).map((li) => li.textContent.replace(/feature:/i, '').trim());

    const imgs = temp.querySelectorAll('img');
    content.section1.image = imgs[0]?.src || '';
    content.section2.image = imgs[1]?.src || '';

    // SECTION 2
    const section2Blocks = [];
    const h3s = temp.querySelectorAll('h3');

    h3s.forEach((h3) => {
      const title = h3.textContent.replace(/title:/i, '').trim();
      const next = h3.nextElementSibling;
      const description = next?.textContent?.replace(/description:/i, '').trim() || '';
      if (title || description) {
        section2Blocks.push({ title, description });
      }
    });

    content.section2.blocks = section2Blocks;
  } catch (e) {
    console.error('Error parsing about content:', e);
  }

  return content;
}
