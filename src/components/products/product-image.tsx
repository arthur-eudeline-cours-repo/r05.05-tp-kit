import React from "react";
import Image from 'next/image';

type Props = {
  img: string,
  name: string
  className?: string,
  width?: number,
  height?: number,
  priority?: boolean,
}

const ProductImage: React.FC<Props> = function({className = '', ...props}) {
  return <Image
  className={`kit-transition-transform hover:kit-scale-110 kit-brightness-95 kit-saturate-150 ${className}`}
  src={props.img}
  priority={props.priority}
  alt={`Image d'un ${props.name}`}
  height={props.height ?? 300}
  width={props.width ?? 300}
/>;
};

ProductImage.displayName = "ProductImage";
export {ProductImage};