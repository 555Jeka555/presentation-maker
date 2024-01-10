import { Color, Image, Position, Primitive, Slide as TSlide, Text } from "../../types/types.ts";

export enum Actions {
  SELECT_ONE_SLIDE = "SELECT_ONE_SLIDE",
  CHANGE_NAME = "CHANGE_NAME",
  CREATE_SLIDE = "CREATE_SLIDE",
  UPDATE_SLIDE = "UPDATE_SLIDE",
  SELECT_SLIDE = "SELECT_SLIDE",
  DELETE_SLIDES = "DELETE_SLIDES",
  CREATE_PRIMITIVE = "CREATE_PRIMITIVE",
  SELECT_PRIMITIVE = "SELECT_PRIMITIVE",
  DELETE_PRIMITIVE = "DELETE_PRIMITIVE",
  MOVE_PRIMITIVES = "MOVE_PRIMITIVES",
  CHANGE_TEXT = "CHANGE_TEXT",
  CHANGE_ITALIC_TEXT = "CHANGE_ITALIC_TEXT",
  CHANGE_BOLD_TEXT = "CHANGE_BOLD_TEXT",
  CHANGE_UNDERLINE_TEXT = "CHANGE_UNDERLINE_TEXT",
  CHANGE_SIZE_TEXT = "CHANGE_SIZE_TEXT",
  CHANGE_BACKGROUND_PICTURE = "CHANGE_BACKGROUND_PICTURE",
  CHANGE_COLOR = "CHANGE_COLOR",
  CHAN0E_FONT_FAMILY = "CHAN0E_FONT_FAMILY",
  CHANGE_ROTATION = "CHANGE_ROTATION",
  FOCUS_PRIMITIVE = "FOCUS_PRIMITIVE",
  CHANGE_SIZE = "CHANGE_SIZE",
}

export type ChangeTitleAction = { type: Actions.CHANGE_NAME; payload: { newName: string } };

export type CreateSlideAction = {
  type: Actions.CREATE_SLIDE;
};

export type MovePrimitivesAction = {
  type: Actions.MOVE_PRIMITIVES;
  payload: {
    delta: Position;
  };
};

export type DeleteSlideAction = {
  type: Actions.DELETE_SLIDES;
};

export type SelectSlideAction = {
  type: Actions.SELECT_SLIDE;
  payload: {
    slide: TSlide;
  };
};

export type CreatePrimitiveAction = {
  type: Actions.CREATE_PRIMITIVE;
  payload: {
    type: "triangle" | "ellipse" | "rectangle" | "text" | "image";
    image?: string;
  };
};

export type SelectPrimitiveAction = {
  type: Actions.SELECT_PRIMITIVE;
  payload: {
    object: Text | Image | Primitive;
  };
};
export type FocusPrimitiveAction = {
  type: Actions.FOCUS_PRIMITIVE;
  payload: {
    object: Text | Image | Primitive;
  };
};
export type DeletePrimitiveAction = {
  type: Actions.DELETE_PRIMITIVE;
};

export type ChangeTextAction = {
  type: Actions.CHANGE_TEXT;
  payload: {
    keyEnter: string;
  };
};

export type ChangeItalicAction = {
  type: Actions.CHANGE_ITALIC_TEXT;
};

export type ChangeBoldAction = {
  type: Actions.CHANGE_BOLD_TEXT;
};

export type ChangeUnderlineAction = {
  type: Actions.CHANGE_UNDERLINE_TEXT;
};

export type ChangeSizeTextAction = {
  type: Actions.CHANGE_SIZE_TEXT;
  payload: {
    size: number;
  };
};

export type ChangeBackgroundPictureAction = {
  type: Actions.CHANGE_BACKGROUND_PICTURE;
  payload: {
    src: string;
  };
};

export type ChangeColorAction = {
  type: Actions.CHANGE_COLOR;
  payload: {
    color: Color;
  };
};

export type ChangeFontFamilyAction = {
  type: Actions.CHAN0E_FONT_FAMILY;
  payload: {
    fontFamily: string;
  };
};

export type ChangeRotationAction = {
  type: Actions.CHANGE_ROTATION;
  payload: {
    rotation: "right" | "left";
  };
};

export type UpdateSlidesAction = {
  type: Actions.UPDATE_SLIDE;
  payload: {
    slides: TSlide[];
  };
};

export type SelectOneSlideAction = {
  type: Actions.SELECT_ONE_SLIDE;
  payload: {
    slide: TSlide;
  };
};

export type ChangeSizeAction = {
  type: Actions.CHANGE_SIZE;
  payload: {
    size: "up" | "down";
  };
};

export type Action =
  | ChangeTitleAction
  | FocusPrimitiveAction
  | CreateSlideAction
  | DeleteSlideAction
  | SelectSlideAction
  | CreatePrimitiveAction
  | SelectPrimitiveAction
  | ChangeTextAction
  | DeletePrimitiveAction
  | ChangeBoldAction
  | ChangeUnderlineAction
  | ChangeItalicAction
  | ChangeSizeTextAction
  | ChangeBackgroundPictureAction
  | ChangeColorAction
  | ChangeFontFamilyAction
  | ChangeRotationAction
  | MovePrimitivesAction
  | UpdateSlidesAction
  | SelectOneSlideAction
  | ChangeSizeAction;
