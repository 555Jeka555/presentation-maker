import { useState } from "react";
import Editor from "./components/Editor/Editor.tsx";
import Header from "./components/Header/Header.tsx";
import classes from "./App.module.css";
import Presentation from "./components/Presentation/Presentation.tsx";
import { useUndoRedoListeners } from "./hooks/useUndoRedoListeners.ts";
import { useAppSelector } from "./store/hooks.ts";

function App() {
  const presentation = useAppSelector(state => state.presentation);
  const [isSlideShow, setIsSlideShow] = useState(presentation.isSlideShow);
  useUndoRedoListeners();

  return (
    <div>
      {isSlideShow ? (
        <Presentation setIsSlideShow={setIsSlideShow} />
      ) : (
        <div className={classes.app}>
          <Header presentationName={presentation.name} />
          <Editor setIsSlideShow={setIsSlideShow} />
        </div>
      )}
    </div>
  );
}

export default App;
