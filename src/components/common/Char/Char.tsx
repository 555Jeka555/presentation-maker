import { CSSProperties } from "react";
import { Char } from "../../../types/types.ts";

type CharProps = Omit<Char, "id">;

function Char({ color, fontFamily, fontSize, value, bold, italic, underlined }: CharProps) {
  const style: CSSProperties = {
    color,
    fontFamily,
    fontSize,
    fontStyle: italic ? "italic" : "normal",
    fontWeight: bold ? "bold" : "normal",
    textDecoration: underlined ? "underline" : "none",
  };
  return <span style={style}>{value}</span>;
}

export default Char;
