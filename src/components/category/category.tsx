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
}

interface Option {
  value: string;
  label: string;
}

const Category: FC<CategoryProps> = ({ onChange }) => {
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

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
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

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
        />
      )}
    </div>
  );
};

export default Category;
