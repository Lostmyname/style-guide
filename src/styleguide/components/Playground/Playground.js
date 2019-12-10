import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import DefaultContext from 'styleguide-components/Context';
import DefaultSlot from 'styleguide-components/Slot';
import DefaultPreview from 'styleguide-components/Preview';

import PlaygroundBase from './Playground.styled';

export function Playground({ code, evalInContext }) {
  const [currentCode, setCurrentCode] = useState(code);

  const { config } = useContext(DefaultContext);

  const handleOnChange = debounce(code => {
    setCurrentCode(code);
  }, config.previewDelay);

  return (
    <div data-classname="playground">
      <PlaygroundBase.Preview>
        <DefaultPreview code={currentCode} evalInContext={evalInContext} />
      </PlaygroundBase.Preview>
      <DefaultSlot
        name="exampleTabs"
        // evalInContext passed through to support custom slots that eval code
        props={{ code: currentCode, onChange: handleOnChange, evalInContext }}
      />
    </div>
  );
}

Playground.propTypes = {
  children: PropTypes.node,
};

export default Playground;
