import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { default as MuiSwitch, SwitchProps } from '@mui/material/Switch';

// extend switch props
export interface ISwitchProps extends SwitchProps {
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  required?: boolean;
  label: string;
  labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
}

const Switch: React.FC<ISwitchProps> = ({ disabled, onChange, checked = false, required = false, label, labelPlacement }) => {
  return (
    <FormGroup>
      <FormControlLabel
        required={required}
        labelPlacement={labelPlacement}
        control={<MuiSwitch disabled={disabled} onChange={onChange} checked={checked} className="text-purple-300" />}
        label={label}
      />
    </FormGroup>
  );
};

export default Switch;
