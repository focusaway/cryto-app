import { ChangeEvent } from "react";

export interface Props {
  classes?: string;
  label?: string;
  name?: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ label, name, classes, value, type, onChange }) => {
  const inputClasses=`${classes} rounded-3xl`
  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event);
  };

  return (
    <label className={inputClasses}>
      {label}
      <input
        className="h-8 px-4 rounded-3xl shadow-md outline-none"
        name={name}
        type={type}
        value={value}
        onChange={handleInput}
      />
    </label>
  );
};

export default Input;