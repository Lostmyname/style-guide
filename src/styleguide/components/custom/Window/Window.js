import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import copy from 'copy-to-clipboard';

import WindowBase from './Window.styled';

const Window = ({ title, initialCopyLabel, successCopyLabel, failedCopyLabel, children, handleCopyOnClick }) => {
  const [{ copyLabel }, dispatch] = useReducer((state, type) => {
    switch (type) {
      case true:
        return { copyLabel: successCopyLabel };
      case false:
        return { copyLabel: failedCopyLabel };
      default:
        return { copyLabel: initialCopyLabel }
    }
  }, { copyLabel: initialCopyLabel });

  const onHandleClick = () => {
    const result = handleCopyOnClick(copy);
    dispatch(result);
    setTimeout(() => {
      dispatch();
    }, 1000);
  };

  return (
    <WindowBase>
      <WindowBase.Header>
        <WindowBase.Header.Controls />
        {title}
        {handleCopyOnClick && (
          <WindowBase.Header.Copy onClick={onHandleClick}>
            {copyLabel}
          </WindowBase.Header.Copy>
        )}
      </WindowBase.Header>
      <WindowBase.Container>
        {children}
      </WindowBase.Container>
    </WindowBase>
  );
};

Window.defaultProps = {
  initialCopyLabel: 'copy code',
  successCopyLabel: 'code copied',
  failedCopyLabel: 'code failed to copy',
};

Window.propTypes = {
  title: PropTypes.string.isRequired,
  initialCopyLabel: PropTypes.string,
  successCopyLabel: PropTypes.string,
  failedCopyLabel: PropTypes.string,
  children: PropTypes.node.isRequired,
  handleCopyOnClick: PropTypes.func,
};

export default Window;
