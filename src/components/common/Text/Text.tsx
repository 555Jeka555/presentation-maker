import { CSSProperties } from "react";
import { Color, FontFamily } from "../../../types/types.ts";

type TextProps = {
  data: {
    text: string;
    fontSize: number;
    fontFamily: FontFamily;
    color: Color;
    bold: boolean;
    italic: boolean;
    underlined: boolean;
  };
};

function Text({ data }: TextProps) {
  const font: string = ` ${data.bold ? "bold" : ""} ${data.italic ? "italic" : ""} normal ${data.fontSize}px/${
    data.fontSize * 1.1
  }px ${data.fontFamily}, serif`;
  const textDecoration = `${data.underlined ? "underline" : ""}`;

  const style: CSSProperties = {
    font: font,
    textDecoration: textDecoration,
    whiteSpace: "pre-wrap",
    color: data.color,
  };

  return <span style={style}>{data.text}</span>;
}

export default Text;
