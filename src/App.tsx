import { useContext } from "react";
import { Provider } from "react-redux";
import Editor from "./components/Editor/Editor.tsx";
import Header from "./components/Header/Header.tsx";
import { PresentationContext } from "./contexts/presentation.tsx";
import classes from "./App.module.css";
import store from "./store/store.ts";

function App() {
  const { presentation } = useContext(PresentationContext);

  return (
    <Provider store={store}>
      <div className={classes.app}>
        <Header presentationName={presentation.name} />
        <Editor />
      </div>
    </Provider>
  );
}

export default App;
