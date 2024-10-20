import { FC, useEffect, useState } from "react";
import Select from "react-select";
import { categoryApi } from "@/apis/common/category.api";
import { Categories } from "@/types/common/category";

interface CategoryResponse {
  datas: Array<{
    id: string;
    name: string;
  }>;
}

interface CategoryProps {
  onChange: (selectedCategoryId: string) => void; // Callback to send the selected category ID to parent
  selectedCategory?: string; // Optional prop for the initially selected category
  name?: string; // Optional prop for the name of the field
}

interface Option {
  value: string;
  label: string;
}

const Category: FC<CategoryProps> = ({ onChange, selectedCategory, name }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [defaultOption, setDefaultOption] = useState<Option | null>(null);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await categoryApi({} as Categories);
        const data = response as unknown as CategoryResponse;
        const formattedOptions = data.datas.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        setOptions(formattedOptions);

        if (selectedCategory) {
          const foundOption = formattedOptions.find(
            (option) => option.value == selectedCategory
          );
          setDefaultOption(foundOption || null);
          setSelectedOption(foundOption || null); // Set the selected option if found
        } else {
          setSelectedOption(null); // Reset if no selected category
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [selectedCategory]);

  const handleChange = (option: Option | null) => {
    setSelectedOption(option); // Update the selected option state
    if (option) {
      onChange(option.value); // Pass the selected category ID to the parent
    }
  };

  const noOptionsMessage = "No matching categories available.";

  return (
    <div>
      
        <>
          {options.length === 0 ? (
            <p>{noOptionsMessage}</p>
          ) : (
            <Select
              name={name}
              options={options}
              onChange={handleChange} // Call the handleChange function on selection
              value={selectedOption || defaultOption} // Show selected or default option
              isClearable // Allow clearing the selection
            />
          )}
        </>
    </div>
  );
};

export default Category;
