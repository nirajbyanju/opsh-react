import { FC, useEffect, useState } from "react";
import ReactSelect from "react-select"; // Rename the component

interface SelectProps {
    onChange: (selectedId: string) => void;
    selected?: any;
    name?: string;
    data: Array<{
        id?: number;
        label: string;
    }>;
    value?: { id: any, label: string };
}

interface Option {
    value: string;
    label: string;
}

const Select: FC<SelectProps> = ({ onChange, selected, name, data }) => {
    const [options, setOptions] = useState<Option[]>([]);
    const [defaultOption, setDefaultOption] = useState<Option | null>(null);
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);

    useEffect(() => {
        const formattedOptions = data.map((item) => ({
            value: item.id?.toString() || "", // Convert id to string and handle undefined
            label: item.label,
        }));
        setOptions(formattedOptions);

        if (selected) {
            const foundOption = formattedOptions.find(
                (option) => option.value === selected.toString()
            );
            setDefaultOption(foundOption || null);
            setSelectedOption(foundOption || null);
        }
    }, [selected, data]);

    const handleChange = (option: Option | null) => {
        setSelectedOption(option);
        if (option) {
            onChange(option.value);
        } else {
            onChange('');
        }
    };

    const noOptionsMessage = "No matching categories available.";

    return (
        <div>
            {options.length === 0 ? (
                <p>{noOptionsMessage}</p>
            ) : (
                <ReactSelect
                    name={name}
                    options={options}
                    onChange={handleChange}
                    value={selectedOption || defaultOption}
                    isClearable
                />
            )}
        </div>
    );
};

export default Select;
