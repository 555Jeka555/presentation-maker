import { Reducer } from "redux";
import { v4 as uuidv4 } from "uuid";
import {
  Block,
  Color,
  FontFamily,
  Image,
  Position,
  Presentation,
  Primitive,
  Size,
  Slide as TSlide,
  Text,
  Text as TText,
} from "../types/types.ts";
import { Action, Actions } from "./actions/actions.ts";

const initialPresentation: Presentation = {
  name: "Презентация без названия",
  currentSlide: null,
  selectSlides: [],
  slides: [],
  isSlideShow: false,
};

export const reducer: Reducer<Presentation, Action> = (state = initialPresentation, action) => {
  switch (action.type) {
    case Actions.CHANGE_NAME: {
      return {
        ...state,
        name: action.payload.newName,
      };
    }
    case Actions.CREATE_SLIDE: {
      const backgroundSlide: Color = "#fff";

      const newSLide: TSlide = {
        background: backgroundSlide,
        id: uuidv4(),
        objects: [],
        selectObjects: [],
      };

      return {
        ...state,
        slides: [...state.slides, newSLide],
        currentSlide: newSLide,
        selectSlides: [newSLide],
      };
    }
    case Actions.DELETE_SLIDES: {
      state.slides = state.slides.filter(slide => !state.selectSlides.includes(slide));
      state.selectSlides = [];
      if (state.slides.length > 0) {
        state.currentSlide = state.slides[0];
        state.selectSlides.push(state.currentSlide);
      } else {
        state.currentSlide = null;
      }

      return {
        ...state,
      };
    }
    case Actions.UPDATE_SLIDE: {
      console.log(state.slides);
      console.log(action.payload.slides);
      return { ...state, slides: [...action.payload.slides] };
    }
    case Actions.SELECT_SLIDE: {
      if (
        state.currentSlide &&
        state.currentSlide !== action.payload.slide &&
        !state.selectSlides.includes(action.payload.slide)
      ) {
        state.currentSlide = action.payload.slide;
        state.selectSlides.push(action.payload.slide);
      } else if (state.currentSlide !== action.payload.slide && state.selectSlides.includes(action.payload.slide)) {
        state.selectSlides = state.selectSlides.filter(selectSlide => selectSlide !== action.payload.slide);
      }

      return {
        ...state,
      };
    }
    case Actions.SELECT_ONE_SLIDE: {
      return { ...state, currentSlide: action.payload.slide, selectSlides: [action.payload.slide] };
    }
    case Actions.CREATE_PRIMITIVE: {
      const defaultSize: Size = {
        height: 20,
        width: 20,
      };

      const defaultPosition: Position = {
        x: 0,
        y: 0,
      };

      const color: Color = "#000";

      switch (action.payload.type) {
        case "triangle": {
          const primitive: Primitive & Block = {
            data: {
              form: "triangle",
              size: defaultSize,
              color,
            },
            id: uuidv4(),
            position: defaultPosition,
            rotation: 0,
            size: defaultSize,
            type: "primitive",
          };

          state.currentSlide?.objects.push(primitive);
          break;
        }
        case "ellipse": {
          const primitive: Primitive & Block = {
            data: {
              form: "ellipse",
              size: defaultSize,
              color,
            },
            id: uuidv4(),
            position: defaultPosition,
            rotation: 0,
            size: defaultSize,
            type: "primitive",
          };

          state.currentSlide?.objects.push(primitive);
          break;
        }
        case "rectangle": {
          const primitive: Primitive & Block = {
            data: {
              form: "rectangle",
              size: defaultSize,
              color,
            },
            id: uuidv4(),
            position: defaultPosition,
            rotation: 0,
            size: defaultSize,
            type: "primitive",
          };
          state.currentSlide?.objects.push(primitive);
          break;
        }
        case "text": {
          const fontFamily: FontFamily = "Arial";

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
          state.currentSlide?.objects.push(text);
          break;
        }
        case "image": {
          const image: Image & Block = {
            data: {
              alt: "",
              src: action.payload.image ? action.payload.image : "",
              size: defaultSize,
            },
            id: uuidv4(),
            position: defaultPosition,
            rotation: 0,
            size: defaultSize,
            type: "image",
          };

          state.currentSlide?.objects.push(image);
          break;
        }
      }

      return {
        ...state,
      };
    }
    case Actions.FOCUS_PRIMITIVE: {
      return {
        ...state,
        currentSlide:
          state.currentSlide === null ? null : { ...state.currentSlide, selectObjects: [action.payload.object] },
      };
    }
    case Actions.MOVE_PRIMITIVES: {
      return {
        ...state,
        currentSlide:
          state.currentSlide === null
            ? null
            : {
                ...state.currentSlide,
                objects: [
                  ...state.currentSlide.objects.filter(
                    object => !state.currentSlide?.selectObjects.some(ob => ob.id === object.id)
                  ),
                  ...state.currentSlide.selectObjects.map(object => ({
                    ...object,
                    position: {
                      x: object.position.x + action.payload.delta.x,
                      y: object.position.y + action.payload.delta.y,
                    },
                  })),
                ],
              },
        slides:
          state.currentSlide === null
            ? [...state.slides]
            : [
                ...state.slides.map(slide => {
                  if (slide.id === state.currentSlide?.id) {
                    return {
                      ...state.currentSlide,
                      objects: [
                        ...state.currentSlide.objects.filter(
                          object => !state.currentSlide?.selectObjects.some(ob => ob.id === object.id)
                        ),
                        ...state.currentSlide.selectObjects.map(object => ({
                          ...object,
                          position: {
                            x: object.position.x + action.payload.delta.x,
                            y: object.position.y + action.payload.delta.y,
                          },
                        })),
                      ],
                    };
                  } else {
                    return slide;
                  }
                }),
              ],
      };
    }
    case Actions.SELECT_PRIMITIVE: {
      state.currentSlide?.objects.map(object => {
        if (object === action.payload.object && !state.currentSlide?.selectObjects.includes(object)) {
          state.currentSlide?.selectObjects.push(object);
        } else if (object === action.payload.object && state.currentSlide?.selectObjects.includes(object)) {
          if (state.currentSlide !== null) {
            state.currentSlide.selectObjects = state.currentSlide.selectObjects.filter(object => {
              return object !== action.payload.object;
            });
          }
        }
      });

      return {
        ...state,
      };
    }
    case Actions.CHANGE_TEXT: {
      const setSizeTextBlock = (objectText: TText, type: "enter" | "newLine" | "del"): void => {
        if (type === "enter") {
          objectText.size.width = (objectText.data.text.length * objectText.data.fontSize) / 1.5;
        } else if (type === "newLine") {
          objectText.size.height += objectText.data.fontSize * 2;
        } else if (type === "del") {
          objectText.size.width = (objectText.data.text.length * objectText.data.fontSize) / 1.5;
        }
      };

      state.currentSlide?.selectObjects.map(object => {
        if (object.type === "text") {
          if (action.payload.keyEnter.length === 1) {
            object.data.text += action.payload.keyEnter;
            setSizeTextBlock(object, "enter");
          } else if (action.payload.keyEnter === "Enter") {
            object.data.text += "\n";
            setSizeTextBlock(object, "newLine");
          } else if (action.payload.keyEnter === "Backspace") {
            object.data.text = object.data.text.slice(0, -1);
            setSizeTextBlock(object, "del");
          }
        }
      });

      return {
        ...state,
      };
    }
    case Actions.DELETE_PRIMITIVE: {
      if (state.currentSlide !== null) {
        state.currentSlide.objects = state.currentSlide.objects.filter(object => {
          return !state.currentSlide?.selectObjects.includes(object);
        });

        state.currentSlide.selectObjects = [];
      }

      return {
        ...state,
      };
    }
    case Actions.CHANGE_ITALIC_TEXT: {
      state.currentSlide?.selectObjects.map(object => {
        if (object.type === "text") {
          object.data.italic = !object.data.italic;
        }
      });

      return {
        ...state,
      };
    }
    case Actions.CHANGE_BOLD_TEXT: {
      state.currentSlide?.selectObjects.map(object => {
        if (object.type === "text") {
          object.data.bold = !object.data.bold;
        }
      });

      return {
        ...state,
      };
    }
    case Actions.CHANGE_UNDERLINE_TEXT: {
      state.currentSlide?.selectObjects.map(object => {
        if (object.type === "text") {
          object.data.underlined = !object.data.underlined;
        }
      });

      return {
        ...state,
      };
    }
    case Actions.CHANGE_SIZE_TEXT: {
      const setSizeObjectText = (objectText: TText, oldFontSize: number): TText => {
        const newObjectText = { ...objectText };

        if (oldFontSize > newObjectText.data.fontSize) {
          newObjectText.size.width /= oldFontSize;
          newObjectText.size.height /= oldFontSize;
        } else if (oldFontSize < newObjectText.data.fontSize) {
          newObjectText.size.width *= newObjectText.data.fontSize;
          newObjectText.size.height *= newObjectText.data.fontSize;
        }

        return newObjectText;
      };

      state.currentSlide?.selectObjects.map(object => {
        if (object.type === "text") {
          const oldFontSize: number = object.data.fontSize;

          object.data.fontSize = action.payload.size;
          object = setSizeObjectText(object, oldFontSize);
        }
      });

      return {
        ...state,
      };
    }
    case Actions.CHANGE_BACKGROUND_PICTURE: {
      if (state.currentSlide) {
        state.currentSlide.background = action.payload.src;
      }

      return {
        ...state,
      };
    }
    case Actions.CHANGE_COLOR: {
      if (state.currentSlide?.selectObjects.length === 0) {
        state.currentSlide.background = action.payload.color;
      } else {
        state.currentSlide?.selectObjects.map(object => {
          if (object.type === "text" || object.type === "primitive") {
            object.data.color = action.payload.color;
          }
        });
      }

      return {
        ...state,
      };
    }
    case Actions.CHAN0E_FONT_FAMILY: {
      state.currentSlide?.selectObjects.map(object => {
        if (object.type === "text") {
          object.data.fontFamily = action.payload.fontFamily;
        }
      });

      return {
        ...state,
      };
    }
    case Actions.CHANGE_ROTATION: {
      state.currentSlide?.selectObjects.map(object => {
        if (action.payload.rotation === "right") {
          object.rotation += 5;
        } else if (action.payload.rotation === "left") {
          object.rotation -= 5;
        }
      });

      return {
        ...state,
      };
    }
    case Actions.CHANGE_SIZE: {
      state.currentSlide?.selectObjects.map(object => {
        if (action.payload.size === "up") {
          object.size.width += 5;
          object.size.height += 5;
        } else if (action.payload.size === "down") {
          object.size.width -= 5;
          object.size.height -= 5;
        }
      });

      return {
        ...state,
      };
    }
    case Actions.CHANGE_SLIDE_SHOW_MODE: {
      state.isSlideShow = !state.isSlideShow;
      state.selectSlides = [];
      if (state.currentSlide) {
        state.currentSlide.selectObjects = [];
        state.selectSlides = [state.currentSlide];
      }

      return {
        ...state,
      };
    }
    case Actions.SHOW_PREV_SLIDE: {
      state.slides.map((_, index) => {
        const indexPrev = index - 1;

        if (indexPrev >= 0) {
          state.currentSlide = state.slides[indexPrev];
          return;
        }
      });

      return {
        ...state,
      };
    }
    case Actions.SHOW_NEXT_SLIDE: {
      state.slides.map((_, index) => {
        const indexNext = index + 1;

        if (indexNext <= state.slides.length - 1) {
          state.currentSlide = state.slides[indexNext];
          return;
        }
      });

      return {
        ...state,
      };
    }
    default: {
      return state;
    }
  }
};
