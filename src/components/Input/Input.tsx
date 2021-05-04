import { ChangeEvent } from "react";

export interface Props {
  classes?: string;
  label?: string;
  name?: string;
  value: string;
  type?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * Component for standard input
 * @component
 * @prop   {string} classes  Classes css
 * @prop   {string} name  Name HTML attribute
 * @prop   {string}  label Label attribute
 * @prop   {string} value  Value of data input
 * @prop   {string} type  Type HTML attribute
 * @prop   {function} onChange  Callback when value is changed
 */
const Input: React.FC<Props> = ({ label, name, classes, value, type, onChange }) => {
  const inputClasses=`${classes} rounded-3xl`
  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    onChange(event);
  };

  return (
    <label className={inputClasses}>
      {label}
      <input
        className="h-8 px-4 rounded-3xl shadow-md outline-none w-full"
        name={name}
        type={type}
        value={value}
        onChange={handleInput}
      />
    </label>
  );
};

export default Input;