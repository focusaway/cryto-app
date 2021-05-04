import { ChangeEvent, useState } from "react";

import Selector, { Option } from '../Selector/Selector'
import Input from '../Input/Input'

export interface FilterOutput {
  field: string;
  value: string;
}

export interface Props {
  label?: string;
  labelButton?: string;
  options: Array<Option>;
  onSearch: (event: FilterOutput) => void;
  onError?: (error: string) => void;
}

const Filter: React.FC<Props> = ({ label, labelButton='search', options, onSearch, onError }) => {

  const [value, setValue] = useState('');
  const [field, setField] = useState(options[0]?.value);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!value) {
      if (onError) onError('Por favor ingrese un valor para filtrar')
      return
    }
    const output: FilterOutput = {
      field,
      value
    };
    onSearch(output);
  };

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setField(event?.target?.value);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event?.target?.value);
  };

  return (
    <form onSubmit={handleSearch}>
      <label>{label}</label>
      <Selector
        value={field}
        options={options}
        onChange={handleChange}
      />
      <Input
        type="text"
        value={value}
        onChange={handleInput}
      />
      <button>{labelButton}</button>
    </form>
  );
};

export default Filter;
