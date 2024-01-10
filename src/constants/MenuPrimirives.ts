import { v4 as uuidv4 } from "uuid";
import { Block, Position, Primitive, Size, Presentation as TPresentation } from "../types/types.ts";

export const onClickTriangle = (
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

  const triangle: Primitive & Block = {
    data: {
      form: "triangle",
      size: defaultSize,
    },
    id: uuidv4(),
    position: defaultPosition,
    rotation: 0,
    size: defaultSize,
    type: "primitive",
  };

  newPresentation.currentSlide?.objects.push(triangle);
  setPresentation(newPresentation);
};

export const onClickRectangle = (
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

  const triangle: Primitive & Block = {
    data: {
      form: "rectangle",
      size: defaultSize,
    },
    id: uuidv4(),
    position: defaultPosition,
    rotation: 0,
    size: defaultSize,
    type: "primitive",
  };
  newPresentation.currentSlide?.objects.push(triangle);
  setPresentation(newPresentation);
};

export const onClickEllipse = (
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

  const triangle: Primitive & Block = {
    data: {
      form: "ellipse",
      size: defaultSize,
    },
    id: uuidv4(),
    position: defaultPosition,
    rotation: 0,
    size: defaultSize,
    type: "primitive",
  };
  newPresentation.currentSlide?.objects.push(triangle);
  setPresentation(newPresentation);
};
