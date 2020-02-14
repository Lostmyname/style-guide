import get from 'lodash/get';
import getTitleFromMarkdown from './get-title-from-markdown';

const removeTitleFromMarkdown = (markdown) => {
  const titleFromMarkdown = getTitleFromMarkdown(markdown);

  if (!titleFromMarkdown) {
    return markdown;
  }

  const content = get(markdown, '[0].content');

  // Need to mutate the value passed in as it has specific
  // context used to render component examples
  markdown.splice(0, 1, {
    ...markdown[0],
    content: content.replace(titleFromMarkdown, '').trimLeft(),
  });

  return markdown;
};

export default removeTitleFromMarkdown;
