import { Control, Controller, FieldValues } from 'react-hook-form';
import React from 'react';
import ReactSelect, { SingleValue } from 'react-select';

interface SelectProps {
    name: string;
    control: Control<FieldValues>;
    options: { value: string, label: string }[];
    value?: SingleValue<{ value: string, label: string }>;
}

const Select: React.FC<SelectProps> = ({ name, control, options, value}) => {
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