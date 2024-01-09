import { Color, Image, Position, Primitive, Slide as TSlide, Text } from "../../types/types.ts";
import {
  Actions,
  ChangeBackgroundPictureAction,
  ChangeBoldAction,
  ChangeColorAction,
  ChangeFontFamilyAction,
  ChangeItalicAction,
  ChangeRotationAction,
  ChangeSizeAction,
  ChangeSizeTextAction,
  ChangeSlideShowMode,
  ChangeTextAction,
  ChangeTitleAction,
  ChangeUnderlineAction,
  CreatePrimitiveAction,
  CreateSlideAction,
  DeletePrimitiveAction,
  DeleteSlideAction,
  FocusPrimitiveAction,
  MovePrimitivesAction,
  SelectOneSlideAction,
  SelectPrimitiveAction,
  SelectSlideAction,
  UpdateSlidesAction,
} from "./actions.ts";

export function createChangeTitleAction(newName: string): ChangeTitleAction {
  return {
    type: Actions.CHANGE_NAME,
    payload: {
      newName,
    },
  };
}

export function createCreateSlideAction(): CreateSlideAction {
  return {
    type: Actions.CREATE_SLIDE,
  };
}

export function createDeleteSlideAction(): DeleteSlideAction {
  return {
    type: Actions.DELETE_SLIDES,
  };
}

export function createSelectSlideAction(slide: TSlide): SelectSlideAction {
  return {
    type: Actions.SELECT_SLIDE,
    payload: {
      slide,
    },
  };
}

export function createPrimitiveAction(
  type: "triangle" | "ellipse" | "rectangle" | "text" | "image",
  image?: string
): CreatePrimitiveAction {
  return {
    type: Actions.CREATE_PRIMITIVE,
    payload: {
      type,
      image,
    },
  };
}

export function createDeletePrimitiveAction(): DeletePrimitiveAction {
  return {
    type: Actions.DELETE_PRIMITIVE,
  };
}

export function createSelectPrimitiveAction(object: Text | Image | Primitive): SelectPrimitiveAction {
  return {
    type: Actions.SELECT_PRIMITIVE,
    payload: {
      object,
    },
  };
}

export function createFocusPrimitiveAction(object: Text | Image | Primitive): FocusPrimitiveAction {
  return {
    type: Actions.FOCUS_PRIMITIVE,
    payload: {
      object,
    },
  };
}

export function createMovePrimitivesAction(delta: Position): MovePrimitivesAction {
  return {
    type: Actions.MOVE_PRIMITIVES,
    payload: {
      delta,
    },
  };
}

export function createChangeTextAction(keyEnter: string): ChangeTextAction {
  return {
    type: Actions.CHANGE_TEXT,
    payload: {
      keyEnter,
    },
  };
}

export function createChangeItalicTextAction(): ChangeItalicAction {
  return {
    type: Actions.CHANGE_ITALIC_TEXT,
  };
}

export function createChangeBoldTextAction(): ChangeBoldAction {
  return {
    type: Actions.CHANGE_BOLD_TEXT,
  };
}

export function createChangeUnderlineTextAction(): ChangeUnderlineAction {
  return {
    type: Actions.CHANGE_UNDERLINE_TEXT,
  };
}

export function createChangeSizeTextAction(size: number): ChangeSizeTextAction {
  return {
    type: Actions.CHANGE_SIZE_TEXT,
    payload: {
      size,
    },
  };
}

export function createChangeBackgroundPictureAction(src: string): ChangeBackgroundPictureAction {
  return {
    type: Actions.CHANGE_BACKGROUND_PICTURE,
    payload: {
      src,
    },
  };
}

export function createChangeColorAction(color: Color): ChangeColorAction {
  return {
    type: Actions.CHANGE_COLOR,
    payload: {
      color,
    },
  };
}

export function createChangeFontFamilyAction(fontFamily: string): ChangeFontFamilyAction {
  return {
    type: Actions.CHAN0E_FONT_FAMILY,
    payload: {
      fontFamily,
    },
  };
}

export function createChangeRotationAction(rotation: "right" | "left"): ChangeRotationAction {
  return {
    type: Actions.CHANGE_ROTATION,
    payload: {
      rotation,
    },
  };
}

export function createUpdateSlidesAction(slides: TSlide[]): UpdateSlidesAction {
  return { type: Actions.UPDATE_SLIDE, payload: { slides } };
}

export function createSelectOneSlideAction(slide: TSlide): SelectOneSlideAction {
  return { type: Actions.SELECT_ONE_SLIDE, payload: { slide } };
}

export function createChangeSizeAction(size: "up" | "down"): ChangeSizeAction {
  return {
    type: Actions.CHANGE_SIZE,
    payload: {
      size,
    },
  };
}

export function createChangeSlideShowModeAction(): ChangeSlideShowMode {
  return {
    type: Actions.CHANGE_SLIDE_SHOW_MODE,
  };
}
