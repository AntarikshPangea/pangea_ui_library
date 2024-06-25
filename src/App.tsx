import React, { useState } from 'react';
import { Button, Dropdown, TextField } from 'pangea_ui_library';
import TextArea from 'pangea_ui_library/components/TextArea';
import SearchBar from 'pangea_ui_library/components/Search';

const App: React.FC = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textFieldError, setTextFieldError] = useState('');
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [dropdownError, setDropdownError] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [textAreaError, setTextAreaError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [flag, setFlag] = useState(true);

  const handleTextFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextFieldValue(event.target.value);
    if (event.target.value === '') {
      setTextFieldError('This field is required');
    } else {
      setTextFieldError('');
    }
  };

  const handleDropdownChange = (event: any, newValue: string | null) => {
    setDropdownValue(newValue);
    if (newValue === null) {
      setDropdownError('This field is required');
    } else {
      setDropdownError('');
    }
  };

  const handleTextAreaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTextAreaValue(event.target.value);
    if (event.target.value === '') {
      setTextAreaError('This field is required');
    } else {
      setTextAreaError('');
    }
  };

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const handleButtonClick = () => {
    console.log('Button clicked!');
    // Add functionality as needed
  };

  const toggleFlag = () => {
    setFlag((prevFlag) => !prevFlag);
  };

  const dropdownOptions = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];

  return (
    <div>
      <TextField label="Example Label" value={textFieldValue} onChange={handleTextFieldChange} errormsg={textFieldError} flag={flag} />
      <Dropdown
        label="Example Dropdown"
        value={dropdownValue}
        onChange={handleDropdownChange}
        errormsg={dropdownError}
        flag={flag}
        options={dropdownOptions}
        isSelect={true} // Set to true for select-like behavior
      />
      <TextArea label="Example TextArea" value={textAreaValue} onChange={handleTextAreaChange} errormsg={textAreaError} flag={flag} />
      <SearchBar value={searchValue} onChange={handleSearchChange} flag={flag} />
      <Button variant="contained" color="primary" fullWidth onClick={handleButtonClick} disabled={!flag}>
        Click Me
      </Button>
      <Button onClick={toggleFlag}>{flag ? 'Disable' : 'Enable'} Inputs</Button>
    </div>
  );
};

export default App;
