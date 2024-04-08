import { getDogData } from "./utils";
import { Link } from "react-router-dom";
// import duke from "../public/duke.jpg";
// import perry from "../public/perry.jpg";
// import whiskey from "../public/whiskey.jpg";

function DogLink({dog}) {
  return (
    <div>
      <img src={`../public/${dog.src}.jpg`} className="DogLink-img" alt={`Photo of ${dog.name}`}/>
      <Link to={`/dogs/${dog.name}`} className="DogLink-link">{dog.name}</Link>
    </div>
  );
}

export default DogLink;