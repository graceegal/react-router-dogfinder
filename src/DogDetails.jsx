import { useParams } from "react-router-dom";
import { v4 as uuid } from "uuid";

function DogDetails({ dogs }) {
  const { name } = useParams();

  console.log("dogs", dogs);
  console.log("dogName", name);

  const dogData = dogs.filter(d => d.name === name)[0];
  console.log("dog", dogData);

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