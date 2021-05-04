import { ChangeEvent } from "react";

export interface Option {
  label: string;
  value: string;
}

export interface Props {
  name?: string;
  label?: string;
  value?: string;
  options: Array<Option>;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Selector: React.FC<Props> = ({ name, label, options, value, onChange }) => {

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    onChange(event);
  };

  const optionList = options.map((option: Option, index: number) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <label className="">
      {label}
      <select
        name={name}
        className=""
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