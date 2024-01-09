import { Slide } from "../types/types.ts";
import html2PDF from "jspdf-html2canvas";

export const exportPdf = (presentationName: string, slides: Slide[]) => {
  const divs: HTMLElement[] = [];
  for (const slide of slides) {
    const div = document.getElementById(slide.id);
    if (div !== null) {
      divs.push(div);
    }
  }

  html2PDF(divs, {
    jsPDF: {
      unit: "pt",
      format: [1860, 1081],
      orientation: "l",
    },
    html2canvas: {
      scale: 10,
      width: 238.5,
      height: 138.5,
    },
    imageType: "image/jpeg",
    output: `${presentationName}.pdf`,
  });
};
