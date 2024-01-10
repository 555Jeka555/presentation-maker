/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from "uuid";
import { Color, History, Image, Operation, Position, Presentation, Size, Slide, Text } from "../types.ts";

const color: Color = "#aaaaaa";

const size: Size = {
  height: 500,
  width: 400,
};

const position: Position = {
  x: 12,
  y: 90,
};

const text: Text = {
  data: {
    text: "Текст",
  },
  id: uuidv4(),
  position: position,
  rotation: 0,
  size: size,
  type: "text",
};

const image: Image = {
  data: {
    alt: "",
    size: size,
    src: "base64:image/jpeg...",
  },
  id: uuidv4(),
  position: position,
  rotation: 0,
  size: size,
  type: "image",
};

const slide: Slide = {
  background: color,
  id: uuidv4(),
  objects: [image, text],
  selectObjects: [text],
};

const presentation: Presentation = {
  currentSlide: slide,
  name: "The first",
  selectSlides: [],
  slides: [slide],
};

const operation: Operation = {
  data: {},
  id: uuidv4(),
};

// @ts-ignore
const history: History = {
  operations: [operation],
  undidOperations: [],
};

export default presentation;
