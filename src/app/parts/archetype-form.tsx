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
import { Label } from '@/components/ui/label';
import { Control } from 'react-hook-form';

interface StoryFormProps {
  control: Control<{ archetype?: string }>;
}

export const ArchetypeForm = ({ control }: StoryFormProps) => (
  <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]">
    <Card>
      <CardHeader>
        <CardTitle>Story archetypes</CardTitle>
        <CardDescription>
          As any philosopher will tell you, the stories that humans tell tend to fall into patterns.
          We call them archetypes.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroupController
          className="grid grid-cols-2 gap-4"
          controllerProps={{
            control,
            name: 'archetype',
          }}
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
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  </div>
);
