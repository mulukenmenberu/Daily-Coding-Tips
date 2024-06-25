import React from 'react';
import classNames from 'classnames';

/* 
    Dynamic Class Names with classnames Library:
      - Constructs class names conditionally, enhancing code readability
        and maintainability.
*/

const DynamicClassNames = ({ isActive, isDisabled }) => {
  const buttonClass = classNames({
    btn: true,
    'btn-active': isActive,
    'btn-disabled': isDisabled,
  });

  return (
    <button className={buttonClass}>
      Click Me
    </button>
  );
};

export default DynamicClassNames;
