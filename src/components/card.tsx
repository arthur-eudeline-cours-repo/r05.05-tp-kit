import React from "react";

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
  return <div className={`kit-bg-white kit-shadow-xl kit-p-6 kit-rounded-lg ${className}`}>{children}</div>;
};
