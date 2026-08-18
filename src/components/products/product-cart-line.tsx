"use client";

import { Button } from "../button";
import { FormattedPrice } from "../data-display/formatted-price";
import React, { useEffect, useState } from "react";
import { ProductData } from "../../types";
import { X } from "@phosphor-icons/react/dist/ssr";

type Props = {
  /**
   * Les données produit de la ligne
   */
  product: ProductData;
  /**
   * Fonction appelée lorsque l'utilisateur clique sur le bouton de suppression de la ligne
   * @returns
   */
  onDelete: () => void;
  /**
   * Fonction appelée lorsque l'utilisateur modifie la quantité de la ligne
   * @param qty
   * @returns
   */
  onQtyChange: (qty: number) => void;
  /**
   * La quantité initiale de la ligne produit
   */
  qty: number | null;
  /**
   * Classe HTML optionnelle
   */
  className?: string;
};

const MIN = 1;

/**
 * Affichage d'une ligne produit dans le panier
 */
export const ProductCartLine: React.FC<Props> = function ({
  product,
  qty,
  onDelete,
  onQtyChange,
  className = "",
}) {
  const [q, setQ] = useState<string>(qty?.toString() ?? '');
  useEffect(() => {
    setQ(qty?.toString() ?? '')
  }, [qty])

  const increment = () => {
    const newQty = qty === null 
      ? MIN 
      : qty + 1;

    onQtyChange?.(newQty);
    return newQty;
  };

  const decrement = () => {
    const newQty = qty === null || (qty - 1) < MIN 
      ? MIN 
      : qty - 1;

    onQtyChange?.(newQty);
    return newQty;

  }

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setQ(e.target.value)
  };

  const handleBlur:React.FocusEventHandler<HTMLInputElement> = (e) => {
    onQtyChange?.(e.target.value.length < 1 
      ? MIN 
      : Number(e.target.value)
    ); 
  }

  return (
    <div className={`${className} text-sm`}>
      <div className="kit-mb-2 kit-flex kit-flex-row kit-items-center kit-justify-between kit-gap-4">
        <h3 className="kit-w-full">{product.name}</h3>

        <Button
          size={"sm"}
          variant={"ghost"}
          className="!px-2"
          onClick={onDelete}
        >
          <X size={14} weight="bold" className="kit-text-red-400" />
        </Button>
      </div>

      <div className="kit-flex kit-justify-between">
        <div className="kit-flex ki-h-auto kit-w-[100px] kit-items-center kit-overflow-hidden kit-rounded-lg kit-bg-gray-100 kit-text-default">
          <Button
            variant={"ghost"}
            className="!kit-rounded-none !kit-px-3 !kit-py-2"
            onClick={decrement}
          >
            –
          </Button>

          <input
            type="number"
            value={q}
            onChange={handleChange}
            onBlur={handleBlur}
            className="kit-w-full kit-border-none kit-bg-transparent kit-text-center kit-outline-none"
            min={MIN}
            step={1}
          />

          <Button
            variant={"ghost"}
            className="!kit-rounded-none !kit-px-3 !kit-py-2"
            onClick={increment}
          >
            +
          </Button>
        </div>
        <p className="kit-flex kit-flex-row kit-items-center kit-justify-between kit-gap-4 kit-text-base">
          <FormattedPrice
            className="kit-text-right"
            price={product.price * (qty ?? MIN)}
          />
        </p>
      </div>
    </div>
  );
};
