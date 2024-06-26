// create simple mui button
import { ButtonProps, default as MuiButton } from '@mui/material/Button';

const Button: React.FC<ButtonProps> = (props) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};

export default Button;
