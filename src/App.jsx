import { useState } from "react";
import Personal from "./Components/Personal";
import "./Styles/App.css";
import Education from "./Components/Education";
import "./Styles/Education.css";
import Experience from "./Components/Experience";

function App() {
  const [save, setSave] = useState(false);
  return (
    <>
      <div id="container">
        <Personal save={save}></Personal>
        <Education save={save}></Education>
        <Experience save={save}></Experience>
        <button
          className="save"
          onClick={() => {
            save == false ? setSave(true) : setSave(false);
          }}
        >
          {save == false ? "Save" : "Edit"}
        </button>
      </div>
    </>
  );
}

export default App;
