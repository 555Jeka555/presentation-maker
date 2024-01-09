import Button from "../common/Button/Button.tsx";
import MenuButtonPrimitives from "../common/MenuButtonPrimitives/MenuButtonPrimitives.tsx";
import Select from "../common/Select/Select.tsx";
import { fontOptions } from "../../constants/ToolBar.ts";
import InputImage from "../common/InputImage/InputImage.tsx";
import { useAppActions } from "../../store/hooks.ts";
import InputColor from "../common/InputColor/InputColor.tsx";
import InputFontSize from "../common/InputFontSize/InputFontSize.tsx";
import classes from "./ToolBar.module.css";

function ToolBar() {
  const {
    createPrimitiveAction,
    createChangeBoldTextAction,
    createChangeItalicTextAction,
    createChangeUnderlineTextAction,
    createUndoAction,
    createRedoAction,
  } = useAppActions();

  const handleOnClickText = () => {
    createPrimitiveAction("text");
  };

  return (
    <div className={classes["tool-bar"]}>
      <Button
        icon={"undo"}
        onClick={() => {
          createUndoAction();
        }}
      />
      <Button
        icon={"redo"}
        onClick={() => {
          createRedoAction();
        }}
      />
      <MenuButtonPrimitives />
      <Button
        icon={"insert_text"}
        onClick={() => {
          handleOnClickText();
        }}
      />
      {/*<Button icon={"image"} />*/}
      <InputImage icon={"image"} />
      <InputColor icon={"palette"} />
      <Select options={fontOptions} className={classes["font-select"]} />
      <InputFontSize defaultValue={11} className={classes["size-shrift-input"]} />
      <Button
        onClick={() => {
          createChangeBoldTextAction();
        }}
        icon={"format_bold"}
      />
      <Button
        onClick={() => {
          createChangeItalicTextAction();
        }}
        icon={"format_italic"}
      />
      <Button
        onClick={() => {
          createChangeUnderlineTextAction();
        }}
        icon={"format_underlined"}
      />
    </div>
  );
}

export default ToolBar;
