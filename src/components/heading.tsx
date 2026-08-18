import { cva } from "class-variance-authority";
import React from "react";

const variants = cva("kit-tracking-widest kit-uppercase", {
  variants: {
    size: {
      lg: "kit-text-xl",
      md: "kit-text-base",
      sm: "kit-text-sm",
    },
    variant: {
      brand: "kit-text-brand",
      black: "kit-text-slate-800",
    },
    weight: {
      normal: "kit-font-normal",
      bold: "kit-font-bold",
    },
  },
  defaultVariants: {
    variant: "black",
    weight: "normal"
  }
});

type Variants = {
  /**
   * Définit la taille de la police du titre
   */
  size: "lg" | "md" | "sm",
  /**
   * Définit la couleur du titre
   * @default black
   */
  variant?: "brand" | "black",
  /**
   * Définit la graisse de la police du titre
   * @default normal
   */
  weight?: "normal" | "bold"
};

type Props = Variants & {
  /**
   * Définie la balise HTML utilisée pour rendre le titre
   */
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span";
  /**
   * Des classes CSS optionnelles permettant d'ajuster le style du titre dans des contextes précis
   */
  className?: string;
  /**
   * Le contenu du titre
   */
  children?: React.ReactNode;
};

/**
 * Composant servant à rendre un titre d'une page ou d'une section. 
 * - La propriété `as` permet de changer la balise HTML à utiliser
 * - La propriété `szie` influence la taille de la police
 */
export const Heading: React.FC<Props> = function ({
  as: Comp,
  className = "",
  children,
  ...props
}) {
  return <Comp className={`${variants(props)} ${className}`}>{children}</Comp>;
};

