import { Root, Indicator, CheckboxProps, CheckedState } from "@radix-ui/react-checkbox";
import { CheckIcon } from "lucide-react";

import React from "react";

type Props = Omit<CheckboxProps, 'id' | 'onChange'> & {
  label: React.ReactNode;
  onChange?: (checked: CheckedState) => void
};

export const Checkbox: React.FC<Props> = function ({ label, onChange, ...props }) {
  const id = React.useId();

  return (
    <>
      <Root
        id={id}
        className="kit-mr-2 kit-inline-flex kit-size-4 kit-shrink-0 kit-items-center kit-justify-center kit-rounded kit-border-2 kit-border-current kit-bg-transparent kit-outline-offset-4 kit-outline-brand kit-transition-colors data-[state=checked]:kit-border-brand data-[state=checked]:kit-bg-brand data-[state=checked]:kit-text-white"
        {...props}
        onCheckedChange={(checked) => onChange?.(checked)}
      >
        <Indicator className="kit-text-inherit">
          <CheckIcon strokeWidth={3} size={12} />
        </Indicator>
      </Root>
      <label
        htmlFor={id}
        className="kit-cursor-pointer kit-select-none kit-transition-colors hover:kit-text-brand"
      >
        {label}
      </label>
    </>
  );
};
