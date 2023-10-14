import "./Editor.css";
import { Presentation } from "../../types/types.ts";
import SlideBar from "../SlideBar/SlideBar.tsx";
import Workspace from "../Workspace/Workspace.tsx";

type BodyEditorProps = {
  presentation: Presentation;
};

function Editor({ presentation }: BodyEditorProps) {
  return (
    <div className="editor">
      <SlideBar slides={presentation.slides} />
      <Workspace slide={presentation.currentSlide} />
    </div>
  );
}

export default Editor;
