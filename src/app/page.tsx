'use client';

import { useToast } from '@/components/ui/use-toast';
import {
  ARCHETYPE_FORM_VALUES_KEY,
  COMPONENTS_FORM_VALUES_KEY,
  GENERAL_FORM_VALUES_KEY,
  STORY_TYPE_FORM_VALUES_KEY,
} from '@/constants';
import copyToClipboard from 'clipboard-copy';
import { useEffect, useState } from 'react';

import { ArchetypeForm, ArchetypeFormValues } from './parts/archetype-form';
import { ComponentsForm, ComponentsFormValues } from './parts/components-form';
import { GeneralForm, GeneralFormValues } from './parts/general-form';
import { OrderForm, OrderFormValues } from './parts/order-form';
import { StoryTypeForm, StoryTypeFormValues } from './parts/story-type-form';
import { generatePrompt, getFormData, setFormData } from './utils';

const getInitialStep = () => {
  const generalFormValues = getFormData(GENERAL_FORM_VALUES_KEY);
  const storyFormValues = getFormData(STORY_TYPE_FORM_VALUES_KEY);
  const componentsFormValues = getFormData(COMPONENTS_FORM_VALUES_KEY);
  const archetypeFormValues = getFormData(ARCHETYPE_FORM_VALUES_KEY);

  if (archetypeFormValues) {
    return 5;
  }

  if (componentsFormValues) {
    return 4;
  }

  if (storyFormValues) {
    return 3;
  }

  if (generalFormValues) {
    return 2;
  }

  return 1;
};

const Home = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(-1);

  useEffect(() => {
    setCurrentStep(getInitialStep());
  }, []);

  const handleBackButtonClick = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleGeneralFormSubmit = (data: GeneralFormValues) => {
    setCurrentStep(2);
    setFormData(GENERAL_FORM_VALUES_KEY, data);
  };

  const handleStoryFormSubmit = (data: StoryTypeFormValues) => {
    setCurrentStep(3);
    setFormData(STORY_TYPE_FORM_VALUES_KEY, data);
  };

  const handleComponentsFormSubmit = (data: ComponentsFormValues) => {
    setCurrentStep(4);
    setFormData(COMPONENTS_FORM_VALUES_KEY, data);
  };

  const handleArchetypeFormSubmit = (data: ArchetypeFormValues) => {
    setCurrentStep(5);
    setFormData(ARCHETYPE_FORM_VALUES_KEY, data);
  };

  const handleFinish = async (data: OrderFormValues) => {
    const generalFormValues = getFormData(GENERAL_FORM_VALUES_KEY);
    const storyTypeFormValues = getFormData(STORY_TYPE_FORM_VALUES_KEY);
    const componentsFormValues = getFormData(COMPONENTS_FORM_VALUES_KEY);
    const archetypeFormValues = getFormData(ARCHETYPE_FORM_VALUES_KEY);

    await copyToClipboard(
      generatePrompt({
        orderFormValues: data,
        generalFormValues,
        storyTypeFormValues,
        componentsFormValues,
        archetypeFormValues,
      }),
    );

    toast({
      title: 'Copied!',
      description: 'The prompt has been copied to your clipboard.',
    });

    localStorage.clear();
    setCurrentStep(1);
  };

  if (currentStep === -1) {
    return null;
  }

  return (
    <>
      {currentStep === 1 ? <GeneralForm onSubmit={handleGeneralFormSubmit} /> : null}
      {currentStep === 2 ? (
        <StoryTypeForm onBackButtonClick={handleBackButtonClick} onSubmit={handleStoryFormSubmit} />
      ) : null}
      {currentStep === 3 ? (
        <ComponentsForm
          onBackButtonClick={handleBackButtonClick}
          onSubmit={handleComponentsFormSubmit}
        />
      ) : null}
      {currentStep === 4 ? (
        <ArchetypeForm
          onBackButtonClick={handleBackButtonClick}
          onSubmit={handleArchetypeFormSubmit}
        />
      ) : null}
      {currentStep === 5 ? (
        <OrderForm onBackButtonClick={handleBackButtonClick} onFinish={handleFinish} />
      ) : null}
    </>
  );
};

export default Home;
