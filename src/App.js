import logo from "./logo.svg";
import "./App.css";
import ShowTime from "./components/ShowTime";
import { useEffect, useState } from "react";
import { ShowTimeData } from "./ShowTimeData";

function App() {
  const [subRegion, setSubRegion] = useState([]);
  const [data, setData] = useState([]);
  const [dropdownFlag, setDropdownFlag] = useState(false);

  const toggleDropDown = () => {
    setDropdownFlag(!dropdownFlag);
  };

  const addToSubRegion = (event) => {
    const temp = subRegion;
    if (temp.indexOf(event.target.value) === -1) temp.push(event.target.value);
    else temp.splice(temp.indexOf(event.target.value), 1);
    setSubRegion(temp);
    filter();
  };

  const filter = () => {
    const temp = ShowTimeData.filter((showTime) => {
      return (
        subRegion.length === 0 ||
        subRegion.indexOf(showTime.address.subRegion) !== -1
      );
    });
    setData(temp);
  };

  useEffect(() => {
    setData(ShowTimeData);
  }, []);

  return (
    <div className="App">
      <h2>Book My Show</h2>
      {/* <label>Select sub-region: </label> */}
      {/* <input
        type="text"
        placeholder="Sub region"
        value={subRegion}
        onChange={(e) => setSubRegion(e.target.value)}
      ></input> */}
      {/* <select name="subRegion" onChange={(e) => setSubRegion(e.target.value)}>
        <option value="Mumbai Western">Mumbai Western</option>
        <option value="Mumbai Central">Mumbai Central</option>
      </select> */}
      <div class="dropdown">
        <button
          class="btn dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <b>Filter by sub-region</b>
          <span class="caret"></span>
        </button>
        <ul className="dropdown-menu dropdown-end p-3" id="tags-dropdown">
          <li>
            <input
              type="checkbox"
              value="Mumbai Central"
              onClick={addToSubRegion}
            />{" "}
            Mumbai Central
          </li>
          <li>
            <input
              type="checkbox"
              value="Mumbai Western"
              onClick={addToSubRegion}
            />{" "}
            Mumbai Western
          </li>
        </ul>
      </div>

      <ShowTime showTimeData={data} />
    </div>
  );
}

export default App;
