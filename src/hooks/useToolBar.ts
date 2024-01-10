import { Presentation } from "../types/types";

export const useToolBar = (
  presentation: Presentation,
  setPresentation: (newPresentation: Presentation) => void,
) => {
  const download = () => {
    const data = JSON.stringify(presentation, null, 2);
    const link = document.createElement("a");
    const file = new Blob([data], { type: "application/json" });
    link.href = URL.createObjectURL(file);
    link.download = presentation.name + ".json";
    link.click();
  };

  const upload = () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "application/json";
    input.addEventListener("change", (event) => {
      const selectedFile = (event.target as HTMLInputElement).files?.[0];

      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          const fileContent = JSON.parse(reader.result as string);
          setPresentation(fileContent);
        };
        reader.readAsText(selectedFile);
      }
    });

    input.click();
  };

  return { download, upload };
};
