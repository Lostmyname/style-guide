import get from 'lodash/get';

const getTitleFromMarkdown = (markdown, removeMarkdownSigniture = false) => {
  const content = get(markdown, '[0].content');

  if (!content) {
    return null;
  }

  const startsWithOneHashRegex = /^#( |\w)+/g;
  const titleFromMarkdown = (content.match(startsWithOneHashRegex) || [''])[0];

  if (!removeMarkdownSigniture) {
    return titleFromMarkdown;
  }

  return titleFromMarkdown.replace(/^#( |)/, '');
};

export default getTitleFromMarkdown;
