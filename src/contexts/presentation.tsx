import { createContext, PropsWithChildren, useState } from "react";
import { Presentation } from "../types/types.ts";

type PresentationContextType = {
  presentation: Presentation;
  setPresentation: (newPresentation: Presentation) => void;
};

export const PresentationContext = createContext<PresentationContextType>({
  presentation: {
    currentSlide: null,
    name: "",
    selectSlides: [],
    slides: [],
  },
  setPresentation: () => {},
});

function PresentationProvider({ children }: PropsWithChildren) {
  const [presentation, setPresentation] = useState<Presentation>({
    currentSlide: null,
    name: "",
    selectSlides: [],
    slides: [],
  });

  const handleSetPresentation = (newPresentation: Presentation) => {
    setPresentation({ ...newPresentation });
  };

  return (
    <PresentationContext.Provider
      value={{
        presentation,
        setPresentation: handleSetPresentation,
      }}
      children={children}
    />
  );
}

export default PresentationProvider;
