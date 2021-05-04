import { ChangeEvent, useState } from "react";

import Selector, { Option } from '../Selector/Selector'
import Input from '../Input/Input'

export interface FilterOutput {
  field: string;
  value: string;
}

export interface Props {
  classes?: string;
  labelButton?: string;
  clearLabelButton?: string;
  options: Array<Option>;
  onSearch: (event: FilterOutput) => void;
  onError?: (error: string) => void;
}

const Filter: React.FC<Props> = ({ labelButton='Filter', clearLabelButton='Clear', classes, options, onSearch, onError }) => {
  const inputClasses=`${classes} flex`
  const [value, setValue] = useState('');
  const [field, setField] = useState(options[0]?.value);

  const handleSearch = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    if (!value || !field) {
      if (onError) onError('Por favor ingrese un valor para filtrar')
      return
    }
    emit();
  };

  const emit = () => {
    setField('');
    setValue('');
    const output: FilterOutput = {
      field,
      value
    };
    onSearch(output);
  }

  const handleChange = (event: ChangeEvent<HTMLSelectElement>): void => {
    setField(event?.target?.value);
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setValue(event?.target?.value);
  };

  return (
    <form onSubmit={handleSearch} className={inputClasses}>
      <Selector
        classes="mr-4"
        value={field}
        options={options}
        onChange={handleChange}
      />
      <Input
        classes="mr-4"
        type="text"
        value={value}
        onChange={handleInput}
      />
      <button
        className="outline-none bg-indigo-600 text-white font-semibold rounded flex items-center justify-center h-8 px-4 shadow-md mr-2"
      >
        {labelButton}
      </button>
      <button
        className="outline-none bg-red-600 text-white font-semibold rounded flex items-center justify-center h-8 px-4 shadow-md"
        type="button"
        onClick={emit}
      >
        {clearLabelButton}
      </button>
    </form>
  );
};

export default Filter;
