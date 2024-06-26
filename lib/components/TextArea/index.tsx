import React from 'react';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

// Define the props for the custom TextArea component
interface ITextAreaProps extends BaseTextFieldProps {
  disabled?: boolean;
  errormsg?: string;
  label?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextArea: React.FC<ITextAreaProps> = ({ disabled = true, errormsg, label, onChange, ...props }) => {
  return (
    <TextField label={label} error={Boolean(errormsg)} helperText={errormsg} onChange={onChange} multiline rows={4} disabled={!disabled} {...props} />
  );
};

export default TextArea;
