import React, { Fragment } from 'react';
import { compiler } from 'markdown-to-jsx';
import stripHtmlComments from 'strip-html-comments';

import { getMarkdown } from 'styleguide-components/JsDoc/JsDoc';

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
