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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const GeneralForm = () => (
  <div className="mx-auto flex h-full w-full flex-col justify-center space-y-6 sm:w-[450px]">
    <Card>
      <CardHeader>
        <CardTitle>General informations</CardTitle>
        <CardDescription>Add general details about a story you wanna tell.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="language">Language</Label>
          <Select>
            <SelectTrigger id="language">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="polish">Polish</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="language-complexity">Language complexity</Label>
          <Select>
            <SelectTrigger id="language-complexity">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="a1">A1</SelectItem>
              <SelectItem value="a2">A2</SelectItem>
              <SelectItem value="b1">B1</SelectItem>
              <SelectItem value="b2">B2</SelectItem>
              <SelectItem value="c1">C1</SelectItem>
              <SelectItem value="c2">C2</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="point-of-view">Point of view</Label>
          <Select>
            <SelectTrigger id="point-of-view">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="first">First person</SelectItem>
              <SelectItem value="second">Second person</SelectItem>
              <SelectItem value="third">Third person</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="length">Length of your story</Label>
          <Select>
            <SelectTrigger id="length">
              <SelectValue placeholder="Select..." />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="short">Short (just going to the point)</SelectItem>
              <SelectItem value="medium">Medium (with not so many details)</SelectItem>
              <SelectItem value="long">Long (with a lot of details)</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">Continue</Button>
      </CardFooter>
    </Card>
  </div>
);

export default GeneralForm;
