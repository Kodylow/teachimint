type DropdownProps = {
  placeholder?: string;
  value: string;
  options: string[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Dropdown = ({ placeholder, value, options, onChange }: DropdownProps) => {
  const className = "p-2 border border-green-500 leading-tight rounded focus:outline-none";
  return (
    <select className={className} onChange={onChange} value={value}>
      {placeholder && (
        <option value="" disabled>
          {placeholder}
        </option>
      )}

      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
