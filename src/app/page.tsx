
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="p-4">
          <div><Button variant={"elevated"}>
            I am a button
          </Button></div>
          <Input placeholder="i am input">
          </Input>
          <Progress value={50}>
          </Progress>
          <Textarea placeholder="i am text area">
          </Textarea>
          <Checkbox>
          </Checkbox>
      </div>
    </div>
  );
}
