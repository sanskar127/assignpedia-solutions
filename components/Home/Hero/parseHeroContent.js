export function parseHeroContent(htmlString) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlString, 'text/html');

  const h1 = doc.querySelector('h1');
  let title = '';
  if (h1) {
    if (h1.textContent.includes('title:')) {
      title = h1.textContent.replace('title:', '').trim();
    } else {
      title = h1.textContent.trim();
    }
  }

  const pTags = [...doc.querySelectorAll('p')];
  let paragraph = '';
  let links = [];

  pTags.forEach((p) => {
    const text = p.textContent.trim();

    if (text.startsWith('paragraph:')) {
      paragraph = text.replace('paragraph:', '').trim();
    } else if (text.startsWith('link1:') || text.startsWith('link2:')) {
      const value = text.substring(text.indexOf(':') + 1).trim();
      const [url, linkText] = value.split('|').map((s) => s.trim());
      if (url && linkText) {
        links.push({ url, text: linkText });
      }
    } else if (!paragraph) {
      paragraph = text;
    }
  });

  return { title, paragraph, links };
}
