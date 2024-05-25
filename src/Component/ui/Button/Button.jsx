

const Button = ({ text, bgColor, onClick }) => {
    return (
        <button type="button" className={`relative rounded px-4 py-2 text-white border-none ${bgColor} hover:text-white hover:bg-orange-600`} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;