import React, { Fragment } from 'react';

import compact from 'lodash/compact';
import map from 'lodash/map';
import { compiler } from 'markdown-to-jsx';
import stripHtmlComments from 'strip-html-comments';

const mapDescriptionAndJoin = (array, joiner) => array.map(({ description }) => description).join(joiner);

const plural = ({ length }, caption) => length === 1 ? caption : `${caption}s`;
const list = array => mapDescriptionAndJoin(array, ', ');
const paragraphs = array => mapDescriptionAndJoin(array, '\n\n');

const fields = {
  version: value => `Version: ${value[0].description}`,
  deprecated: value => compact(['Deprecated', value[0].description]).join(': '),
  see: value => paragraphs(value),
  link: value => paragraphs(value),
  author: value => `${plural(value, 'Author')}: ${list(value)}`,
  since: value => `Since: ${value[0].description}`,
};

const getMarkdown = props => map(fields, (format, field) => {
  const tag = props[field];
  return tag && format(tag);
})
  .filter(Boolean)
  .join('\n\n');

const JsDoc = (props) => {
  const markdown = getMarkdown(props);
  if (!markdown) {
    return null;
  }
  return compiler(stripHtmlComments(markdown), {
    createElement(type, props, children) {
      if (type === 'div') {
        return (
          <Fragment>
            {children}
          </Fragment>
        )
      }
      return React.createElement(type, props, children)
    },
  });
};

export default JsDoc;
