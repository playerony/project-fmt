import { FormDescription, FormField, FormItem, FormLabel } from './ui/form';
import { Textarea } from './ui/textarea';

interface TextareaControllerProps {
  className?: string;
  description?: string;
  label?: string;
  name: string;
  placeholder?: string;
}

export const TextareaController = ({
  className,
  description,
  label,
  name,
  placeholder,
}: TextareaControllerProps) => (
  <FormField
    name={name}
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
