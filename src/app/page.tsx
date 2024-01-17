'use client';

import {
  ARCHETYPE_FORM_VALUES_KEY,
  COMPONENTS_FORM_VALUES_KEY,
  GENERAL_FORM_VALUES_KEY,
  STORY_FORM_VALUES_KEY,
} from '@/constants';
import { useState } from 'react';

import { ArchetypeForm, ArchetypeFormValues } from './parts/archetype-form';
import { ComponentsForm, ComponentsFormValues } from './parts/components-form';
import { GeneralForm, GeneralFormValues } from './parts/general-form';
import { OrderForm, OrderFormValues } from './parts/order-form';
import { StoryForm, StoryFormValues } from './parts/story-form';
import { setFormData } from './utils';

const Home = () => {
  const [currentStep, setCurrentStep] = useState(5);

  const handleBackButtonClick = () => setCurrentStep((prevStep) => prevStep - 1);

  const handleGeneralFormSubmit = (data: GeneralFormValues) => {
    setCurrentStep(2);
    setFormData(GENERAL_FORM_VALUES_KEY, data);
  };

  const handleStoryFormSubmit = (data: StoryFormValues) => {
    setCurrentStep(3);
    setFormData(STORY_FORM_VALUES_KEY, data);
  };

  const handleComponentsFormSubmit = (data: ComponentsFormValues) => {
    setCurrentStep(4);
    setFormData(COMPONENTS_FORM_VALUES_KEY, data);
  };

  const handleArchetypeFormSubmit = (data: ArchetypeFormValues) => {
    setCurrentStep(5);
    setFormData(ARCHETYPE_FORM_VALUES_KEY, data);
  };

  const handleOrderFormSubmit = (data: OrderFormValues) => {
    setCurrentStep(4);
    console.log(data);
    // setFormData(ARCHETYPE_FORM_VALUES_KEY, data);
  };

  return (
    <>
      {currentStep === 1 ? <GeneralForm onSubmit={handleGeneralFormSubmit} /> : null}
      {currentStep === 2 ? (
        <StoryForm onBackButtonClick={handleBackButtonClick} onSubmit={handleStoryFormSubmit} />
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
        <OrderForm onBackButtonClick={handleBackButtonClick} onSubmit={handleOrderFormSubmit} />
      ) : null}
    </>
  );
};

export default Home;
