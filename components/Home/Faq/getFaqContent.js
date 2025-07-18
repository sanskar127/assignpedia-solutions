import { v4 as uuidv4 } from 'uuid';

export function getFaqContent(htmlString) {
  if (typeof window === 'undefined') return null;

  const temp = document.createElement('div');
  temp.innerHTML = htmlString;

  const blocks = [];
  const headings = temp.querySelectorAll('h3');

  headings.forEach((h3) => {
    const title = h3.textContent.replace(/^\s*title:\s*/i, '').trim();
    const rawDesc = h3.nextElementSibling?.textContent || '';
    const desc = rawDesc.replace(/^\s*description:\s*/i, '').trim();

    if (title && desc) {
      blocks.push({
        // id: crypto.randomUUID(),
        id: uuidv4(),
        title,
        paragraph: desc,
      });
    }
  });

  return blocks;
}
