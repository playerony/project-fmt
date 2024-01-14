import { FieldValues, UseControllerProps } from 'react-hook-form';

import { FormDescription, FormField, FormItem, FormLabel } from '../ui/form';
import { Textarea } from '../ui/textarea';

interface TextareaControllerProps<TFieldValues extends FieldValues = FieldValues> {
  className?: string;
  controllerProps: Omit<UseControllerProps<TFieldValues>, 'render'>;
  description?: string;
  label?: string;
  placeholder?: string;
}

export const TextareaController = <TFieldValues extends FieldValues = FieldValues>({
  className,
  controllerProps,
  description,
  label,
  placeholder,
}: TextareaControllerProps<TFieldValues>) => (
  <FormField
    {...controllerProps}
    render={({ field }) => (
      <FormItem>
        {label ? <FormLabel>{label}</FormLabel> : null}
        <Textarea
          className={className}
          defaultValue={field.value}
          placeholder={placeholder}
          onChange={field.onChange}
        />
        {description ? <FormDescription>{description}</FormDescription> : null}
      </FormItem>
    )}
  />
);
