import Editor from "./components/Editor/Editor.tsx";
import Header from "./components/Header/Header.tsx";
import classes from "./App.module.css";

function App() {
  return (
    <div className={classes.app}>
      <Header />
      <Editor />
    </div>
  );
}

export default App;
