import React from 'react';
import {BaseTextFieldProps, default as MuiTextField } from '@mui/material/TextField';

interface ITextFieldProps extends BaseTextFieldProps {
  flag?: boolean;
  errormsg?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
}

const TextField: React.FC<ITextFieldProps> = ({
  flag = true,
  errormsg,
  onChange,
  label,
  ...props
}) => {
  return (
    <MuiTextField
      label={label}
      error={Boolean(errormsg)}
      helperText={errormsg}
      onChange={onChange}
      disabled={!flag}
      {...props}
    />
  );
};

export default TextField;
