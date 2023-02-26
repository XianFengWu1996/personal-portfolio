import React from 'react';

interface InputProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  placeholder?: string;
  name?: string;
}

export const ContactInput = ({
  type = 'text',
  placeholder = 'Enter text here',
  name = '',
}: InputProps) => {
  return (
    <input
      className="my-2 px-4 py-2 rounded-lg"
      name={name}
      type={type}
      placeholder={placeholder}
    />
  );
};
