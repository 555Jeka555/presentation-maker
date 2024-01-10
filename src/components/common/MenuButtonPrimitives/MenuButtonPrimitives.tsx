import { useState } from "react";
import Button from "../Button/Button.tsx";
import MenuPrimitives from "../MenuPrimitives/MenuPrimitives.tsx";

function MenuButtonPrimitives() {
  const [switchOpenMenuPrimitives, setSwitchOpenMenuPrimitives] = useState(false);
  const openMenuPrimitives = () => {
    setSwitchOpenMenuPrimitives(!switchOpenMenuPrimitives);
  };

  return (
    <div>
      <Button icon={"category"} onClick={openMenuPrimitives} />
      {switchOpenMenuPrimitives && <MenuPrimitives />}
    </div>
  );
}

export default MenuButtonPrimitives;
