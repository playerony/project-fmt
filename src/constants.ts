export const GENERAL_FORM_VALUES_KEY = 'generalFormValues';
export const STORY_FORM_VALUES_KEY = 'storyFormValues';
export const COMPONENTS_FORM_VALUES_KEY = 'componentsFormValues';
export const ARCHETYPE_FORM_VALUES_KEY = 'archetypeFormValues';

export const COMPONENTS_DEFINITION: {
  description: string;
  label: string;
  value: StoryComponent;
}[] = [
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
