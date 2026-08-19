import React from "react";
import { TextInput } from "./text-input";
import { Eye, EyeOff } from "lucide-react";
import { Button } from "../button";

type Props = React.ComponentProps<typeof TextInput>;

export const PasswordInput: React.FC<Props> = function (props) {
  const [toggle, setToggle] = React.useState<boolean>(false);
  const icon = toggle ? <EyeOff /> : <Eye />;

  return (
    <TextInput
      {...props}
      className="pr-12"
      type={toggle ? "text" : "password"}
      after={
        <Button
          variant={"ghost"}
          size={"sm"}
          className="absolute inset-y-0 right-0 rounded-l-none hover:text-brand"
          onClick={() => setToggle(v => !v)}
        >
          {icon}
        </Button>
      }
    />
  );
};
