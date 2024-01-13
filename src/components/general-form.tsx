'use client';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Control } from 'react-hook-form';

import { SelectController } from './atoms/select-controller';

export interface GeneralFormValues {
  language: string;
  languageComplexity: string;
  lengthOfStory: string;
  pointOfView: string;
}

interface GeneralFormProps {
  control: Control<{ general?: GeneralFormValues }>;
  onContinueButtonClick: () => void;
}

export const GeneralForm = ({ control, onContinueButtonClick }: GeneralFormProps) => (
  <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]">
    <Card>
      <CardHeader>
        <CardTitle>General informations</CardTitle>
        <CardDescription>Add general details about a story you wanna tell.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <SelectController
            controllerProps={{
              control,
              name: 'general.language',
            }}
            description="What language should your article be written in?"
            label="Language"
            options={[
              { label: 'English', value: 'english' },
              { label: 'Polish', value: 'polish' },
            ]}
            placeholder="Select..."
          />
        </div>
        <div className="grid gap-2">
          <SelectController
            controllerProps={{
              control,
              name: 'general.languageComplexity',
            }}
            description="Specify what level of language you want to use"
            label="Language complexity"
            options={[
              { label: 'A1', value: 'a1' },
              { label: 'A2', value: 'a2' },
              { label: 'B1', value: 'b1' },
              { label: 'B2', value: 'b2' },
              { label: 'C1', value: 'c1' },
              { label: 'C2', value: 'c2' },
            ]}
            placeholder="Select..."
          />
        </div>
        <div className="grid gap-2">
          <SelectController
            controllerProps={{
              control,
              name: 'general.pointOfView',
            }}
            description="Who is telling a story?"
            label="Point of view"
            options={[
              { label: 'First person', value: 'first' },
              { label: 'Second person', value: 'second' },
              { label: 'Third person', value: 'third' },
            ]}
            placeholder="Select..."
          />
        </div>
        <div className="grid gap-2">
          <SelectController
            controllerProps={{
              control,
              name: 'general.lengthOfStory',
            }}
            description="How long and detailed your story should be?"
            label="Length of your story"
            options={[
              { label: 'Short (just going to the point)', value: 'short' },
              { label: 'Medium (with not so many details)', value: 'medium' },
              { label: 'Long (with a lot of details)', value: 'long' },
            ]}
            placeholder="Select..."
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" onClick={onContinueButtonClick}>
          Continue
        </Button>
      </CardFooter>
    </Card>
  </div>
);
