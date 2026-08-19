import React from "react";
import { cn } from "../lib/utils";

type Props = {
  /**
   * Classes CSS optionnelles pour ajouter des styles spécifiques en cas de besoin
   */
  className?: string,
  /**
   * Le contenu de la carte
   */
  children?: React.ReactNode,
}

/**
 * Composant basique servant à rendre des composants dans une carte
 */
export const Card: React.FC<Props> = function({children, className}) {
  return <div className={cn("bg-white shadow-xl p-6 rounded-lg", className)}>{children}</div>;
};
