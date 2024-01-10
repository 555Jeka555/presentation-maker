import { useEffect } from "react";
import Slide from "../Slide/Slide.tsx";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";
import classes from "./Workspace.module.css";

function Workspace() {
  const presentation = useAppSelector(state => state.presentation);
  const { createCreateSlideAction } = useAppActions();

  const handleNewSlide = () => {
    createCreateSlideAction();
  };

  useEffect(() => {}, [presentation]);

  return (
    <div className={classes.workspace}>
      {presentation.currentSlide ? (
        <Slide slide={presentation.currentSlide} />
      ) : (
        <div className={classes["new-slide"]} onClick={handleNewSlide}>
          Нажмите, чтобы добавить новый слайд
        </div>
      )}
    </div>
  );
}

export default Workspace;
