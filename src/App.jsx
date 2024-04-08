import { BrowserRouter, Route, Routes } from "react-router-dom";
import DogList from "./DogList"
import DogDetails from "./DogDetails"
import NavBar from "./NavBar"
import './App.css';
import { getDogData } from "./utils";


/** Component for entire page.
 *
 * Props: none
 * State: none
 *
*/

function App() {
  return (
    <div className="App">
      <BrowserRouter >
        <NavBar dogs={getDogData}/>
        <Routes>
          <Route path="/dogs" element={<DogList />} />
          <Route path="/dogs/:name" element={<DogDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
