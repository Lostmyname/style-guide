import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import DefaultSectionHeading from 'styleguide-components/SectionHeading';
import DefaultContext from 'styleguide-components/Context';
import DefaultSlot from 'styleguide-components/Slot';
import DefaultMarkdown from 'styleguide-components/Markdown';
import DefaultExamples from 'styleguide-components/Examples';
import DefaultExamplePlaceholder from 'styleguide-components/ExamplePlaceholder';

import JsDoc from '../JsDoc';
import ReactComponentRenderer from './ReactComponentRenderer';

const ReactComponent = ({ component, exampleMode }) => {
  const { config: { pagePerSection } } = useContext(DefaultContext);

  const { name, visibleName, filepath, pathLine, props = {} } = component;
  const { description = '', examples = [], tags = {} } = props;

  const hasDescription = !!description && description !== '\n';

  if (!name) {
    return null;
  }

  return (
    <ReactComponentRenderer
      name={name}
      filepath={filepath}
      pathLine={pathLine}
      docs={<JsDoc {...tags} />}
      description={hasDescription && <DefaultMarkdown text={description} />}
      heading={
        <DefaultSectionHeading
          id={''}
          pagePerSection={pagePerSection}
          deprecated={!!tags.deprecated}
          slotName="componentToolbar"
          slotProps={component}
          depth={1}
        >
          {visibleName}
        </DefaultSectionHeading>
      }
      examples={
        examples.length > 0 ? (
          <DefaultExamples examples={examples} name={name} exampleMode={exampleMode} />
        ) : (
          <DefaultExamplePlaceholder name={name} />
        )
      }
      tabButtons={<div />}
      tabBody={
        <DefaultSlot
          name="docsTabs"
          props={component}
        />
      }
    />
  );
};

ReactComponent.propTypes = {
  component: PropTypes.shape({
    name: PropTypes.string.isRequired,
    visibleName: PropTypes.string.isRequired,
    filepath: PropTypes.string.isRequired,
    pathLine: PropTypes.string.isRequired,
    slug: PropTypes.string,
    props: PropTypes.object,
  }).isRequired,
  depth: PropTypes.number.isRequired,
  exampleMode: PropTypes.string.isRequired,
};

export default ReactComponent;
