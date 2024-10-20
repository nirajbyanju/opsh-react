import React, { useState } from "react";
import Select from "react-select";

// Define the option types for TypeScript
interface OptionType {
  value: string;
  label: string;
}

// Define the options
const options: OptionType[] = [
  { value: "banana", label: "Banana" },
  { value: "apple", label: "Apple" },
  { value: "grape", label: "Grape" },
  { value: "orange", label: "Orange" },
];

const App: React.FC = () => {
  // Set initial state to the Orange option
  const [selectedOption, setSelectedOption] = useState<OptionType | null>(options.find(option => option.value === "orange") || null);

  // Handle change event for React Select
  const handleChange = (option: OptionType | null) => {
    console.log("Fruit Selected!!", option?.value);
    setSelectedOption(option);
  };

  return (
    <div id="App">
      <div className="select-container">
        <Select
          value={selectedOption}
          onChange={handleChange}
          options={options}
          isClearable
        />
      </div>
      <p>Selected Fruit: {selectedOption ? selectedOption.label : "None"}</p>
    </div>
  );
};

export default App;
