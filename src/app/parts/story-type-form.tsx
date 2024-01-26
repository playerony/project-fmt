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
import { STORY_TYPE_DEFINITION, STORY_TYPE_FORM_VALUES_KEY } from '@/constants';
import { isObject } from '@/utils';
import { useForm } from 'react-hook-form';

import { getFormData } from '../utils';

export interface StoryTypeFormValues {
  storyBriefDescription: string;
  storyType: string;
}

const DEFAULT_FORM_VALUES: StoryTypeFormValues = {
  storyBriefDescription: '',
  storyType: 'the-story-of-me',
};

interface StoryTypeFormProps {
  onBackButtonClick: () => void;
  onSubmit: (data: StoryTypeFormValues) => void;
}

const getDefaultFormValues = () => {
  const defaultValuesFromLocalStorage = getFormData(STORY_TYPE_FORM_VALUES_KEY);

  if (!isObject(defaultValuesFromLocalStorage)) {
    return DEFAULT_FORM_VALUES;
  }

  return {
    ...DEFAULT_FORM_VALUES,
    ...defaultValuesFromLocalStorage,
  };
};

export const StoryTypeForm = ({ onBackButtonClick, onSubmit }: StoryTypeFormProps) => {
  const form = useForm<StoryTypeFormValues>({
    defaultValues: getDefaultFormValues(),
  });

  return (
    <Form {...form}>
      <form
        className="mx-auto flex h-full w-full flex-col justify-center space-y-6 px-2 sm:w-[500px]"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <Card>
          <CardHeader className="px-4 pb-0 sm:p-6 sm:pb-0">
            <CardTitle>Choosing your story type</CardTitle>
            <CardDescription>
              Think about a story you need to tell in a more powerful way.{' '}
              <strong>Which type of story is it?</strong> Choose one story type:
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-3 p-4 sm:gap-6 sm:p-6">
            <RadioGroupController
              className="grid grid-cols-2 gap-3 sm:gap-4"
              name="storyType"
              options={STORY_TYPE_DEFINITION.map((definition) => ({
                ...definition,
                itemClassName: 'peer sr-only',
              }))}
              renderOptionChildren={(option) => (
                <Label
                  className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-2 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary sm:p-4 [&:has([data-state=checked])]:border-primary"
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
