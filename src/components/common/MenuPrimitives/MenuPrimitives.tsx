import { useRef } from "react";
import Button from "../Button/Button.tsx";
import { useAppActions } from "../../../store/hooks.ts";
import classes from "./MenuPrimitives.module.css";

function MenuPrimitives() {
  const fileInput = useRef<HTMLInputElement>(null);
  const { createPrimitiveAction } = useAppActions();

  const handleOnClickPrimitives = (type: "triangle" | "ellipse" | "rectangle") => {
    createPrimitiveAction(type);
  };

  const handleOnClickImage = () => {
    if (fileInput.current) {
      fileInput.current.click();
    }
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;
        createPrimitiveAction("image", imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={classes.body}>
      <Button
        icon={"rectangle"}
        onClick={() => {
          handleOnClickPrimitives("rectangle");
        }}
      />
      <Button
        icon={"circle"}
        onClick={() => {
          handleOnClickPrimitives("ellipse");
        }}
      />
      <Button
        icon={"change_history"}
        onClick={() => {
          handleOnClickPrimitives("triangle");
        }}
      />
      <Button
        icon={"add_photo_alternate"}
        onClick={() => {
          handleOnClickImage();
        }}
        onChange={event => {
          handleFileChange(event);
        }}
        fileInput={fileInput}
      />
    </div>
  );
}

export default MenuPrimitives;
