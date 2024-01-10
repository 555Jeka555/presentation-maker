import { v4 as uuidv4 } from "uuid";
import { Menu, MenuElement, Presentation as TPresentation } from "../types/types.ts";
import { useAppActions } from "../store/hooks.ts";

const slideBarMenuElements: MenuElement[] = [
  {
    id: uuidv4(),
    onClick: (): void => {
      const { createCreateSlideAction } = useAppActions();

      createCreateSlideAction();
    },
    text: "Новый слайд",
  },
  {
    id: uuidv4(),
    onClick: () => {
      const newPresentation: TPresentation = { ...presentation };

      newPresentation.slides = newPresentation.slides.filter(slide => !presentation.selectSlides.includes(slide));

      newPresentation.selectSlides = [];
      if (newPresentation.slides.length > 0) {
        newPresentation.currentSlide = newPresentation.slides[0];
        newPresentation.selectSlides.push(newPresentation.currentSlide);
      } else {
        newPresentation.currentSlide = null;
      }
      setPresentation(newPresentation);
    },
    text: "Удалить слайд",
  },
];
export const slideBarMenu: Menu = {
  menuElements: slideBarMenuElements,
};
