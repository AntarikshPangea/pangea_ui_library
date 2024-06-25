import React, { useState } from 'react';
import { Dropdown, TextField } from 'pangea_ui_library';
import TextArea from 'pangea_ui_library/components/TextArea';

const App: React.FC = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textFieldError, setTextFieldError] = useState('');
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [dropdownError, setDropdownError] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [textAreaError, setTextAreaError] = useState('');
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
      <button onClick={toggleFlag}>{flag ? 'Disable' : 'Enable'} Inputs</button>
    </div>
  );
};

export default App;
