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
import { ARCHETYPE_FORM_VALUES_KEY } from '@/constants';
import { useForm } from 'react-hook-form';

import { getFormData } from '../utils';
import { ArchetypeDescription } from './archetype-description';

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

export const ArchetypeForm = ({ onBackButtonClick, onSubmit }: ArchetypeFormProps) => {
  const form = useForm<ArchetypeFormValues>({
    defaultValues: getFormData(ARCHETYPE_FORM_VALUES_KEY) ?? DEFAULT_FORM_VALUES,
  });

  const selectedArchetype = form.watch('archetype');

  return (
    <Form {...form}>
      <form
        className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card>
          <CardHeader>
            <CardTitle>Story archetypes</CardTitle>
            <CardDescription>
              As any philosopher will tell you, the stories that humans tell tend to fall into
              patterns. We call them archetypes.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <RadioGroupController
              className="grid grid-cols-2 gap-4"
              name="archetype"
              options={[
                {
                  label: 'Coming of age',
                  value: 'coming-of-age',
                  itemClassName: 'peer sr-only',
                },
                {
                  label: 'Overcoming Obstacles',
                  value: 'overcoming-obstacles',
                  itemClassName: 'peer sr-only',
                },
                {
                  label: 'Constant Evolution',
                  value: 'constant-evolution',
                  itemClassName: 'peer sr-only',
                },
                {
                  label: 'True As It Ever Was',
                  value: 'true-as-it-ever-was',
                  itemClassName: 'peer sr-only',
                },
                {
                  label: 'Rebirth',
                  value: 'rebirth',
                  itemClassName: 'peer sr-only',
                },
                {
                  label: 'Quest',
                  value: 'quest',
                  itemClassName: 'peer sr-only',
                },
              ]}
              renderOptionChildren={(option) => (
                <Label
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                  htmlFor={option.value}
                >
                  {option.label}
                </Label>
              )}
            />
            <ArchetypeDescription archetype={selectedArchetype} />
          </CardContent>
          <CardFooter className="flex justify-between gap-4">
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
