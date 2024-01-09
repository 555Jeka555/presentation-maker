import { useEffect, useState } from "react";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";
import classes from "./Presentation.module.css";
import SlidePresentation from "../SlidePresentation/SlidePresentation.tsx";

type SlideShowProps = {
  setIsSlideShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function Presentation({ setIsSlideShow }: SlideShowProps) {
  const presentation = useAppSelector(state => state.presentation);
  const { createChangeSlideShowModeAction, createShowPrevSlideAction, createShowNextSlideAction } = useAppActions();
  const [currentSlide, setCurrentSlide] = useState(presentation.currentSlide);
  const handleKeyPress = (event: KeyboardEvent) => {
    const enterKey = event.key;

    if (enterKey === "F2" || enterKey === "Escape") {
      createChangeSlideShowModeAction();
      setIsSlideShow(presentation.isSlideShow);
    } else if (enterKey === "ArrowDown") {
      createShowNextSlideAction();
      setCurrentSlide(presentation.currentSlide);
    } else if (enterKey === "ArrowUp") {
      createShowPrevSlideAction();
      setCurrentSlide(presentation.currentSlide);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [presentation]);

  return (
    <div className={classes.slide__show}>{currentSlide ? <SlidePresentation slide={currentSlide} /> : <div></div>}</div>
  );
}

export default Presentation;
