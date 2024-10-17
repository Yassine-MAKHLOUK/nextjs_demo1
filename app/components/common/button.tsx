import { FC } from "react";

interface ButtonProps {
    label: string;
    className: string;
    onClick: () => void;
    icone?: string;
}

const Button: FC<ButtonProps> = ( {label, className, onClick, icone} ) => (
    <button className={`btn ${className}`} onClick={onClick}>
        {icone}
        {label}
    </button>
)
export default Button;