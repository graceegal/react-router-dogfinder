import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

/** Info on individual dog (includes, name, age, photo and facts).
 *
 * Props: dogs [ {name: , age: , src: , facts: [fact1, fact2, ...]}, ...  ]
 * State: none
 *
 * App -> DogDetails
*/
function DogDetails({ dogData, updateCurrDog }) {
    // const { name } = useParams();

    if(dogData === null) {
      const { name } = useParams();
      updateCurrDog(name);
    }

    // const dogData = dogs.filter(d => d.name === name)[0];

    const factObjs = dogData.facts.map(fact => ({
        fact,
        key: uuid()
    }));



    return (
        <div>
            <h2>{dogData.name}</h2>
            <h4>Age: {dogData.age}</h4>
            <img src={`../public/${dogData.src}.jpg`} />
            <ul>
                {factObjs.map(fact => <li key={fact.key}>{fact.fact}</li>)}
            </ul>
        </div>
    );
}

export default DogDetails;