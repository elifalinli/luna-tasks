import { MouseEventHandler } from 'react'


interface ButtonProps {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;
}
export function Button({text, onClick}: ButtonProps) {
    return (
        <button onClick={onClick} style={{textTransform: 'uppercase'}} tabIndex={0}>
            {text}

        </button>
    )

}