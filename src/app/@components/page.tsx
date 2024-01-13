import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const ComponentsForm = () => (
  <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]">
    <Card>
      <CardHeader>
        <CardTitle>Components of your story</CardTitle>
        <CardDescription>Find the components of your great story.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <Tabs className="w-[400px]" defaultValue="once-upon-a-time" orientation="vertical">
          <TabsList className="overflow-x-auto">
            <TabsTrigger value="once-upon-a-time">&quot;Once upon a time...&quot;</TabsTrigger>
            <TabsTrigger value="a-world-view">A world view</TabsTrigger>
            <TabsTrigger value="great-characters">Great characters</TabsTrigger>
            <TabsTrigger value="challenging-situations">Challenging situations</TabsTrigger>
            <TabsTrigger value="conflict">Conflict</TabsTrigger>
            <TabsTrigger value="drama">Drama</TabsTrigger>
            <TabsTrigger value="lessons-learned">Lessons learned</TabsTrigger>
            <TabsTrigger value="new-possibility">New possibility</TabsTrigger>
            <TabsTrigger value="happily-ever-after">&quot;Happily ever after...&quot;</TabsTrigger>
          </TabsList>
          <TabsContent value="once-upon-a-time">
            Setting the scene can help the audience connect to the story as if they were there when
            it happened.
          </TabsContent>
          <TabsContent value="a-world-view">
            Many great stories have perspective—an angle or lens that shapes the telling of the
            story, and what people take away from it.
          </TabsContent>
          <TabsContent value="great-characters">
            Heroes. Villains. Supporting characters. Who or what you choose—and what their
            characteristics and traits are—is critical to the action and meaning of your story...
          </TabsContent>
          <TabsContent value="challenging-situations">
            We learn a lot about people through their toughest moments—their near-death experiences,
            moments of lapsed judgement, and foibles.
          </TabsContent>
          <TabsContent value="conflict">
            Challenging situations and moments of change naturally lead to conflict—between people,
            values, the past versus the future, big bets versus the status quo.
          </TabsContent>
          <TabsContent value="drama">
            MA heightened sense of drama keeps the audience riveted to the story.
          </TabsContent>
          <TabsContent value="lessons-learned">
            Everyone has learned lessons through experiences that are worthy of sharing.
          </TabsContent>
          <TabsContent value="new-possibility">
            When your story is about what might be possible in the future—not just what has happened
            in the past—a story might include a future view.
          </TabsContent>
          <TabsContent value="happily-ever-after">
            Sometimes the job of a story is to leave the audience with a sense of resolution and
            wellbeing.
          </TabsContent>
        </Tabs>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  </div>
);

export default ComponentsForm;
