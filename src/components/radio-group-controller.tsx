import { ReactNode } from 'react';
import { FieldValues, UseControllerProps } from 'react-hook-form';

import { FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface Option {
  itemClassName?: string;
  label: string;
  value: string;
}

interface RadioGroupControllerProps<TFieldValues extends FieldValues = FieldValues> {
  className?: string;
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  options: Option[];
  renderOptionChildren: (option: Option) => ReactNode;
}

export const RadioGroupController = <TFieldValues extends FieldValues = FieldValues>({
  className,
  controllerProps,
  options,
  renderOptionChildren,
}: RadioGroupControllerProps<TFieldValues>) => (
  <FormField
    {...controllerProps}
    render={({ field }) => (
      <FormItem>
        <RadioGroup className={className} defaultValue={field.value} onValueChange={field.onChange}>
          {options.map((option) => (
            <FormItem key={option.value}>
              <FormLabel>
                <FormControl>
                  <RadioGroupItem
                    className={option.itemClassName}
                    id={option.value}
                    value={option.value}
                  />
                </FormControl>
                {renderOptionChildren(option)}
              </FormLabel>
            </FormItem>
          ))}
        </RadioGroup>
      </FormItem>
    )}
  />
);
