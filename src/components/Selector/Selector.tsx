import { ChangeEvent, useState } from "react";

export interface Option {
  label: string;
  value: string;
}

export interface Props {
  label?: string;
  options: Array<Option>;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const Selector: React.FC<Props> = ({ label, options, onChange }) => {
  const [value, setValue] = useState('');

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    const newValue = event?.target?.value;
    setValue(newValue);
    onChange(event);
  };

  const optionList = options.map((option: Option, index: number) => (
    <option key={index} value={option.value}>
      {option.label}
    </option>
  ));

  return (
    <label className="">{ label }
      <select className="" value={value} onChange={handleChange} autoComplete="off">
        {optionList}
      </select>
    </label>
  );
};

export default Selector;