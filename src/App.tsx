import React, { useState } from 'react';
import { Button, Dropdown, OtpInput, PasswordInput, TextField } from 'pangea_ui_library';
import TextArea from 'pangea_ui_library/components/TextArea';
import SearchBar from 'pangea_ui_library/components/Search';
import OtpAuthPage, { IOtpAuthPageProps } from 'pangea_ui_library/pages/OtpAuthPage';
import AuthPage, { IAuthPageProps } from 'pangea_ui_library/pages/AuthPage';
import SsoAuthPage, { ISsoAuthPageProps } from 'pangea_ui_library/pages/SsoAuthPage';

const App: React.FC = () => {
  const [textFieldValue, setTextFieldValue] = useState('');
  const [textFieldError, setTextFieldError] = useState('');
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [dropdownError, setDropdownError] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');
  const [textAreaError, setTextAreaError] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [otp, setOtp] = useState('');
  const [otpError, setOtpError] = useState(false);
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

  const handlePasswordChange = (value: string) => {
    setPasswordValue(value);
    if (value === '') {
      setPasswordError('Password is required');
    } else {
      setPasswordError('');
    }
  };

  const handleOtpChange = (value: string) => {
    setOtp(value);
    if (value.length !== 6) {
      // Assuming OTP length is 6
      setOtpError(true);
    } else {
      setOtpError(false);
    }
  };

  const otpAuthPageProps: IOtpAuthPageProps = {
    fields: [{ label: 'Email', type: 'email' }],
    logoUrl: 'https://via.placeholder.com/150',
    onSendOtp: (email: string) => {
      console.log(`OTP sent to ${email}`);
      return true;
    },
    onVerifyOtp: (otp: string) => {
      console.log(`OTP verified: ${otp}`);
      return otp === '123456'; // Dummy verification logic
    }
  };

  const handleAuthSubmit = (data: { [key: string]: string }): boolean => {
    console.log(data);
    // Implement your submission logic here
    // Return true if submission is successful, false otherwise
    return true;
  };

  const authPageProps: IAuthPageProps = {
    mode: 'forgotPassword', // Change this to "signup" or "forgotPassword" as needed
    logoUrl: 'https://via.placeholder.com/150',
    onSubmit: handleAuthSubmit
  };

  const handleSsoAuthSubmit = (): string => {
    console.log('hello');
    // Implement your submission logic here
    // Return true if submission is successful, false otherwise
    return 'token';
  };

  const ssoAuthPageProps: ISsoAuthPageProps = {
    buttonLabel: 'Login using Microsoft',
    logoUrl: 'https://via.placeholder.com/150',
    onLogin: handleSsoAuthSubmit
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
      <PasswordInput
        label="Password"
        value={passwordValue}
        onChange={handlePasswordChange}
        error={!!passwordError}
        helperText={passwordError ? 'Password is required' : ''}
        variant="outlined"
        fullWidth
      />
      <OtpInput
        label="OTP"
        length={6}
        onChange={handleOtpChange}
        error={otpError}
        helperText={otpError ? 'Please enter a valid OTP' : ''}
        disabled={!flag}
      />
      <Button variant="contained" color="primary" fullWidth onClick={handleButtonClick} disabled={!flag}>
        Click Me
      </Button>
      <OtpAuthPage {...otpAuthPageProps} />
      <AuthPage {...authPageProps} />
      <SsoAuthPage {...ssoAuthPageProps} />
      <Button onClick={toggleFlag}>{flag ? 'Disable' : 'Enable'} Inputs</Button>
    </div>
  );
};

export default App;
