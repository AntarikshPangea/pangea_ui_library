import React, { useState, useRef } from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

interface IOtpInputProps {
  length: number;
  onChange: (otp: string) => void;
  error?: boolean;
  helperText?: string;
  label: string;
  disabled?: boolean;
}

const OtpInput: React.FC<IOtpInputProps> = ({ length, onChange, error = false, helperText, label, disabled = false }) => {
  const [otp, setOtp] = useState<string[]>(Array(length).fill(''));
  const inputsRef = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);
    onChange(newOtp.join(''));

    // Move to the next input box if the current one is filled
    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, index: number) => {
    if (event.key === 'Backspace' && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <label>{label}</label>
      <Box display="flex" justifyContent="center">
        {otp.map((digit, index) => (
          <TextField
            key={index}
            value={digit}
            onChange={(e) => handleChange(e.target.value, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputProps={{
              maxLength: 1,
              style: { textAlign: 'center' }
            }}
            error={error}
            disabled={disabled}
            ref={(el) => (inputsRef.current[index] = el as HTMLInputElement)}
            sx={{
              width: '40px',
              margin: '0 5px'
            }}
          />
        ))}
      </Box>
      {helperText && (
        <Box mt={1} color={error ? 'error.main' : 'text.secondary'}>
          {helperText}
        </Box>
      )}
    </Box>
  );
};

export default OtpInput;
