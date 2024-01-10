import { CSSProperties } from "react";
import { Size } from "../../../types/types.ts";

type ImageProps = {
  data: {
    src: string;
    alt: string;
    size: Size;
  };
};

function Image({ data }: ImageProps) {
  const style: CSSProperties = {
    height: data.size.height,
    width: data.size.width,
  };
  return <img style={style} src={data.src} alt={data.alt} />;
}

export default Image;
