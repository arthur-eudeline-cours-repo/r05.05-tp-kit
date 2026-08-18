import { OrderDataStatus } from "../../types";
import { cva } from "class-variance-authority";
import React from "react";

type Props = {
  /**
   * Le statut de la commande à afficher
   */
  status: OrderDataStatus
}

const STATUS_LABELS: Record<OrderDataStatus, string> = {
  IN_PROGRESS: 'En cours',
  COMPLETED: 'Complétée',
} as const; 

const variants = cva(
  "rounded-full px-4 py-1 text-xs uppercase font-bold select-none inline-flex items-center justify-center",
  {
    variants: {
      status: {
        IN_PROGRESS: 'bg-amber-50 text-amber-600',
        COMPLETED: 'bg-brand-50 text-brand',
      } satisfies Record<OrderDataStatus, string>
    }
  }
)

/**
 * Affiche le statut de la commande sous forme de badge
 */
export const OrderStatus: React.FC<Props> = function({status}) {
  return <span className={variants({status})}>{STATUS_LABELS[status]}</span>;
};
