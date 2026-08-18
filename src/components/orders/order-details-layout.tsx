import { OrderData } from "@/types";
import { OrderStatus } from "./order-status";
import { FormattedDate } from "@/components/data-display/formatted-date";
import { FormattedPrice } from "@/components/data-display/formatted-price";
import { Button } from "@/components/button";
import { ProductImage } from "@/components/products/product-image";

type Props = {
  /**
   * L'objet commande pour lequel on veut afficher les information
   */
  order: OrderData;
  /**
   * Callback appelé lorsque l'utilisateur clique sur le bouton "retour"
   */
  onClose?: () => void,
};

/**
 * Structure d'affichage du détail d'une commande reçue en propriété
 */
export const OrderDetailsLayout: React.FC<Props> = function ({ order, onClose }) {
  return (
    <div className="kit-space-y-6">
      <header className="kit-flex kit-flex-row kit-justify-between">
        <h2 className="kit-text-lg kit-font-bold">
          Commande n°{order.id}
        </h2>

        <OrderStatus status={order.status} />
      </header>

      <div className="kit-grid md:kit-grid-cols-2 kit-gap-4">
        <p>
          <span className="kit-tracking-loose kit-uppercase kit-block kit-text-xs">Créée le</span>
          <FormattedDate date={order.createdAt} />
        </p>

        {order.completedAt && <p>
          <span className="kit-tracking-loose kit-uppercase kit-block kit-text-xs">Complétée le</span>
          <FormattedDate date={order.completedAt} />
        </p>}
      </div>

      <ul className="">
        {order.lines.map(line => <li key={line.id} className="kit-py-4 kit-grid kit-grid-cols-4 kit-gap-4">
          <div className="kit-rounded-lg kit-overflow-hidden">
            <ProductImage 
              img={line.product.img} 
              name={line.product.name}
              height={100}
              width={100}
              className="kit-w-full kit-aspect-square"
            />
          </div>

          <div className="kit-col-span-3 kit-flex kit-flex-col kit-justify-between">
            <div className="kit-text-sm">
              <h3 className="kit-font-medium kit-uppercase kit-tracking-widest">{line.product.name}</h3>
              <p className="kit-text-slate-700">Prix unitaire : <FormattedPrice price={line.product.price} /></p>
            </div>

            <div className="kit-flex kit-items-end kit-justify-between kit-gap-4">
              <div>Qté : x{line.qty}</div>
              <div>Sous-total : <FormattedPrice price={line.subtotal} /></div>
            </div>
          </div>
        </li>)}
      </ul>

      <div className="kit-grid kit-grid-cols-2 kit-gap-6 kit-font-bold">
        <p className="">Total</p>
        <p className="kit-text-right"><FormattedPrice price={order.total} /></p>
      </div>

      <Button variant={"ghost"} fullWidth size={"lg"} onClick={onClose}>
        Retour
      </Button>
    </div>
  );
};

