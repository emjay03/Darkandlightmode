import { useEffect, useState } from "react";
import "./App.css";

import { MdDarkMode } from "react-icons/md";
import { HiSun } from "react-icons/hi";
function App() {
  const [darkmode, setdarkmode] = useState(false);

  useEffect(() => {
    if (darkmode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
  }, [darkmode]);
  return (
    <div className="Container">
      <label className="switch">
        <input
          type="checkbox"
          onChange={() => setdarkmode(!darkmode)}
          checked={darkmode}
        />
        <span className="slider round"></span>
        <MdDarkMode
          className={`fas fa-moon ${darkmode ? "active" : ""}`}
          size={25}
        />
        <HiSun className={`fas fa-sun ${darkmode ? "" : "active"}`} size={25} />
      </label>
    </div>
  );
}

export default App;
