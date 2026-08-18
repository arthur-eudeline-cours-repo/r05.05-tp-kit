import React from "react";
import Link from "next/link";
import { StarbucksLogo } from "./starbucks-logo";

type Props = {
  /**
   * Un composant optionnel pouvant être rendu à **gauche** de la navbar
   */
  leading?: React.ReactNode,
  /**
   * Un composant optionnel pouvant être rendu à **droite** de la navbar
   */
  trailing?: React.ReactNode,
};

/**
 * La barre de menu du haut du site
 */
export const MenuBar: React.FC<Props> = function ({leading, trailing}) {
  return (
    <nav className="kit-bg-white kit-shadow-2xl kit-shadow-gray-600/10 kit-sticky kit-inset-x-0 kit-top-0 kit-z-20 kit-p-4 lg:kit-px-8">
      <div className="kit-container kit-mx-auto kit-grid kit-grid-cols-3 kit-gap-8 kit-relative">
        {leading ? leading : <section></section>}

        <section className="kit-flex kit-justify-center">
          <Link href={'/'} className="kit-transition-colors hover:kit-bg-black/10 active:kit-bg-black/20 kit-block kit-p-1 kit-rounded-full">
            {/* Logo */}
            <StarbucksLogo
              className="kit-select-none kit-pointer-events-none"
              size={50}
            />
          </Link>
        </section>

        {trailing ? trailing : <section></section>}
      </div>
    </nav>
  );
};