import React from 'react';
import { TextField, MenuItem, BaseTextFieldProps } from '@mui/material';

interface DropdownProps extends BaseTextFieldProps {
  label: string;
  options: string[];
  onChange:(e:any)=>void;
}

const Dropdown: React.FC<DropdownProps> = ({ label, options, onChange, ...props }) => {
  return (
    <TextField
      select
      label={label}
      variant="outlined"
      onChange={onChange}
      fullWidth
      {...props}
    >
      {options.map((option) => (
        <MenuItem key={option} value={option}>
          {option}
        </MenuItem>
      ))}
    </TextField>
  );
};

export default Dropdown;
