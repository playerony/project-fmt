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
import {
  ARCHETYPE_FORM_VALUES_KEY,
  COMPONENTS_DEFINITION,
  COMPONENTS_FORM_VALUES_KEY,
  ComponentDefinition,
  STORY_ARCHETYPE_DEFINITION,
} from '@/constants';
import { isObject } from '@/utils';
import { useMemo, useState } from 'react';

import { getFormData } from '../utils';

export interface OrderFormValues {
  components: ComponentDefinition[];
}

interface OrderFormProps {
  onBackButtonClick: () => void;
  onFinish: (data: OrderFormValues) => void;
}

const getDefaultComponents = () => {
  const defaultValuesFromLocalStorage: Record<string, string> = getFormData(
    COMPONENTS_FORM_VALUES_KEY,
  );

  if (!isObject(defaultValuesFromLocalStorage)) {
    return COMPONENTS_DEFINITION;
  }

  return COMPONENTS_DEFINITION.filter(
    (component) => !!defaultValuesFromLocalStorage[component.value],
  );
};

const getSelectedArchetype = () => {
  const defaultValuesFromLocalStorage: Record<string, string> =
    getFormData(ARCHETYPE_FORM_VALUES_KEY);

  return (
    STORY_ARCHETYPE_DEFINITION.find(
      (archetypeDefinition) =>
        archetypeDefinition.value === defaultValuesFromLocalStorage.archetype,
    ) || STORY_ARCHETYPE_DEFINITION[0]
  );
};

export const OrderForm = ({ onBackButtonClick, onFinish }: OrderFormProps) => {
  const [components, setComponents] = useState(getDefaultComponents());
  const selectedArchetype = useMemo(getSelectedArchetype, []);

  const handleCopyPromptButtonClick = () => onFinish({ components });

  return (
    <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 px-2 sm:w-[500px]">
      <Card>
        <CardHeader className="px-4 pb-0 sm:p-6 sm:pb-0">
          <CardTitle>Match the created components to the archetype</CardTitle>
          <CardDescription>
            Think about entire story. How would you like to describe it?
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-3 p-4 sm:gap-6 sm:p-6">
          <h4 className="mb-1 text-lg font-semibold tracking-tight">
            Selected archetype: &quot;{selectedArchetype.label}&quot;
          </h4>
          <p className="text-sm text-muted-foreground">
            {selectedArchetype.description} <strong>{selectedArchetype.summary}</strong>
          </p>
          <GenericSortableList
            dataSource={components}
            getItemKey={(item) => item.description}
            renderListItem={({ dragHandleProps, item }) => (
              <div
                className="mb-1 rounded-md border-2 border-muted bg-popover p-1 text-center hover:bg-accent hover:text-accent-foreground"
                {...dragHandleProps}
              >
                {item.label}
              </div>
            )}
            onDataSourceUpdate={setComponents}
          />
        </CardContent>
        <CardFooter className="flex justify-between gap-3 px-4 pb-4 pt-0 sm:gap-4 sm:p-6 sm:pt-0">
          <Button className="w-full" variant="outline" onClick={onBackButtonClick}>
            Back
          </Button>
          <Button className="w-full" type="button" onClick={handleCopyPromptButtonClick}>
            Copy prompt
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};
