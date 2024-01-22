'use client';

import { SelectController } from '@/components/select-controller';
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
import {
  GENERAL_FORM_VALUES_KEY,
  STORY_LANGUAGE_COMPLEXITY_DEFINITION,
  STORY_LANGUAGE_DEFINITION,
  STORY_LENGTH_DEFINITION,
  STORY_POINT_OF_VIEW_DEFINITION,
} from '@/constants';
import { isObject } from '@/utils';
import { useForm } from 'react-hook-form';

import { getFormData } from '../utils';

export interface GeneralFormValues {
  language: string;
  languageComplexity: string;
  lengthOfStory: string;
  pointOfView: string;
}

const DEFAULT_FORM_VALUES: GeneralFormValues = {
  language: 'english',
  pointOfView: 'first',
  lengthOfStory: 'medium',
  languageComplexity: 'b2',
};

interface GeneralFormProps {
  onSubmit: (data: GeneralFormValues) => void;
}

const getDefaultFormValues = () => {
  const defaultValuesFromLocalStorage = getFormData(GENERAL_FORM_VALUES_KEY);

  if (!isObject(defaultValuesFromLocalStorage)) {
    return DEFAULT_FORM_VALUES;
  }

  return {
    ...DEFAULT_FORM_VALUES,
    ...defaultValuesFromLocalStorage,
  };
};

export const GeneralForm = ({ onSubmit }: GeneralFormProps) => {
  const form = useForm<GeneralFormValues>({
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
            <CardTitle>General informations</CardTitle>
            <CardDescription>Add general details about a story you wanna tell.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <div className="grid gap-2">
              <SelectController
                description="What language should your story be written in?"
                label="Language"
                name="language"
                options={STORY_LANGUAGE_DEFINITION}
                placeholder="Select..."
              />
            </div>
            <div className="grid gap-2">
              <SelectController
                description="Specify what level of language you want to use"
                label="Language complexity"
                name="languageComplexity"
                options={STORY_LANGUAGE_COMPLEXITY_DEFINITION}
                placeholder="Select..."
              />
            </div>
            <div className="grid gap-2">
              <SelectController
                description="Who is telling a story?"
                label="Point of view"
                name="pointOfView"
                options={STORY_POINT_OF_VIEW_DEFINITION}
                placeholder="Select..."
              />
            </div>
            <div className="grid gap-2">
              <SelectController
                description="How long and detailed your story should be?"
                label="Length of your story"
                name="lengthOfStory"
                options={STORY_LENGTH_DEFINITION}
                placeholder="Select..."
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button className="w-full" type="submit">
              Continue
            </Button>
          </CardFooter>
        </Card>
      </form>
    </Form>
  );
};
