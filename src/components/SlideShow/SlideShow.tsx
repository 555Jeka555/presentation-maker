import classes from "./SlideShow.module.css";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";
import { useEffect } from "react";

type SlideShowProps = {
  setIsSlideShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function SlideShow({ setIsSlideShow }: SlideShowProps) {
  const presentation = useAppSelector(state => state.presentation);
  const { createChangeSlideShowModeAction } = useAppActions();
  const handleKeyPress = (event: KeyboardEvent) => {
    const enterKey = event.key;
    if (event.target.value !== undefined) {
      return;
    }

    if (enterKey === "F2") {
      createChangeSlideShowModeAction();
      setIsSlideShow(presentation.isSlideShow);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [presentation]);

  return <div className={classes.slide__show}></div>;
}

export default SlideShow;
