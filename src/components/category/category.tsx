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
}

interface Option {
  value: string;
  label: string;
}

const Category: FC<CategoryProps> = ({ onChange, selectedCategory }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [defaultOption, setDefaultOption] = useState<Option | null>(null);

  useEffect(() => {
    setLoading(true);
    categoryApi({} as Categories)
      .then((response) => {
        const data = response as unknown as CategoryResponse;
        const formattedOptions = data.datas.map((item) => ({
          value: item.id,
          label: item.name,
        }));
        setOptions(formattedOptions);

        if (selectedCategory) {
          const selectedOption = formattedOptions.find(
            (option) => option.value === selectedCategory
          );
          setDefaultOption(selectedOption || null);
        }
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [selectedCategory]);

  const handleChange = (selectedOption: Option | null) => {
    if (selectedOption) {
      onChange(selectedOption.value); // Pass the selected category ID to the parent
    }
  };

  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <Select
          options={options}
          onChange={handleChange} // Call the handleChange function on selection
          defaultValue={defaultOption} // Set the default selected option
        />
      )}
    </div>
  );
};

export default Category;
