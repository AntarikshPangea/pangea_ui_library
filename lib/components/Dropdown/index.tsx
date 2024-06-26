import React from 'react';
import { Autocomplete, TextField, AutocompleteProps } from '@mui/material';

interface IDropdownProps extends Partial<AutocompleteProps<any, any, any, any>> {
  disabled?: boolean;
  errormsg?: string;
  options: { value: string | number; label: string }[];
  label?: string;
  isSelect?: boolean;
}

const Dropdown: React.FC<IDropdownProps> = ({ disabled = true, errormsg, options, label, isSelect = false, onChange, ...props }) => {
  return (
    <Autocomplete
      disabled={!disabled}
      options={options.map((option) => option.label)}
      onChange={onChange}
      renderInput={(params) => <TextField {...params} label={label} error={Boolean(errormsg)} helperText={errormsg} />}
      disableClearable={isSelect}
      {...props}
    />
  );
};

export default Dropdown;
