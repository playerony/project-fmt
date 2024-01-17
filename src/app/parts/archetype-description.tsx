import { Archetype } from './archetype-form';

interface ArchetypeDescriptionProps {
  archetype: Archetype;
}

export const ArchetypeDescription = ({ archetype }: ArchetypeDescriptionProps) => (
  <>
    {archetype === 'coming-of-age' ? (
      <p className="mb-4 text-sm text-muted-foreground">
        After years of learning and growing, you’ve reached a milestone. You know who you are. You
        are strong, experienced, and confident. You’re ready to take on whatever comes next.{' '}
        <strong>Use this archetype to show experience and strength.</strong>
      </p>
    ) : null}
    {archetype === 'overcoming-obstacles' ? (
      <p className="mb-4 text-sm text-muted-foreground">
        You hit a roadblock and almost failed. It was a struggle. You challenged your assumptions,
        made tough decisions, fought hard… and won.{' '}
        <strong>Use this archetype to demonstrate resilience.</strong>
      </p>
    ) : null}
    {archetype === 'constant-evolution' ? (
      <p className="mb-4 text-sm text-muted-foreground">
        You never rest. Over and over, you’ve evolved to handle whatever comes your way. You keep
        moving, adapting to the world around you and maybe even anticipating its change.{' '}
        <strong>Use this archetype to prove adaptability.</strong>
      </p>
    ) : null}
    {archetype === 'true-as-it-ever-was' ? (
      <p className="mb-4 text-sm text-muted-foreground">
        Your purpose and values have endured throughout the years. The world has evolved and you’ve
        changed with it, but your core beliefs have remained intact. They guide everything you do.{' '}
        <strong>
          Use this archetype to communicate steadiness or reinforce the audience’s trust.
        </strong>
      </p>
    ) : null}
    {archetype === 'rebirth' ? (
      <p className="mb-4 text-sm text-muted-foreground">
        Over time, you’ve accumulated a wealth of experience and knowledge. Today, you’re harnessing
        that to start a whole new chapter, and become an even better version of yourself.{' '}
        <strong>Use this archetype to explain a new direction.</strong>
      </p>
    ) : null}
    {archetype === 'quest' ? (
      <p className="mb-4 text-sm text-muted-foreground">
        You’ve always had a clear objective and you’ve pursued it relentlessly. Over time, you’ve
        summoned your talent and passion to turn your vision into reality. Through twists and turns,
        you’ve maintained your focus, and you will never let it go.{' '}
        <strong>Use these archetype to recommit or demonstrate dedication.</strong>
      </p>
    ) : null}
  </>
);
