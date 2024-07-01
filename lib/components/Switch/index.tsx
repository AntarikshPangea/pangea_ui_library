// CustomSwitch.tsx
import React from 'react';
import { Switch as MuiSwitch, SwitchProps } from '@mui/material';
import { styled } from '@mui/system';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

interface CustomSwitchProps extends Omit<SwitchProps, 'color'> {
  color?: string;
  label: string;
}

const IOSSwitch = styled((props: CustomSwitchProps) => <MuiSwitch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme, color }) => ({
    width: 38,
    height: 22,
    padding: 0,
    '& .MuiSwitch-switchBase': {
      padding: 0,
      margin: 1,
      transitionDuration: '300ms',
      '&.Mui-checked': {
        transform: 'translateX(16px)',
        color: '#fff',
        '& + .MuiSwitch-track': {
          backgroundColor: color || theme.palette.primary.main,
          opacity: 1,
          border: 0
        },
        '& .MuiSwitch-thumb': {
          color: theme.palette.primary,
          border: `6px solid ${theme.palette.primary}`
        }
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5
      }
    },
    '& .MuiSwitch-thumb': {
      boxSizing: 'border-box',
      width: 20,
      height: 20
    },
    '& .MuiSwitch-track': {
      borderRadius: 13,
      backgroundColor: '#E9E9EA',
      opacity: 1
    }
  })
);

const Switch: React.FC<CustomSwitchProps> = (props) => {
  return (
    <FormGroup>
      <FormControlLabel control={<IOSSwitch sx={{ m: 1 }} {...props} />} label={props.label} />
    </FormGroup>
  );
};

export default Switch;
