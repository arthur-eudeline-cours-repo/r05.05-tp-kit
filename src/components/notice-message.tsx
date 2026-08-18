import { VariantProps, cva } from "class-variance-authority";
import React from "react";
import { WarningOctagon, CheckCircle } from "@phosphor-icons/react/dist/ssr";

const labels = {
  error: "Erreur",
  success: "Succès",
};

const icons = {
  error: <WarningOctagon weight="regular" size={24} />,
  success: <CheckCircle weight="regular" size={24} />,
} satisfies Record<keyof typeof labels, React.ReactNode>;

const variants = cva(
  "kit-my-6 kit-rounded-lg kit-p-4 kit-flex kit-flex-row kit-gap-4 kit-transition-colors kit-border-2 kit-cursor-pointer",
  {
    variants: {
      /**
       * Le type de la notice
       * @default error
       */
      type: {
        error:
          "kit-bg-red-50 kit-text-red-800 hover:kit-bg-red-100 active:kit-bg-red-200 kit-border-red-800",
        success:
          "kit-bg-green-50 kit-text-green-800 hover:kit-bg-green-100 active:kit-bg-green-200 kit-border-green-800",
      } satisfies Record<keyof typeof labels, string>,
    },
    defaultVariants: {
      type: "error",
    },
  }
);

export type NoticeMessageData = {
  message: React.ReactNode;
  type: keyof typeof labels;
};

type Props = VariantProps<typeof variants> & {
  /**
   * Le message a afficher dans la notice
   */
  message: React.ReactNode;
  /**
   * Fonction appelée lorsque l'utilisateur clic sur le message d'erreur pour le masquer
   * @returns 
   */
  onDismiss?: () => void;
  /**
   * Classes HTML additionnelles optionnelles
   */
  className?: string;
};

/**
 * Affiche un message d'état.
 * 
 * **Exemple d'utilisation**
 * 
 * ```tsx
 * const Example = () => {
 *  const [notices, setNotices] = useState<NoticeMessageData[]>([]);
 *
 *  function addError() {
 *    setNotices(n => [...n, { type: "error", message: "My message" }]);
 *  }
 * 
 *  function addSuccess() {
 *    setNotices(n => [...n, { type: "success", message: "My message" }]);
 *  }
 * 
 *  function removeNotice(index) {
 *    setNotices(n => {
 *      delete(n[index]);
 *      return Object.values(n);
 *    });
 *  }
 * 
 *  return <>
 *    <button onClick={addError}>Add Error</button>
 *    <button onClick={addSuccess}>Add Success</button>
 * 
 *    <h1>Notices</h1>
 *    <ul>
 *      {notices.map((notice, i) => <NoticeMessage
 *        key={i} 
 *        {...notice} 
 *        onDismiss={() => removeNotice(i)} 
 *      />)}
 *    </ul>
 *  </>;
 * }
 * ```
 */
export const NoticeMessage: React.FC<Props> = function ({
  onDismiss,
  message,
  className = "",
  ...props
}) {
  const type = props.type ?? "error";

  return (
    <div className={`${variants(props)} ${className}`} onClick={onDismiss}>
      {icons[type]}
      <div className="kit-flex-1">
        <p className="kit-uppercase kit-text-xs">{labels[type]}</p>
        <p className="kit-text-sm">{message}</p>
      </div>
    </div>
  );
};

