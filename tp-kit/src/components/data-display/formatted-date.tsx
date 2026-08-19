import React from "react";

type Props = {
  /**
   * La date à afficher
   */
  date: Date | string | number;
}

/**
 * Formate une instance `Date` donnée pour qu'elle s'affiche au format `DD/MM/YYYY à HH:mm:ss`
 */
export const FormattedDate: React.FC<Props> = function({date}) {
  const formattedDate = React.useMemo(() => {
    if (!(date instanceof Date))
      date = new Date(date);
    
    return `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()} à ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`
  }, [date]);
  return <>{formattedDate}</>;
};
