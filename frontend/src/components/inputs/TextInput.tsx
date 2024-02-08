type TextInputProps = {
  placeholder: string;
  value: string;
  id?: string;
  type?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput = ({
  placeholder,
  type = "text",
  value,
  id,
  className: classNameProp,
  onChange,
}: TextInputProps) => {
  const className =
    "py-2 px-3 text-gray-700 leading-tight appearance-none border border-green-500 rounded focus:outline-green-500";
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      className={className + " " + classNameProp}
      id={id}
      onChange={onChange}
    />
  );
};
