import { OrderDataStatus } from "@/types";
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
  "kit-rounded-full kit-px-4 kit-py-1 kit-text-xs kit-uppercase kit-font-bold kit-select-none kit-inline-flex kit-items-center kit-justify-center",
  {
    variants: {
      status: {
        IN_PROGRESS: 'kit-bg-amber-50 kit-text-amber-600',
        COMPLETED: 'kit-bg-brand-50 kit-text-brand',
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
