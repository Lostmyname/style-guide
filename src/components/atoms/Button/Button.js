import React from 'react';
import PropTypes from 'prop-types';

import generateDataClass from 'src/utils/generate-data-class';

import ButtonTag, { ButtonLinkTag } from './Button.styled';

const oneOfProps = {
  colour: [
    'green-light',
    'green',
    'green-medium',
    'green-dark',
    'yellow',
    'yellow-dark',
    'pink',
    'pink-dark',
    'red',
    'red-dark',
    'purple',
    'purple-medium',
    'purple-dark',
    'orange',
    'orange-medium',
    'orange-dark',
    'blue',
    'blue-medium',
    'blue-dark',
    'white',
    'almost-light',
    'grey-light',
    'grey',
    'grey-medium',
    'grey-dark',
    'almost-black'
  ],
  textSize: ['small']
};

const Tag = ({ href, children, ...rest }) => {
  if (href) {
    return <ButtonLinkTag href={href} {...rest}>{children}</ButtonLinkTag>
  }

  return <ButtonTag {...rest}>{children}</ButtonTag>
};

/**
 * The only true button.
 *
 * @version 1.0.0
 * @author [Edwin Joseph](https://github.com/edwinjoseph)
 */
const Button = ({ children, ...rest }) => {
  const classNames = generateDataClass('button', rest,
    ['raised', 'outlined', 'unstyled', 'textSize', 'fullWidth', 'disabled', 'colour']
  );
  return (
    <Tag data-classnames={classNames} {...rest}>
      {children}
    </Tag>
  );
};

Button.propTypes = {
  href: PropTypes.string,
  className: PropTypes.string,
  raised: PropTypes.bool,
  outlined: PropTypes.bool,
  unstyled: PropTypes.bool,
  disabled: PropTypes.bool,
  /** Span the button across the available parent space */
  fullWidth: PropTypes.bool,
  /** Change the color of a button */
  colour: PropTypes.oneOf(oneOfProps.colour),
  textSize: PropTypes.oneOf(oneOfProps.textSize),
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired
};

Button.defaultProps = {
  colour: 'grey-medium',
  raised: false
};

export default Button;
