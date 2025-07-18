import { v4 as uuidv4 } from 'uuid';

export function getFeaturesContent(htmlString) {
  if (typeof window === 'undefined') return null;

  const temp = document.createElement('div');
  temp.innerHTML = htmlString;

  const blocks = [];
  const headings = temp.querySelectorAll('h3');

  headings.forEach((h3) => {
    const title = h3.textContent.replace(/^feature:/i, '').trim();
    const desc = h3.nextElementSibling?.textContent.replace(/^description:/i, '').trim();
    const icon = h3.nextElementSibling?.nextElementSibling?.textContent.replace(/^icon:/i, '').trim();

    if (title && desc && icon) {
      blocks.push({
        // id: crypto.randomUUID(),
        id: uuidv4(),
        title,
        paragraph: desc,
        iconName: icon,
      });
    }
  });

  return blocks;
}
