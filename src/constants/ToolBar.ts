import { v4 as uuidv4 } from "uuid";
import {
  Block,
  Option,
  Position,
  Size,
  Presentation as TPresentation,
  Text,
  FontFamily,
  Color,
} from "../types/types.ts";

export const fontOptions: Option[] = [
  {
    id: uuidv4(),
    label: "Roboto",
    value: "Roboto",
  },
  {
    id: uuidv4(),
    label: "Arial",
    value: "Arial",
  },
];

export const insertTextOnClick = (
  presentation: TPresentation,
  setPresentation: (presentation: TPresentation) => void
): void => {
  const newPresentation: TPresentation = { ...presentation };

  const defaultSize: Size = {
    height: 20,
    width: 20,
  };

  const defaultPosition: Position = {
    x: 0,
    y: 0,
  };

  const fontFamily: FontFamily = "Arial";
  const color: Color = "#000";

  const text: Text & Block = {
    data: {
      text: "",
      fontSize: 11,
      fontFamily,
      color,
      bold: false,
      italic: false,
      underlined: false,
    },
    id: uuidv4(),
    position: defaultPosition,
    rotation: 0,
    size: defaultSize,
    type: "text",
  };

  newPresentation.currentSlide?.objects.push(text);
  setPresentation(newPresentation);
};

export const italicOnClick = (
  presentation: TPresentation,
  setPresentation: (presentation: TPresentation) => void
): void => {
  const newPresentation = { ...presentation };
  const currentSlide = newPresentation.currentSlide;
  if (currentSlide) {
    currentSlide.selectObjects.map(object => {
      if (object.type === "text") {
        object.data.italic = !object.data.italic;
      }
    });
  }
  setPresentation(newPresentation);
};

export const boldOnClick = (
  presentation: TPresentation,
  setPresentation: (presentation: TPresentation) => void
): void => {
  const newPresentation = { ...presentation };
  const currentSlide = newPresentation.currentSlide;
  if (currentSlide) {
    currentSlide.selectObjects.map(object => {
      if (object.type === "text") {
        object.data.bold = !object.data.bold;
      }
    });
  }
  setPresentation(newPresentation);
};

export const underlineOnClick = (
  presentation: TPresentation,
  setPresentation: (presentation: TPresentation) => void
): void => {
  const newPresentation = { ...presentation };
  const currentSlide = newPresentation.currentSlide;
  if (currentSlide) {
    currentSlide.selectObjects.map(object => {
      if (object.type === "text") {
        object.data.underlined = !object.data.underlined;
      }
    });
  }
  setPresentation(newPresentation);
};
