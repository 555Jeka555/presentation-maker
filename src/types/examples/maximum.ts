/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { v4 as uuidv4 } from "uuid";
import { Color, History, Image, Operation, Presentation, Primitive, Size, Slide, Text } from "../types.ts";


const color: Color = "#aaaaaa";

const size: Size = {
  height: 200,
  width: 400,
};

const text: Text = {
  data: {
    text: "Текст",
  },
  id: uuidv4(),
  position: {
    x: 0,
    y: 0,
  },
  rotation: 0,
  size: size,
  type: "text",
};

const image: Image = {
  data: {
    alt: "base",
    size: size,
    src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAIAAAB7GkOtAAANHElEQVR4nOzX+6/YdX3Hcc44lFZXYkRDxDnC5FJgcBAolwpKEYvcTAQJIKaH2ybKJSK3ID2CUNR2Mhkb6zY729k6KM7hoLUMgrPIRRovWwtygDFL6Z2LgO6cjq7d/opXYvJ6PP6A1+eH7zd55j340/Mu2inp7w6dFt3/whMTovvrdvxLdH/4uEuj+w89+Kno/j0zb4nu3/rkx6P7K8f+ILp/++xJ0f2xG3aP7j80sjq6f9t/7Ijuzx76WnT/uo8cEt3/+rwzo/u/F10H4HeWAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoNfjI9KXRB84bmxndv3v6suj+9EOOjO6//T2Lo/vz/ntbdH/O4jOj+/sdsW90f+jWw6L7r53wnej+teOvRvfvP3f/6P7aXTZG9xfNWhDd/9bSk6P7+54/GN13AQCUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQZHx++MPnDT3TdH9//iXd+N7v/yy1dE93+295HR/W8s2R7dv2T0wej+Xu97Mrq/YtrZ0f2nzzg4ur/9ll2j+99/fkp0f97I5uj+ta+8I7r/wh5D0f23X/WD6L4LAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoNXDJc5dEH9jnsZui+2PfeGd0/9kFV0X3H1j5tuj+ss3R+Z2O3bAtuv/8t4+N7k+dt0d0f/V/vSO6/+bEo6P747teGd3/0Btrovs7Jh0T3Z/x9OLo/gevvy+67wIAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoNrL9hTfSBb95xfHT/tC+ui+4v27RvdP/A7TOi+6M//WJ0//iT7o3u33rOQdH9zywdiO6fum52dP+K926P7o/c97Po/sytZ0f3H3768ej+1A+cG90fed/86L4LAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoNXD5M5OjD/zJxWdF949/5tXo/vTfroruXzJycHT/wi2nR/dXf/Tw6P6iR16O7n/7jy+I7i+46APR/a+89Lno/nF7XBnd32fzl6P7p8y5KLp/56Wbovubvrc5uu8CACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKDe7Y8qfRBw795FB0f+ne86P7F+55TnR/+ekTo/t7Pve16P49j2W/73Gffi26/73HL43uHzl2c3R/1S9mRPfn3vhidH/5W6dH9w977oPR/YfmrIzun7z6qOi+CwCglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKDU4svfy6ANP/9N4dH/CZw+L7j912R3R/UXv+Wp0f/iA0ej+o1+5ILp/w/7nR/ff9fOjo/s/33BFdP+axbtH9xdfe1R0/1sf+3F0/69f+ER0/0sTV0X3X5w6EN13AQCUEgCAUgIAUEoAAEoJAEApAQAoJQAApQQAoJQAAJQSAIBSAgBQSgAASgkAQCkBACglAAClBACglAAAlBIAgFICAFBKAABKCQBAKQEAKCUAAKUEAKCUAACUEgCAUgIAUEoAAEoJAEApAQAoJQAApQZOvnFd9IFFR62P7p/w+49H98/4/ivR/a2nTo7u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",
  },
  id: uuidv4(),
  position: {
    x: 0,
    y: 20,
  },
  rotation: 0,
  size: size,
  type: "image",
};

const triangle: Primitive = {
  data: {
    form: "triangle",
    size: size,
  },
  id: uuidv4(),
  position: {
    x: 0,
    y: 220,
  },
  rotation: 20,
  size: size,
  type: "primitive",
};

const ellipse: Primitive = {
  data: {
    form: "ellipse",
    size: size,
  },
  id: uuidv4(),
  position: {
    x: 0,
    y: 420,
  },
  rotation: 0,
  size: size,
  type: "primitive",
};

const rectangle: Primitive = {
  data: {
    form: "rectangle",
    size: size,
  },
  id: uuidv4(),
  position: {
    x: 430,
    y: 0,
  },
  rotation: 70,
  size: size,
  type: "primitive",
};

const slide: Slide = {
  background: color,
  id: uuidv4(),
  objects: [image, text, triangle, rectangle, ellipse],
  selectObjects: [text],
};

const slide2: Slide = {
  background: color,
  id: uuidv4(),
  objects: [image, text, triangle, rectangle, ellipse],
  selectObjects: [text],
};

const slide3: Slide = {
  background: color,
  id: uuidv4(),
  objects: [image, text, triangle, rectangle, ellipse],
  selectObjects: [text],
};

const slide4: Slide = {
  background: color,
  id: uuidv4(),
  objects: [image, text, triangle, rectangle, ellipse],
  selectObjects: [text],
};

const presentation: Presentation = {
  currentSlide: slide,
  name: "The first",
  selectSlides: [slide, slide3, slide4],
  slides: [slide, slide2, slide3, slide4],
};

const operation: Operation = {
  data: {},
  id: uuidv4(),
};

// @ts-ignore
const history: History = {
  operations: [operation],
  undidOperations: [],
};

export default presentation;
