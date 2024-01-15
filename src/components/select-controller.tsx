'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { FieldValues, UseControllerProps } from 'react-hook-form';

import { FormControl, FormDescription, FormField, FormItem, FormLabel } from './ui/form';

interface Option {
  label: string;
  value: string;
}

interface SelectControllerProps<TFieldValues extends FieldValues = FieldValues> {
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  description?: string;
  label: string;
  options: Option[];
  placeholder?: string;
}

export const SelectController = <TFieldValues extends FieldValues = FieldValues>({
  controllerProps,
  description,
  label,
  options,
  placeholder,
}: SelectControllerProps<TFieldValues>) => (
  <FormField
    {...controllerProps}
    render={({ field }) => (
      <FormItem>
        <FormLabel>{label}</FormLabel>
        <Select defaultValue={field.value} onValueChange={field.onChange}>
          <FormControl>
            <SelectTrigger>
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            {options.map(({ label, value }) => (
              <SelectItem key={value} value={value}>
                {label}
              </SelectItem>
            ))}
          </SelectContent>
          {description ? <FormDescription>{description}</FormDescription> : null}
        </Select>
      </FormItem>
    )}
  />
);
