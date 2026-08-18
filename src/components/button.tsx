import { type VariantProps, cva } from "class-variance-authority";
import React from "react";

const buttonClasses = cva(
  "kit-transition-colors kit-rounded-lg kit-tracking-wide kit-focus-visible:outline-none",
  {
    variants: {
      /**
       * Definit l'apparence du bouton
       * @default primary
       */
      variant: {
        primary:
          "kit-bg-brand hover:kit-bg-brand-600 active:kit-bg-brand-700 disabled:kit-bg-brand-900 disabled:kit-cursor-not-allowed kit-text-white",
        ghost: "kit-bg-transparent hover:kit-bg-black/5 active:kit-bg-black/10 disabled:kit-bg-black/5",
        white: "kit-bg-white kit-text-default hover:kit-bg-stone-50 active:kit-bg-stone-100",
        outline: "kit-bg-transparent hover:kit-bg-black/5 active:kit-bg-black/10 kit-border-2 kit-border-default",
        light: "kit-bg-brand-100 kit-text-brand-900 hover:kit-bg-brand-200",
        danger: "kit-bg-red-100 kit-text-red-900 hover:kit-bg-red-200"
      },
      /**
       * Modifie la taille du boutton
       * @default md
       */
      size: {
        sm: "kit-px-4 kit-py-2 kit-text-sm",
        md: "kit-px-6 kit-py-4 kit-text-sm",
        lg: "kit-px-6 kit-py-4 kit-text-lg",
      },
      /**
       * Indique si le bouton occupera tout l'espace horizontal
       */
      fullWidth: { true: "kit-w-full" },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export type ButtonProps = VariantProps<typeof buttonClasses> & {
  /**
   * Le contenu du bouton
   */
  children: React.ReactNode;
  /**
   * Action déclenchée au clic
   */
  onClick?: () => void;
  /**
   * Classes HTML optionnelles
   */
  className?: string,
  /**
   * L'attribut HTML `type` du boutton
   * @default button
   */
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'],
  /**
   * Désactive le bouton
   * @default false
   */
  disabled?: boolean,
};

/**
 * Sers à rendre les différents boutons du site. Le composant est disponibles en plusieurs `variants`
 */
const Button: React.FC<ButtonProps> = React.forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
  return (
    <button
      ref={ref}
      type={props.type ?? "button"}
      onClick={props.onClick}
      className={buttonClasses({...props, className: props.className})}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
});

Button.displayName = "Button";
export { Button };