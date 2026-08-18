import { VariantProps, cva } from "class-variance-authority";
import React from "react";

const variants = cva("kit-px-4 lg:kit-px-8 kit-flow-root kit-py-8", {
  variants: {
    /**
     * La couleur du fond de la section
     * @default coffee
     */
    background: {
      coffee: "bg-coffee-50",
      white: "bg-white",
      brand: "bg-brand",
    },
  },
  defaultVariants: {
    background: "coffee",
  },
});

type Props = VariantProps<typeof variants> & {
  children: React.ReactNode;
  /**
   * Indique si la section utilisera un container ou si elle prendra toute la largeur de la page
   */
  fullWidth?: boolean;
  /**
   * Définit quelle balise HTML utiliser pour la section
   * @default div
   */
  as?: "div" | "main";
  /**
   * ID HTML optionnel
   */
  id?: string;
  /**
   * Classes HTML optionnelles à appliquer sur la balise qui englobe le `children
   */
  wrapperClassName?: string;
  /**
   * Classes HTML optionnelles à appliquer sur la section
   */
  className?: string;
};

/**
 * Container de section à utiliser pour démarquer les différentes sections. 
 */
export const SectionContainer: React.FC<Props> = function ({
  as: Comp = "div",
  id,
  wrapperClassName = "",
  className = '',
  children,
  fullWidth = false,
  ...props
}) {
  return (
    <Comp id={id} className={`${variants(props)} ${className}`}>
      <div className={`${fullWidth ? '' : 'container mx-auto'} ${wrapperClassName}`}>
        {children}
      </div>
    </Comp>
  );
};