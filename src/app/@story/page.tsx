import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Textarea } from '@/components/ui/textarea';

const StoryForm = () => (
  <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]">
    <Card>
      <CardHeader>
        <CardTitle>Choosing your story</CardTitle>
        <CardDescription>
          Think about a story you need to tell in a more powerful way.{' '}
          <strong>Which type of story is it?</strong> Choose one story type:
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroup className="grid grid-cols-2 gap-4" defaultValue="the-story-of-me">
          <div>
            <RadioGroupItem className="peer sr-only" id="the-story-of-me" value="the-story-of-me" />
            <Label
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              htmlFor="the-story-of-me"
            >
              The story of me
            </Label>
          </div>
          <div>
            <RadioGroupItem className="peer sr-only" id="the-story-of-us" value="the-story-of-us" />
            <Label
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              htmlFor="the-story-of-us"
            >
              The story of us
            </Label>
          </div>
          <div>
            <RadioGroupItem
              className="peer sr-only"
              id="the-story-of-an-idea"
              value="the-story-of-an-idea"
            />
            <Label
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              htmlFor="the-story-of-an-idea"
            >
              The story of an idea
            </Label>
          </div>
          <div>
            <RadioGroupItem
              className="peer sr-only"
              id="the-story-of-results"
              value="the-story-of-results"
            />
            <Label
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              htmlFor="the-story-of-results"
            >
              The story of results
            </Label>
          </div>
        </RadioGroup>
        <Textarea
          className="max-h-[200px] min-h-[200px] flex-1 p-4 md:max-h-[300px] md:min-h-[300px]"
          placeholder="What’s your story about, specifically? Get these early outlines on paper."
        />
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  </div>
);

export default StoryForm;
