import { Reducer } from "redux";
import { v4 as uuidv4 } from "uuid";
import { Color, Presentation, Slide as TSlide } from "../types/types.ts";
import { Action, Actions } from "./actions/actions.ts";

const initialPresentation: Presentation = {
  name: "Презентация без названия",
  currentSlide: null,
  selectSlides: [],
  slides: [],
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

      state.slides.push(newSLide);
      state.currentSlide = newSLide;
      state.selectSlides = [];
      state.selectSlides.push(newSLide);

      return {
        ...state,
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
    default: {
      return state;
    }
  }
};
