import { TabsContent as ShadcnTabsContent } from '@/components/ui/tabs';
import { Textarea } from '@/components/ui/textarea';

interface TabsContentProps {
  description: string;
  value: string;
}

export const TabsContent = ({ description, value }: TabsContentProps) => (
  <ShadcnTabsContent value={value}>
    <p className="mb-4 text-sm text-muted-foreground">{description}</p>
    <Textarea
      className="max-h-[200px] min-h-[200px] flex-1 p-4 md:max-h-[300px] md:min-h-[300px]"
      placeholder="Write in your own details in the blank space on the cards provided—short sentences or bullet points will do."
    />
  </ShadcnTabsContent>
);
