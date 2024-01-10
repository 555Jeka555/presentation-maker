import SlideBar from "../SlideBar/SlideBar.tsx";
import Workspace from "../Workspace/Workspace.tsx";
import classes from "./Editor.module.css";

function Editor() {
  return (
    <div className={classes.editor}>
      <SlideBar />
      <Workspace />
    </div>
  );
}

export default Editor;
