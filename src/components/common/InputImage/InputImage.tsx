import { ChangeEvent } from "react";
import { useAppActions } from "../../../store/hooks.ts";
import classes from "./InputImage.module.css";

type InputImageProps = {
  icon: string;
};

function InputImage({ icon }: InputImageProps) {
  const { createChangeBackgroundPictureAction } = useAppActions();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageDataUrl = reader.result as string;

        createChangeBackgroundPictureAction(imageDataUrl);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <label className={classes.button} id="imageInput">
        <span className={"material-symbols-outlined"}>{icon}</span>
        <input className={classes.hidden} id="imageInput" type="file" accept="image/*" onChange={handleImageChange} />
      </label>
    </div>
  );
}

export default InputImage;
