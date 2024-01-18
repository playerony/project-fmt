'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { FormControl, FormDescription, FormField, FormItem, FormLabel } from './ui/form';

interface Option {
  label: string;
  value: string;
}

interface SelectControllerProps {
  description?: string;
  label: string;
  name: string;
  options: Option[];
  placeholder?: string;
}

export const SelectController = ({
  description,
  label,
  name,
  options,
  placeholder,
}: SelectControllerProps) => (
  <FormField
    name={name}
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
