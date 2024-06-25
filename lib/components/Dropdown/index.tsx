import React from 'react';
import { Autocomplete, TextField, AutocompleteProps } from '@mui/material';

interface IDropdownProps extends Partial<AutocompleteProps<any, any, any, any>> {
  flag?: boolean;
  errormsg?: string;
  options: { value: string | number; label: string }[];
  label?: string;
  isSelect?: boolean; 
}

const Dropdown: React.FC<IDropdownProps> = ({
  flag = true,
  errormsg,
  options,
  label,
  isSelect = false,
  onChange,
  ...props
}) => {
  return (
    <Autocomplete
      disabled={!flag}
      options={options.map(option => option.label)}
      onChange={onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          error={Boolean(errormsg)}
          helperText={errormsg}
        />
      )}
      disableClearable={isSelect}
      {...props}
    />
  );
};

export default Dropdown;
