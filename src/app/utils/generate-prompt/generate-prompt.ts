import { ArchetypeFormValues } from '@/app/parts/archetype-form';
import { ComponentsFormValues } from '@/app/parts/components-form';
import { GeneralFormValues } from '@/app/parts/general-form';
import { OrderFormValues } from '@/app/parts/order-form';
import { StoryTypeFormValues } from '@/app/parts/story-type-form';
import {
  STORY_ARCHETYPE_DEFINITION,
  STORY_LENGTH_DEFINITION,
  STORY_POINT_OF_VIEW_DEFINITION,
  STORY_TYPE_DEFINITION,
} from '@/constants';

interface GeneratePromptParams {
  archetypeFormValues: ArchetypeFormValues;
  componentsFormValues: ComponentsFormValues;
  generalFormValues: GeneralFormValues;
  orderFormValues: OrderFormValues;
  storyTypeFormValues: StoryTypeFormValues;
}

export const generatePrompt = ({
  archetypeFormValues,
  componentsFormValues,
  generalFormValues,
  orderFormValues,
  storyTypeFormValues,
}: GeneratePromptParams) => {
  const foundArchetypeDefinition = STORY_ARCHETYPE_DEFINITION.find(
    (archetypeDefinition) => archetypeDefinition.value === archetypeFormValues.archetype,
  );
  const foundStoryTypeDefinition = STORY_TYPE_DEFINITION.find(
    (storyTypeDefinition) => storyTypeDefinition.value === storyTypeFormValues.storyType,
  );
  const foundStoryPointOfView = STORY_POINT_OF_VIEW_DEFINITION.find(
    (storyPointOfView) => storyPointOfView.value === generalFormValues.pointOfView,
  );
  const foundStoryLength = STORY_LENGTH_DEFINITION.find(
    (storyLength) => storyLength.value === generalFormValues.lengthOfStory,
  );

  if (!foundArchetypeDefinition) {
    throw new Error('Could not find archetype definition');
  }

  if (!foundStoryTypeDefinition) {
    throw new Error('Could not find story type definition');
  }

  if (!foundStoryPointOfView) {
    throw new Error('Could not find story point of view');
  }

  if (!foundStoryLength) {
    throw new Error('Could not find story length');
  }

  let result = `I want to write a story of type "${foundStoryTypeDefinition.label}" with the brief story description: "${storyTypeFormValues.storyBriefDescription}".\n`;

  result += 'I want to use the following components of a story:\n';

  for (const component of orderFormValues.components) {
    result += `- component of "${component.label}" with following meaning: "${
      component.description
    }". I want to include within it a following informations "${
      componentsFormValues[component.value]
    }"\n`;
  }

  result += `I want to use an archetype of "${foundArchetypeDefinition.label}" with following meaning: "${foundArchetypeDefinition.description}".\n`;
  result += `Story should be written in "${generalFormValues.language}" language with complexity of "${generalFormValues.languageComplexity}" level.\n`;
  result += `Story should be written in "${foundStoryPointOfView.label}" person.\n`;
  result += `Story should be written in "${foundStoryLength.label}" length.\n`;

  return result;
};
