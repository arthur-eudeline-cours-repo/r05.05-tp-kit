// Garger pour le storybook px-12 z-10 rounded-r-none
import React from "react";

type Props = Omit<React.ComponentProps<"input">, "onChange"> & {
  /**
   * Le composant label à afficher au dessus de l'input
   */
  label: React.ReactNode;
  /**
   * Définit si le champ est requis ou non. Si oui, affiche un astérisque rouge à côté du label. 
   */
  required?: boolean;
  /**
   * Affiche un message d'erreur sous le champ et le colore en rouge.
   */
  error?: string;
  /**
   * Le callback appelé lorsque la valeur de l'input change
   * @param value La valeur actuelle de l'input
   * @returns 
   */
  onChange?: (value: string) => void;
  /**
   * Composant optionnel affiché avant l'input. Peut être utilisé pour afficher des icônes avant l'input
   */
  before?: React.ReactNode;
  /**
   * Composant optionnel affiché après l'input. Peut être utilisé pour afficher des icônes après l'input
   */
  after?: React.ReactNode;
};

export const TextInput: React.FC<Props> = function ({
  label,
  error,
  required,
  before,
  after,
  ...props
}) {
  const id = React.useId();
  return (
    <div>
      <label htmlFor={id} className="kit-cursor-pointer kit-text-sm">
        {label} {required && <span className="kit-text-red-600">*</span>}
      </label>
      <div className="kit-relative">
        {before}
        <input
          {...props}
          id={id}
          onChange={e => props.onChange?.(e.target.value)}
          className={`kit-relative kit-w-full kit-overflow-visible kit-rounded-lg kit-bg-gray-100 kit-p-4 kit-text-sm kit-leading-none kit-text-default kit-outline-brand ${props.className} ${error !== undefined ? "kit-border-2 kit-border-red-600" : ""}`}
        />
        {after}
      </div>
      {error && <p className="kit-text-red-600 kit-text-sm">{error}</p>}
    </div>
  );
};
