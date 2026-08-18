
import { type OrderTableRowData } from "@/types";
import { FormattedDate } from "@/components/data-display/formatted-date";
import { FormattedPrice } from "@/components/data-display/formatted-price";
import { OrderStatus } from "./order-status";


type Props = {
  /**
   * Liste des commandes à afficher
   */
  orders: OrderTableRowData[];
  /**
   * Fonction appelée lors d'un clic sur une ligne
   * 
   * @param order 
   * @returns 
   */
  onRowClick: (order: OrderTableRowData) => void, 
};

/**
 * Structure d'affichage d'une liste de commandes
 */
const OrderTableLayout: React.FC<Props> = function ({ orders, onRowClick }) {
  return (
    <div className="kit-flex">
      <table className="-kit-mx-6 kit-flex-1 kit-select-none">
        <thead>
          <tr className="kit-text-sm kit-uppercase">
            <th className="kit-w-[70px] kit-bg-white kit-border-b kit-border-slate-100 kit-px-2 kit-py-4 kit-pl-6 kit-text-left">
              N°
            </th>
            <th className="kit-border-b kit-bg-white kit-border-slate-100 kit-px-2 kit-py-4 kit-text-left">
              Statut
            </th>
            <th className="kit-border-b kit-bg-white kit-border-slate-100 kit-px-2 kit-py-4 kit-text-right kit-pr-6">
              Total
            </th>
          </tr>
        </thead>
        <tbody className="kit-text-slate-700">
          {orders.length > 0 ? orders.map((order) => (
            <tr key={order.id} className="kit-group" onClick={() => onRowClick(order)}>
              <td className="kit-cursor-pointer kit-border-b kit-border-slate-100 kit-px-2 kit-py-4 kit-pl-6 kit-transition-colors group-active:kit-bg-slate-100 group-last:!kit-border-b-0 group-hover:kit-bg-slate-50">
                #{order.id}
              </td>
              <td className="kit-cursor-pointer kit-border-b kit-border-slate-100 kit-px-2 kit-py-4 kit-transition-colors group-active:kit-bg-slate-100 group-last:!kit-border-b-0 group-hover:kit-bg-slate-50">
                <OrderStatus status={order.status} />
                <span className="kit-hidden md:kit-inline">
                  {order.completedAt ? " Terminée le " : " Crée le "}
                  <FormattedDate date={order.completedAt ?? order.createdAt} />
                </span>
              </td>
              <td className="kit-cursor-pointer kit-border-b kit-border-slate-100 kit-px-2 kit-py-4 kit-pr-6 kit-text-right kit-transition-colors group-active:kit-bg-slate-100 group-last:!kit-border-b-0 group-hover:kit-bg-slate-50">
                <FormattedPrice price={order.total} />
              </td>
            </tr>
          )) : <tr>
            <td colSpan={4} className="kit-text-center kit-py-16">
              Aucune commande
            </td>
            </tr>}
        </tbody>
      </table>
    </div>
  );
};

OrderTableLayout.displayName = "OrderTableLayout";
export { OrderTableLayout };
