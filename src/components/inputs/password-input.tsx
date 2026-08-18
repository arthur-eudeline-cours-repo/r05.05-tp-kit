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
      className="kit-pr-12"
      type={toggle ? "text" : "password"}
      after={
        <Button
          variant={"ghost"}
          size={"sm"}
          className="kit-absolute kit-inset-y-0 kit-right-0 kit-rounded-l-none hover:kit-text-brand"
          onClick={() => setToggle(v => !v)}
        >
          {icon}
        </Button>
      }
    />
  );
};
