import { GenericSortableList } from '@/components/generic-sortable-list';
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
import { STORY_FORM_VALUES_KEY } from '@/constants';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

import { getFormData } from '../utils';
import { ArchetypeDescription } from './archetype-description';
import { Archetype } from './archetype-form';

export interface OrderFormValues {
  storyBriefDescription: string;
  storyType: string;
}

const DEFAULT_FORM_VALUES: OrderFormValues = {
  storyBriefDescription: '',
  storyType: 'the-story-of-me',
};

interface OrderFormProps {
  onBackButtonClick: () => void;
  onSubmit: (data: OrderFormValues) => void;
}

export const OrderForm = ({ onBackButtonClick, onSubmit }: OrderFormProps) => {
  const [components, setComponents] = useState<Archetype[]>([
    'quest',
    'rebirth',
    'coming-of-age',
    'overcoming-obstacles',
    'constant-evolution',
    'true-as-it-ever-was',
  ]);

  const form = useForm<OrderFormValues>({
    defaultValues: getFormData(STORY_FORM_VALUES_KEY) ?? DEFAULT_FORM_VALUES,
  });

  return (
    <Form {...form}>
      <form
        className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card>
          <CardHeader>
            <CardTitle>Match the created components to the archetype</CardTitle>
            <CardDescription>
              Think about entire story. How would you like to describe it?
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <h4 className="mb-1 text-lg font-semibold tracking-tight">
              Selected archetype: &quot;Quest&quot;
            </h4>
            <ArchetypeDescription archetype="quest" />
            <GenericSortableList
              dataSource={components}
              getItemKey={(item) => item}
              renderListItem={({ dragHandleProps, item }) => <div {...dragHandleProps}>{item}</div>}
              onDataSourceUpdate={setComponents}
            />
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
