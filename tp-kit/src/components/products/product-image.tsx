import React from "react";
import Image from 'next/image';
import { cn } from "../../lib/utils";

type Props = {
  img: string,
  name: string
  className?: string,
  width?: number,
  height?: number,
  priority?: boolean,
}

const ProductImage: React.FC<Props> = function({className, ...props}) {
  return <Image
  className={cn("transition-transform hover:scale-110 brightness-95 saturate-150", className)}
  src={props.img}
  priority={props.priority}
  alt={`Image d'un ${props.name}`}
  height={props.height ?? 300}
  width={props.width ?? 300}
/>;
};

ProductImage.displayName = "ProductImage";
export {ProductImage};