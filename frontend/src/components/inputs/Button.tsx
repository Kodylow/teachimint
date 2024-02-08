type ButtonProps = {
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  text?: string;
};

export const Button = ({ disabled, type, text }: ButtonProps) => {
  const className = "p-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors";
  const buttonDisabled = " disabled:bg-gray-300 disabled:cursor-not-allowed";

  return (
    <button disabled={disabled} type={type} className={className + buttonDisabled}>
      {text}
    </button>
  );
};
