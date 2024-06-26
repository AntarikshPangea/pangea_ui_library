import React, { useState } from 'react';
import { Button, Dropdown, OtpInput, PasswordInput, Radio, TextField } from 'pangea_ui_library';
import TextArea from 'pangea_ui_library/components/TextArea';
import SearchBar from 'pangea_ui_library/components/Search';
import OtpAuthPage, { IOtpAuthPageProps } from 'pangea_ui_library/pages/OtpAuthPage';
import AuthPage, { IAuthPageProps } from 'pangea_ui_library/pages/AuthPage';
import SsoAuthPage, { ISsoAuthPageProps } from 'pangea_ui_library/pages/SsoAuthPage';
import { RadioOption } from 'pangea_ui_library/components/Radio';
import ErrorPage from 'pangea_ui_library/pages/ErrorPage';
import TabsComponent from 'pangea_ui_library/components/Tabs';

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
  const [selectedOption, setSelectedOption] = useState<string>('option1');

  const options: RadioOption[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' }
  ];

  const handleOptionChange = (value: string) => {
    setSelectedOption(value);
  };

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

  const tabs = [
    { label: 'Tab 1', content: <div>Content for Tab 1</div> },
    { label: 'Tab 2', content: <div>Content for Tab 2</div> },
    { label: 'Tab 3', content: <div>Content for Tab 3</div> }
  ];

  const handleRefresh = () => {
    // Logic to refresh the page or reload data
    window.location.reload();
  };

  return (
    <div>
      <TextField label="Example Label" value={textFieldValue} onChange={handleTextFieldChange} errormsg={textFieldError} disabled={flag} />
      <Dropdown
        label="Example Dropdown"
        value={dropdownValue}
        onChange={handleDropdownChange}
        errormsg={dropdownError}
        disabled={flag}
        options={dropdownOptions}
        isSelect={true} // Set to true for select-like behavior
      />
      <TextArea label="Example TextArea" value={textAreaValue} onChange={handleTextAreaChange} errormsg={textAreaError} disabled={flag} />
      <SearchBar value={searchValue} onChange={handleSearchChange} disabled={flag} />
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
      <div className="App">
        <h1>Tabs Example</h1>
        <TabsComponent tabs={tabs} variant="fullWidth" centered indicatorColor="primary" textColor="primary" />
      </div>
      <Radio label="Select an option" options={options} value={selectedOption} onChange={handleOptionChange} RadioProps={{ color: 'primary' }} />
      <OtpAuthPage {...otpAuthPageProps} />
      <AuthPage {...authPageProps} />
      <SsoAuthPage {...ssoAuthPageProps} />
      <ErrorPage errorMessage="Failed to load data." onRefresh={handleRefresh} />
      <Button onClick={toggleFlag}>{flag ? 'Disable' : 'Enable'} Inputs</Button>
    </div>
  );
};

export default App;
