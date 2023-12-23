import Slide from "../Slide/Slide.tsx";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";
import classes from "./Workspace.module.css";

function Workspace() {
  const currentSlide = useAppSelector(state => state.presentation.currentSlide);
  const { createCreateSlideAction } = useAppActions();

  const handleNewSlide = () => {
    createCreateSlideAction();
  };

  return (
    <div className={classes.workspace}>
      {currentSlide ? (
        <Slide slide={currentSlide} />
      ) : (
        <div className={classes["new-slide"]} onClick={handleNewSlide}>
          Нажмите, чтобы добавить новый слайд
        </div>
      )}
    </div>
  );
}

export default Workspace;
