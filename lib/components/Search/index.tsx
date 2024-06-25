import React from 'react';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

interface ISearchBarProps extends Omit<TextFieldProps, 'onChange'> {
  onChange: (value: string) => void;
  flag?: boolean;
}

const SearchBar: React.FC<ISearchBarProps> = ({ onChange, flag, ...props }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <TextField
      placeholder="Search..."
      disabled={!flag}
      onChange={handleChange}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        )
      }}
      {...props}
    />
  );
};

export default SearchBar;
