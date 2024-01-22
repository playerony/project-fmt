import { RadioGroupController } from '@/components/radio-group-controller';
import { TextareaController } from '@/components/textarea-controller';
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
import { STORY_FORM_VALUES_KEY } from '@/constants';
import { isObject } from '@/utils';
import { useForm } from 'react-hook-form';

import { getFormData } from '../utils';

export interface StoryFormValues {
  storyBriefDescription: string;
  storyType: string;
}

const DEFAULT_FORM_VALUES: StoryFormValues = {
  storyBriefDescription: '',
  storyType: 'the-story-of-me',
};

interface StoryFormProps {
  onBackButtonClick: () => void;
  onSubmit: (data: StoryFormValues) => void;
}

const getDefaultFormValues = () => {
  const defaultValuesFromLocalStorage = getFormData(STORY_FORM_VALUES_KEY);

  if (!isObject(defaultValuesFromLocalStorage)) {
    return DEFAULT_FORM_VALUES;
  }

  return {
    ...DEFAULT_FORM_VALUES,
    ...defaultValuesFromLocalStorage,
  };
};

export const StoryForm = ({ onBackButtonClick, onSubmit }: StoryFormProps) => {
  const form = useForm<StoryFormValues>({
    defaultValues: getDefaultFormValues(),
  });

  return (
    <Form {...form}>
      <form
        className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card>
          <CardHeader>
            <CardTitle>Choosing your story</CardTitle>
            <CardDescription>
              Think about a story you need to tell in a more powerful way.{' '}
              <strong>Which type of story is it?</strong> Choose one story type:
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <RadioGroupController
              className="grid grid-cols-2 gap-4"
              name="storyType"
              options={[
                {
                  label: 'The story of me',
                  value: 'the-story-of-me',
                  itemClassName: 'peer sr-only',
                },
                {
                  label: 'The story of us',
                  value: 'the-story-of-us',
                  itemClassName: 'peer sr-only',
                },
                {
                  label: 'The story of an idea',
                  value: 'the-story-of-an-idea',
                  itemClassName: 'peer sr-only',
                },
                {
                  label: 'The story of results',
                  value: 'the-story-of-results',
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
            <TextareaController
              className="max-h-[200px] min-h-[200px] flex-1 p-4 md:max-h-[300px] md:min-h-[300px]"
              name="storyBriefDescription"
              placeholder="What’s your story about, specifically? Get these early outlines on paper."
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
