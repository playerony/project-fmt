'use client';

import { ComponentsForm, ComponentsFormValues } from '@/components/components-form';
import { GeneralForm, GeneralFormValues } from '@/components/general-form';
import { StoryForm, StoryFormValues } from '@/components/story-form';
import { Form } from '@/components/ui/form';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

interface FormValues {
  components?: ComponentsFormValues;
  general?: GeneralFormValues;
  story?: StoryFormValues;
}

const Home = () => {
  const [currentStep, setCurrentStep] = useState(3);

  const form = useForm<FormValues>({
    defaultValues: {
      general: {
        language: 'english',
        languageComplexity: 'b2',
        lengthOfStory: 'medium',
        pointOfView: 'first',
      },
      story: {
        storyBriefDescription: '',
        storyType: 'the-story-of-me',
      },
      components: {
        'a-world-view': '',
        'challenging-situations': '',
        conflict: '',
        drama: '',
        'great-characters': '',
        'happily-ever-after': '',
        'lessons-learned': '',
        'new-possibility': '',
        'once-upon-a-time': '',
      },
    },
  });

  const handleGeneralFormContinueButtonClick = () => {
    setCurrentStep(2);
  };

  return (
    <Form {...form}>
      {currentStep === 1 ? (
        <GeneralForm
          control={form.control}
          onContinueButtonClick={handleGeneralFormContinueButtonClick}
        />
      ) : null}
      {currentStep === 2 ? <StoryForm control={form.control} /> : null}
      {currentStep === 3 ? <ComponentsForm control={form.control} /> : null}
    </Form>
  );
};

export default Home;
