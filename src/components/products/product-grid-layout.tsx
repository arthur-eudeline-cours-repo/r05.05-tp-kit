import React from "react";
import { ProductData } from "../../types";

type Props = {
  /**
   * Liste des produits à afficher dans la grille
   */
  products: ProductData[];
  /**
   * Fonction de rendu appelé pour chaque entrée de `products`. Récupère en argument `product` et doit retourner un composant React.
   *
   * @param product Le produit courant à afficher
   * @returns
   */
  children?: (product: ProductData) => React.ReactNode;
};

/**
 * Base d'affichage d'une grille produit.
 * 
 * **Attention :** Ce composant adopte le *builder pattern*, ce qui est attendu en enfant n'est pas un `ReactNode` mais une fonction qui retournera un `ReactNode`.
 * 
 * Cette fonction sera appellée pour chaque produit contenu dans le tableau `products` que vous donnerez à la grille en props. 
 * Elle recevra en argument le produit courant que la grille affiche, vous aurez donc accès à l'objet produit courant et pourrez le passer à un composant qui lui affichera le produit.
 * 
 * **Exemple d'utilisation :**
 * 
 * ```tsx
 * const Grid = () => {
 *  const products = [];
 *  return <ProductGridLayout products={products}>
 *    {(product) => <p>
 *        Nom de produit : {product.name}
 *     </p>}
 *  </ProductGridLayout>;
 * }
 * ```
 */
export const ProductGridLayout: React.FC<Props> = function ({ products, children }) {
  return (
    <ul className="kit-grid kit-grid-cols-1 kit-gap-8 sm:kit-grid-cols-2 md:kit-grid-cols-3 lg:kit-grid-cols-4 2xl:kit-grid-cols-5">
      {products.map((product) => (
        <li key={product.id} className="lg:kit-max-w[300px]">
          {children?.(product)}
        </li>
      ))}
    </ul>
  );
};