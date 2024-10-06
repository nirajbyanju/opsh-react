import { Control, Controller, FieldValues, Path } from 'react-hook-form';
import ReactSelect, { SingleValue } from 'react-select';

interface SelectProps<T extends FieldValues> {
    name: Path<T>; // Use Path<T> to ensure 'name' is a valid key from T
    control: Control<T>;
    options: { value: string, label: string }[];
    value?: SingleValue<{ value: string, label: string }>;
}

const Select = <T extends FieldValues>({ name, control, options, value }: SelectProps<T>) => {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field }) => (
                <ReactSelect
                    options={options}
                    value={value || options.find(option => field.value !== null && field.value !== undefined && option.value === field.value.toString())}
                    onChange={(selectedOption: SingleValue<{ value: string; label: string }>) => {
                        field.onChange((selectedOption as { value: string; label: string }).value);
                    }}
                />
            )}
        />
    );
};

export default Select;
