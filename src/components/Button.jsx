import React from 'react';

const Button = ({ bgColor, color, size, text, borderRadius }) => {
  return <button type='button'
  className={`${bgColor} ${color} ${size} ${borderRadius}`}>{text}</button>;
};

export default Button;
