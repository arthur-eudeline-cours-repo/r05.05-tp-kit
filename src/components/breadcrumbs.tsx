import Link from "next/link";
import React from "react";

type Props = {
  /**
   * Les items qui constituent le fil d'Ariane
   */
  items: Array<{ label: string; url: string }>;
  /**
   * Classes additionnelles CSS
   * @default my-8
   */
  className?: string;
};

/**
 * Fil d'Ariane qui affiche à l'utilisateur la structure de la navigation du site
 */
export const BreadCrumbs: React.FC<Props> = function ({ items, className = "my-8" }) {
  return (
    <nav className={`${className}`}>
      <ul className="kit-flex kit-flex-row kit-gap-2 kit-flex-wrap kit-text-sm kit-text-gray-600">
        {items.map((item, i) => (
          <li key={item.url} className="kit-flex kit-flex-row kit-gap-2">
            {(i+1) !== items.length ? (
              <>
                <Link
                  href={item.url}
                  className="hover:kit-text-brand kit-transition-colors"
                >
                  {item.label}
                </Link>
                <span>/</span>
              </>
            ) : (
              <span className="kit-text-brand">{item.label}</span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
