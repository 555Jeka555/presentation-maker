import { CSSProperties } from "react";
import { Image as TImage, Primitive as TPrimitive, Text as TText } from "../../../types/types.ts";
import Image from "../Image/Image.tsx";
import Text from "../Text/Text.tsx";
import Primitive from "../Primitive/Primitive.tsx";
import classes from "./BlockPreview.module.css";

type BlockProps = {
  object: TPrimitive | TImage | TText;
  isWorkSpace: boolean;
};

function BlockPreview({ object, isWorkSpace }: BlockProps) {
  const centerX = object.size.width / 2;
  const centerY = object.size.height / 2;

  const style: CSSProperties = {
    height: object.size.height,
    left: object.position.x,
    top: object.position.y,
    transform: `rotate(${object.rotation}deg)`,
    transformOrigin: `${centerX}px ${centerY}px`,
    width: object.size.width,
  };

  return (
    <div id={`${object.id}${isWorkSpace ? `-workspace` : ``}`} className={classes.block} style={style}>
      {object.type === "image" && <Image data={object.data} />}
      {object.type === "primitive" && <Primitive data={object.data} />}
      {object.type === "text" && <Text data={object.data} />}
    </div>
  );
}

export default BlockPreview;
