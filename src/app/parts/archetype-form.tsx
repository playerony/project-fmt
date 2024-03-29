import { RadioGroupController } from '@/components/radio-group-controller';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import { Label } from '@/components/ui/label';
import { ARCHETYPE_FORM_VALUES_KEY, STORY_ARCHETYPE_DEFINITION } from '@/constants';
import { isObject } from '@/utils';
import { useMemo } from 'react';
import { useForm } from 'react-hook-form';

import { getFormData } from '../utils';

export interface ArchetypeFormValues {
  archetype: StoryArchetype;
}

const DEFAULT_FORM_VALUES: ArchetypeFormValues = {
  archetype: 'coming-of-age',
};

interface ArchetypeFormProps {
  onBackButtonClick: () => void;
  onSubmit: (data: ArchetypeFormValues) => void;
}

const getDefaultFormValues = () => {
  const defaultValuesFromLocalStorage = getFormData(ARCHETYPE_FORM_VALUES_KEY);

  if (!isObject(defaultValuesFromLocalStorage)) {
    return DEFAULT_FORM_VALUES;
  }

  return {
    ...DEFAULT_FORM_VALUES,
    ...defaultValuesFromLocalStorage,
  };
};

export const ArchetypeForm = ({ onBackButtonClick, onSubmit }: ArchetypeFormProps) => {
  const form = useForm<ArchetypeFormValues>({
    defaultValues: getDefaultFormValues(),
  });

  const archetypeFormValue = form.watch('archetype');
  const selectedArchetype = useMemo(
    () =>
      STORY_ARCHETYPE_DEFINITION.find(
        (archetypeDefinition) => archetypeDefinition.value === archetypeFormValue,
      ) || STORY_ARCHETYPE_DEFINITION[0],
    [archetypeFormValue],
  );

  return (
    <Form {...form}>
      <form
        className="mx-auto flex h-full w-full flex-col justify-center space-y-6 px-2 sm:w-[500px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card>
          <CardHeader className="px-4 pb-0 sm:p-6 sm:pb-0">
            <CardTitle>Story archetypes</CardTitle>
            <CardDescription>
              As any philosopher will tell you, the stories that humans tell tend to fall into
              patterns. We call them archetypes.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 p-4 sm:gap-6 sm:p-6">
            <RadioGroupController
              className="grid grid-cols-2 gap-3 sm:gap-4"
              name="archetype"
              options={STORY_ARCHETYPE_DEFINITION.map((archetype) => ({
                ...archetype,
                itemClassName: 'peer sr-only',
              }))}
              renderOptionChildren={(option) => (
                <Label
                  className="flex h-full flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary sm:p-4 [&:has([data-state=checked])]:border-primary"
                  htmlFor={option.value}
                >
                  {option.label}
                </Label>
              )}
            />
            <h4 className="mb-1 text-lg font-semibold tracking-tight">
              Selected archetype: &quot;{selectedArchetype.label}&quot;
            </h4>
            <p className="text-sm text-muted-foreground">
              {selectedArchetype.description} <strong>{selectedArchetype.summary}</strong>
            </p>
          </CardContent>
          <CardFooter className="flex justify-between gap-3 px-4 pb-4 pt-0 sm:gap-4 sm:p-6 sm:pt-0">
            <Button className="w-full" variant="outline" onClick={onBackButtonClick}>
              Back
            </Button>
            <Button className="w-full" type="submit">
              Continue
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
