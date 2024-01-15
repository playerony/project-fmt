import { Icons } from '@/components/icons';
import { RadioGroupController } from '@/components/radio-group-controller';
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
import { Control } from 'react-hook-form';

interface StoryFormProps {
  control: Control<{ archetype?: string }>;
  selectedArchetype: string | undefined;
}

export const ArchetypeForm = ({ control, selectedArchetype }: StoryFormProps) => (
  <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]">
    <Card>
      <CardHeader>
        <CardTitle>Story archetypes</CardTitle>
        <CardDescription>
          As any philosopher will tell you, the stories that humans tell tend to fall into patterns.
          We call them archetypes.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <RadioGroupController
          className="grid grid-cols-2 gap-4"
          controllerProps={{
            control,
            name: 'archetype',
          }}
          options={[
            {
              label: 'Coming of age',
              value: 'coming-of-age',
              itemClassName: 'peer sr-only',
              icon: <Icons.comingOfAgeArchetype className="h-[75px] w-[75px]" />,
            },
            {
              label: 'Overcoming Obstacles',
              value: 'overcoming-obstacles',
              itemClassName: 'peer sr-only',
              icon: <Icons.overcomingObstaclesArchetype className="h-[75px] w-[75px]" />,
            },
            {
              label: 'Constant Evolution',
              value: 'constant-evolution',
              itemClassName: 'peer sr-only',
              icon: <Icons.constantEvolutionArchetype className="h-[75px] w-[75px]" />,
            },
            {
              label: 'True As It Ever Was',
              value: 'true-as-it-ever-was',
              itemClassName: 'peer sr-only',
              icon: <Icons.trueAsItEverWasArchetype className="h-[75px] w-[75px]" />,
            },
            {
              label: 'Rebirth',
              value: 'rebirth',
              icon: <Icons.rebirthArchetype className="h-[75px] w-[75px]" />,
              itemClassName: 'peer sr-only',
            },
            {
              label: 'Quest',
              value: 'quest',
              itemClassName: 'peer sr-only',
              icon: <Icons.questArchetype className="h-[75px] w-[75px]" />,
            },
          ]}
          renderOptionChildren={(option) => (
            <Label
              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              htmlFor={option.value}
            >
              {option.icon}
              {option.label}
            </Label>
          )}
        />
        {selectedArchetype === 'coming-of-age' ? (
          <p className="mb-4 text-sm text-muted-foreground">
            After years of learning and growing, you’ve reached a milestone. You know who you are.
            You are strong, experienced, and confident. You’re ready to take on whatever comes next.{' '}
            <strong>Use this archetype to show experience and strength.</strong>
          </p>
        ) : null}
        {selectedArchetype === 'overcoming-obstacles' ? (
          <p className="mb-4 text-sm text-muted-foreground">
            You hit a roadblock and almost failed. It was a struggle. You challenged your
            assumptions, made tough decisions, fought hard… and won.{' '}
            <strong>Use this archetype to demonstrate resilience.</strong>
          </p>
        ) : null}
        {selectedArchetype === 'constant-evolution' ? (
          <p className="mb-4 text-sm text-muted-foreground">
            You never rest. Over and over, you’ve evolved to handle whatever comes your way. You
            keep moving, adapting to the world around you and maybe even anticipating its change.{' '}
            <strong>Use this archetype to prove adaptability.</strong>
          </p>
        ) : null}
        {selectedArchetype === 'true-as-it-ever-was' ? (
          <p className="mb-4 text-sm text-muted-foreground">
            Your purpose and values have endured throughout the years. The world has evolved and
            you’ve changed with it, but your core beliefs have remained intact. They guide
            everything you do.{' '}
            <strong>
              Use this archetype to communicate steadiness or reinforce the audience’s trust.
            </strong>
          </p>
        ) : null}
        {selectedArchetype === 'rebirth' ? (
          <p className="mb-4 text-sm text-muted-foreground">
            Over time, you’ve accumulated a wealth of experience and knowledge. Today, you’re
            harnessing that to start a whole new chapter, and become an even better version of
            yourself. <strong>Use this archetype to explain a new direction.</strong>
          </p>
        ) : null}
        {selectedArchetype === 'quest' ? (
          <p className="mb-4 text-sm text-muted-foreground">
            You’ve always had a clear objective and you’ve pursued it relentlessly. Over time,
            you’ve summoned your talent and passion to turn your vision into reality. Through twists
            and turns, you’ve maintained your focus, and you will never let it go.{' '}
            <strong>Use these archetype to recommit or demonstrate dedication.</strong>
          </p>
        ) : null}
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  </div>
);
