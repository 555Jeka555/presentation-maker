import { Size } from "../../../types/types.ts";

type PrimitiveProps = {
  data: {
    color: string;
    size: Size;
    form: "triangle" | "ellipse" | "rectangle";
  };
};

function calculateTriangleCoordinates(width: number, height: number): string {
  return `${width / 2},${0} ${0},${height} ${width},${height}`;
}

function Primitive({ data }: PrimitiveProps) {
  const { size, form } = data;
  const centerX = size.width / 2;
  const centerY = size.height / 2;
  return (
    <svg width={size.width} height={size.height} fill={data.color}>
      <g>
        {form === "ellipse" && <ellipse cx={centerX} cy={centerY} rx={size.width / 2} ry={size.height / 2} />}
        {form === "rectangle" && <rect x={0} y={0} width={size.width} height={size.height} />}
        {form === "triangle" && <polygon points={calculateTriangleCoordinates(size.width, size.height)} />}
      </g>
    </svg>
  );
}

export default Primitive;
