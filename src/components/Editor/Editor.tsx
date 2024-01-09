import SlideBar from "../SlideBar/SlideBar.tsx";
import Workspace from "../Workspace/Workspace.tsx";
import classes from "./Editor.module.css";
import { useAppActions, useAppSelector } from "../../store/hooks.ts";
import { useEffect } from "react";

type SlideShowProps = {
  setIsSlideShow: React.Dispatch<React.SetStateAction<boolean>>;
};

function Editor({ setIsSlideShow }: SlideShowProps) {
  const { createChangeSlideShowModeAction } = useAppActions();
  const presentation = useAppSelector(state => state.presentation);
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

  return (
    <div className={classes.editor}>
      <SlideBar />
      <Workspace />
    </div>
  );
}

export default Editor;
