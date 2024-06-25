// create simple mui button
import { default as MuiButton, ButtonProps } from '@mui/material/Button';

const Button: React.FC<ButtonProps> = (props) => {
  return <MuiButton {...props}>{props.children}</MuiButton>;
};

export default Button;
