import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash/debounce';

import DefaultContext from 'styleguide-components/Context';
import DefaultSlot from 'styleguide-components/Slot';
import DefaultPreview from 'styleguide-components/Preview';

import { ExampleModes } from 'styleguide-client/consts';

import PlaygroundBase from './Playground.styled';
import DefaultHeading from 'styleguide-components/Heading';

export function Playground({ code, evalInContext, exampleMode, settings: { noeditor, title } }) {
  const [currentCode, setCurrentCode] = useState(code);

  const { config } = useContext(DefaultContext);

  const handleOnChange = debounce(code => {
    setCurrentCode(code);
  }, config.previewDelay);


  const isExampleHidden = exampleMode === ExampleModes.hide;
  const isEditorHidden = noeditor || isExampleHidden;
  const isTitleHidden = (!title && isEditorHidden);

  return (
    <div data-classname="playground">
      {!isTitleHidden && (
        <PlaygroundBase.Title>
          <DefaultHeading level={4}>
            {!isEditorHidden ? 'Playground' : title}
          </DefaultHeading>
        </PlaygroundBase.Title>
      )}
      <PlaygroundBase.Preview isEditorHidden={isEditorHidden}>
        <DefaultPreview code={currentCode} evalInContext={evalInContext} />
      </PlaygroundBase.Preview>
      {!isEditorHidden && (
        <DefaultSlot
          name="exampleTabs"
          // evalInContext passed through to support custom slots that eval code
          props={{ code: currentCode, onChange: handleOnChange, evalInContext }}
        />
      )}
    </div>
  );
}

Playground.propTypes = {
  children: PropTypes.node,
};

export default Playground;
