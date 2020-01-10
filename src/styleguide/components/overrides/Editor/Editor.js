import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SimpleEditor from 'react-simple-code-editor';

import { highlight as prismHighlight, languages } from 'prismjs';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';

import Window from '../../custom/Window';

const highlight = (code) => prismHighlight(code, languages.jsx, 'jsx');

const Editor = ({ code, onChange }) => {
  const [currentCode, setCurrentCode] = useState(code);

  const onHandleChange = code => {
    setCurrentCode(code);
    onChange(code);
  };

  const handleCopyOnClick = (copyFn) => copyFn(currentCode);

  return (
    <Window title="Component code" handleCopyOnClick={handleCopyOnClick}>
      <SimpleEditor
        value={currentCode}
        onValueChange={onHandleChange}
        highlight={highlight}
      />
    </Window>
  );
};

Editor.propTypes = {
  code: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Editor;
