import React from "react";
import { ProductImage } from "./product-image";
import Link from "next/link";
import { ProductData } from "@/types";
import { FormattedPrice } from "@/components/data-display/formatted-price";

type Props = {
  /**
   * Classes HTML additionnelles
   */
  className?: string;
  /**
   * Données produits
   */
  product: ProductData;
  /**
   * Un composant bouton qui sera affiché dans la carte
   */
  button: React.ReactNode;
};

/**
 * Base d'affichage pour un produit. **Il ne reste plus qu'à ajouter un joli bouton** !
 */
export const ProductCardLayout: React.FC<Props> = function (props) {
  const productUrl = `/${props.product.path}`;

  return (
    <div className={props.className}>
      <div className="kit-overflow-hidden kit-rounded-lg kit-cursor-pointer">
        <Link href={productUrl}>
          <ProductImage
            className="!kit-w-full !kit-h-auto"
            height={300}
            width={300}
            {...props.product}
          />
        </Link>
      </div>

      <div className="kit-mt-4">
        <div className="kit-flex kit-flex-row kit-justify-between kit-items-center kit-gap-4 kit-mb-2">
          <h3 className="kit-tracking-tight kit-uppercase kit-truncate kit-flex-1 kit-link">
            <Link href={productUrl}>{props.product.name}</Link>
          </h3>

          <p className="kit-w-[64px] kit-text-right">
            <FormattedPrice price={props.product.price} />
          </p>
        </div>

        <div className="kit-flex kit-flex-row kit-justify-between kit-items-end kit-gap-8">
          {props.button}
        </div>
      </div>
    </div>
  );
};