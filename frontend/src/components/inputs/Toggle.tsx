import { useState } from "react";

type ToggleProps = {
  labelText: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Toggle = ({ labelText, onChange }: ToggleProps) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={checked}
        onChange={(e) => {
          handleChange();
          onChange && onChange(e);
        }}
      />
      <div className="w-11 h-6 bg-gray-400 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
      <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-500">{labelText}</span>
    </label>
  );
};
