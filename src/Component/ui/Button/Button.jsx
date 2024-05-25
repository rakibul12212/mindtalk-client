

const Button = ({ text, bgColor, onClick,hoverColor }) => {
    return (
        <button type="button" className={`relative rounded px-4 py-2 text-white border-none ${bgColor} hover:${hoverColor}`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;