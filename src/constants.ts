export const GENERAL_FORM_VALUES_KEY = 'generalFormValues';
export const STORY_TYPE_FORM_VALUES_KEY = 'storyFormValues';
export const COMPONENTS_FORM_VALUES_KEY = 'componentsFormValues';
export const ARCHETYPE_FORM_VALUES_KEY = 'archetypeFormValues';

export interface ComponentDefinition {
  description: string;
  label: string;
  value: StoryComponent;
}

export const COMPONENTS_DEFINITION: ComponentDefinition[] = [
  {
    label: '"Once upon a time..."',
    value: 'once-upon-a-time',
    description:
      'Setting the scene can help the audience connect to the story as if they were there when it happened.',
  },
  {
    label: 'A world view',
    value: 'a-world-view',
    description:
      'Many great stories have perspective—an angle or lens that shapes the telling of the story, and what people take away from it.',
  },
  {
    label: 'Great characters',
    value: 'great-characters',
    description:
      'Heroes. Villains. Supporting characters. Who or what you choose—and what their characteristics and traits are—is critical to the action and meaning of your story...',
  },
  {
    label: 'Challenging situations',
    value: 'challenging-situations',
    description:
      'We learn a lot about people through their toughest moments—their near-death experiences, moments of lapsed judgement, and foibles.',
  },
  {
    label: 'Conflict',
    value: 'conflict',
    description:
      'Challenging situations and moments of change naturally lead to conflict—between people, values, the past versus the future, big bets versus the status quo.',
  },
  {
    label: 'Drama',
    value: 'drama',
    description: 'A heightened sense of drama keeps the audience riveted to the story.',
  },
  {
    label: 'Lessons learned',
    value: 'lessons-learned',
    description: 'Everyone has learned lessons through experiences that are worthy of sharing.',
  },
  {
    label: 'New possibility',
    value: 'new-possibility',
    description:
      'When your story is about what might be possible in the future—not just what has happened in the past—a story might include a future view.',
  },
  {
    label: '"Happily ever after..."',
    value: 'happily-ever-after',
    description:
      'Sometimes the job of a story is to leave the audience with a sense of resolution and wellbeing.',
  },
];

export const STORY_LENGTH_DEFINITION = [
  { label: 'Short (just going to the point)', value: 'short' },
  { label: 'Medium (with not so many details)', value: 'medium' },
  { label: 'Long (with a lot of details)', value: 'long' },
];

export const STORY_POINT_OF_VIEW_DEFINITION = [
  { label: 'First person', value: 'first' },
  { label: 'Second person', value: 'second' },
  { label: 'Third person', value: 'third' },
];

export const STORY_LANGUAGE_COMPLEXITY_DEFINITION = [
  { label: 'A1', value: 'a1' },
  { label: 'A2', value: 'a2' },
  { label: 'B1', value: 'b1' },
  { label: 'B2', value: 'b2' },
  { label: 'C1', value: 'c1' },
  { label: 'C2', value: 'c2' },
];

export const STORY_LANGUAGE_DEFINITION = [{ label: 'English', value: 'english' }];

export const STORY_TYPE_DEFINITION = [
  {
    label: 'The story of me',
    value: 'the-story-of-me',
  },
  {
    label: 'The story of us',
    value: 'the-story-of-us',
  },
  {
    label: 'The story of an idea',
    value: 'the-story-of-an-idea',
  },
  {
    label: 'The story of results',
    value: 'the-story-of-results',
  },
];

export const STORY_ARCHETYPE_DEFINITION = [
  {
    label: 'Coming of age',
    value: 'coming-of-age',
    description:
      'After years of learning and growing, you’ve reached a milestone. You know who you are. You are strong, experienced, and confident. You’re ready to take on whatever comes next.',
    summary: 'Use this archetype to show experience and strength.',
  },
  {
    label: 'Overcoming Obstacles',
    value: 'overcoming-obstacles',
    description:
      'You hit a roadblock and almost failed. It was a struggle. You challenged your assumptions, made tough decisions, fought hard… and won.',
    summary: 'Use this archetype to demonstrate resilience.',
  },
  {
    label: 'Constant Evolution',
    value: 'constant-evolution',
    description:
      'You never rest. Over and over, you’ve evolved to handle whatever comes your way. You keep moving, adapting to the world around you and maybe even anticipating its change.',
    summary: 'Use this archetype to prove adaptability.',
  },
  {
    label: 'True As It Ever Was',
    value: 'true-as-it-ever-was',
    description:
      'Your purpose and values have endured throughout the years. The world has evolved and you’ve changed with it, but your core beliefs have remained intact. They guide everything you do.',
    summary: 'Use this archetype to communicate steadiness or reinforce the audience’s trust.',
  },
  {
    label: 'Rebirth',
    value: 'rebirth',
    description:
      'Over time, you’ve accumulated a wealth of experience and knowledge. Today, you’re harnessing that to start a whole new chapter, and become an even better version of yourself.',
    summary: 'Use this archetype to explain a new direction.',
  },
  {
    label: 'Quest',
    value: 'quest',
    description:
      'You’ve always had a clear objective and you’ve pursued it relentlessly. Over time, you’ve summoned your talent and passion to turn your vision into reality. Through twists and turns, you’ve maintained your focus, and you will never let it go.',
    summary: 'Use these archetype to recommit or demonstrate dedication.',
  },
];
