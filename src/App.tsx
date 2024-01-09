import { useContext, useState } from "react";
import { Provider } from "react-redux";
import Editor from "./components/Editor/Editor.tsx";
import Header from "./components/Header/Header.tsx";
import { PresentationContext } from "./contexts/presentation.tsx";
import classes from "./App.module.css";
import store from "./store/store.ts";
import SlideShow from "./components/SlideShow/SlideShow.tsx";

function App() {
  const { presentation } = useContext(PresentationContext);
  const [isSlideShow, setIsSlideShow] = useState(presentation.isSlideShow);

  return (
    <Provider store={store}>
      {isSlideShow ? (
        <SlideShow setIsSlideShow={setIsSlideShow} />
      ) : (
        <div className={classes.app}>
          <Header presentationName={presentation.name} />
          <Editor setIsSlideShow={setIsSlideShow} />
        </div>
      )}
    </Provider>
  );
}

export default App;
