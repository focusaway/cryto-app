import { ChangeEvent } from "react";

export interface Option {
  label: string;
  value: string;
}

export interface Props {
  classes?: string;
  name?: string;
  label?: string;
  value?: string;
  options: Array<Option>;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}
/**
 * Component for standard select
 * @component
 * @prop   {string} classes  Classes css
 * @prop   {string} name  Name HTML attribute
 * @prop   {string}  label Label attribute
 * @prop   {string} value  Value of data select
 * @prop   {Array<Option>} options  List of options to select
 * @prop   {function} onChange  Callback when value is changed
 */
const Selector: React.FC<Props> = ({ name, label, classes, options, value, onChange }) => {
  const selectorClasses=`${classes}`

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event);
  };

  const optionList = options.map((option: Option, index: number) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <label className={selectorClasses}>
      {label}
      <select
        name={name}
        className="outline-none h-8 px-4 shadow-md bg-white rounded"
        value={value}
        onChange={handleChange}
        autoComplete="off"
      >
        {optionList}
      </select>
    </label>
  );
};

export default Selector;