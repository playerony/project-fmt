import { Control } from 'react-hook-form';

import { TextareaController } from './atoms/textarea-controller';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { ScrollArea, ScrollBar } from './ui/scroll-area';
import { TabsContent as ShadcnTabsContent, Tabs, TabsList, TabsTrigger } from './ui/tabs';

type ComponentType =
  | 'once-upon-a-time'
  | 'a-world-view'
  | 'great-characters'
  | 'challenging-situations'
  | 'conflict'
  | 'drama'
  | 'lessons-learned'
  | 'new-possibility'
  | 'happily-ever-after';

interface TabsContentProps {
  control: Control<{ components?: ComponentsFormValues }>;
  description: string;
  value: ComponentType;
}

const TabsContent = ({ control, description, value }: TabsContentProps) => (
  <ShadcnTabsContent value={value}>
    <p className="mb-4 text-sm text-muted-foreground">{description}</p>
    <TextareaController
      className="max-h-[200px] min-h-[200px] flex-1 p-4 md:max-h-[300px] md:min-h-[300px]"
      controllerProps={{
        control,
        name: `components.${value}`,
      }}
      placeholder="Write in your own details in the blank space on the cards provided—short sentences or bullet points will do."
    />
  </ShadcnTabsContent>
);

export type ComponentsFormValues = Record<ComponentType, string>;

interface ComponentsFormProps {
  control: Control<{ components?: ComponentsFormValues }>;
}

export const ComponentsForm = ({ control }: ComponentsFormProps) => (
  <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]">
    <Card>
      <CardHeader>
        <CardTitle>Components of your story</CardTitle>
        <CardDescription>Find the components of your great story.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Tabs className="w-[400px]" defaultValue="once-upon-a-time">
          <ScrollArea>
            <TabsList>
              <TabsTrigger value="once-upon-a-time">&quot;Once upon a time...&quot;</TabsTrigger>
              <TabsTrigger value="a-world-view">A world view</TabsTrigger>
              <TabsTrigger value="great-characters">Great characters</TabsTrigger>
              <TabsTrigger value="challenging-situations">Challenging situations</TabsTrigger>
              <TabsTrigger value="conflict">Conflict</TabsTrigger>
              <TabsTrigger value="drama">Drama</TabsTrigger>
              <TabsTrigger value="lessons-learned">Lessons learned</TabsTrigger>
              <TabsTrigger value="new-possibility">New possibility</TabsTrigger>
              <TabsTrigger value="happily-ever-after">
                &quot;Happily ever after...&quot;
              </TabsTrigger>
            </TabsList>
            <ScrollBar className="hidden" orientation="horizontal" />
          </ScrollArea>
          <TabsContent
            control={control}
            description="Setting the scene can help the audience connect to the story as if they were there when it happened."
            value="once-upon-a-time"
          />
          <TabsContent
            control={control}
            description="Many great stories have perspective—an angle or lens that shapes the telling of the story, and what people take away from it."
            value="a-world-view"
          />
          <TabsContent
            control={control}
            description="Heroes. Villains. Supporting characters. Who or what you choose—and what their characteristics and traits are—is critical to the action and meaning of your story..."
            value="great-characters"
          />
          <TabsContent
            control={control}
            description="We learn a lot about people through their toughest moments—their near-death experiences, moments of lapsed judgement, and foibles."
            value="challenging-situations"
          />
          <TabsContent
            control={control}
            description="Challenging situations and moments of change naturally lead to conflict—between people, values, the past versus the future, big bets versus the status quo."
            value="conflict"
          />
          <TabsContent
            control={control}
            description="A heightened sense of drama keeps the audience riveted to the story."
            value="drama"
          />
          <TabsContent
            control={control}
            description="Everyone has learned lessons through experiences that are worthy of sharing."
            value="lessons-learned"
          />
          <TabsContent
            control={control}
            description="When your story is about what might be possible in the future—not just what has happened in the past—a story might include a future view."
            value="new-possibility"
          />
          <TabsContent
            control={control}
            description="Sometimes the job of a story is to leave the audience with a sense of resolution and wellbeing."
            value="happily-ever-after"
          />
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  </div>
);
