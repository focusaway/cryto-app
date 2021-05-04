import { ChangeEvent } from "react";

export interface Props {
  label?: string;
  name?: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<Props> = ({ label, name, value, type, onChange }) => {

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event);
  };

  return (
    <label className="">
      {label}
      <input
        name={name}
        type={type}
        value={value}
        onChange={handleInput}
      />
    </label>
  );
};

export default Input;