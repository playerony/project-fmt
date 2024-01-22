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
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { COMPONENTS_DEFINITION, COMPONENTS_FORM_VALUES_KEY } from '@/constants';
import { isObject } from '@/utils';
import { useForm } from 'react-hook-form';

import { getFormData } from '../utils';

export type ComponentsFormValues = Record<StoryComponent, string>;

const DEFAULT_FORM_VALUES: ComponentsFormValues = {
  'once-upon-a-time': '',
  'a-world-view': '',
  'great-characters': '',
  'challenging-situations': '',
  conflict: '',
  drama: '',
  'lessons-learned': '',
  'new-possibility': '',
  'happily-ever-after': '',
};

interface ComponentsFormProps {
  onBackButtonClick: () => void;
  onSubmit: (data: ComponentsFormValues) => void;
}

const getDefaultFormValues = () => {
  const defaultValuesFromLocalStorage = getFormData(COMPONENTS_FORM_VALUES_KEY);

  if (!isObject(defaultValuesFromLocalStorage)) {
    return DEFAULT_FORM_VALUES;
  }

  return {
    ...DEFAULT_FORM_VALUES,
    ...defaultValuesFromLocalStorage,
  };
};

export const ComponentsForm = ({ onBackButtonClick, onSubmit }: ComponentsFormProps) => {
  const form = useForm<ComponentsFormValues>({
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
            <CardTitle>Components of your story</CardTitle>
            <CardDescription>Find the components of your great story.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <Tabs className="w-[400px]" defaultValue="once-upon-a-time">
              <ScrollArea>
                <TabsList>
                  {COMPONENTS_DEFINITION.map(({ label, value }) => (
                    <TabsTrigger key={value} value={value}>
                      {label}
                    </TabsTrigger>
                  ))}
                </TabsList>
                <ScrollBar className="hidden" orientation="horizontal" />
              </ScrollArea>
              {COMPONENTS_DEFINITION.map(({ description, value }) => (
                <TabsContent key={value} value={value}>
                  <p className="mb-4 text-sm text-muted-foreground">{description}</p>
                  <TextareaController
                    className="max-h-[200px] min-h-[200px] flex-1 p-4 md:max-h-[300px] md:min-h-[300px]"
                    name={value}
                    placeholder="Write in your own details in the blank space on the cards provided—short sentences or bullet points will do."
                  />
                </TabsContent>
              ))}
            </Tabs>
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
