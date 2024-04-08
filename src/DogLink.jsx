import { getDogData } from "./utils";
import { Link } from "react-router-dom";

/** Individual dog's info - name & photo.
 *
 * Props: dog {name: , age: , src: , facts: [fact1, fact2, ...]}
 * State: none
 *
 * DogList -> DogLink
*/
function DogLink({ dog, updateCurrDog }) {
    return (
        <div>
            <img src={`/${dog.src}.jpg`} className="DogLink-img" alt={`Photo of ${dog.name}`} />
            <Link to={`/dogs/${dog.name}`} className="DogLink-link" onClick={() => updateCurrDog(dog.name)}>{dog.name}</Link>
        </div>
    );
}

export default DogLink;