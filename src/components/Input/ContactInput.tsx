import React, { ChangeEventHandler } from 'react';

interface InputProps {
  type?: React.HTMLInputTypeAttribute | undefined;
  name?: string;
  value: string | number | readonly string[];
  id: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  required?: boolean;
}

export const ContactInput = ({
  type = 'text',
  name = '',
  required = false,
  id,
  value,
  onChange,
}: InputProps) => {
  return (
    <div className="my-3 relative">
      <input
        id={id}
        className="input--contact"
        name={name}
        type={type}
        required={required}
        value={value}
        onChange={onChange}
      />

      <label htmlFor={id} className="label--contact">
        {name}
      </label>
    </div>
  );
};
