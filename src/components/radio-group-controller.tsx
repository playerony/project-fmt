import { ReactNode } from 'react';

import { FormControl, FormField, FormItem, FormLabel } from './ui/form';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';

interface Option {
  itemClassName?: string;
  label: ReactNode;
  value: string;
}

interface RadioGroupControllerProps {
  className?: string;
  name: string;
  options: Option[];
  renderOptionChildren: (option: Option) => ReactNode;
}

export const RadioGroupController = ({
  className,
  name,
  options,
  renderOptionChildren,
}: RadioGroupControllerProps) => (
  <FormField
    name={name}
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
