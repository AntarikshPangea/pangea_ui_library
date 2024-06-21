// create simple mui button
import Button, { ButtonProps } from '@mui/material/Button';


const ColorButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button  {...props}>
            {props.children}
        </Button>
    );
};

export default ColorButton;