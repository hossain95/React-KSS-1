import { getImageUrl } from "../../../utils.js";
import { people } from "./data.js";

export function List() {
    const chemists = people;
//   const chemists = people.filter((person) => person.profession === "chemist");

  return (
    <ul>
      {chemists.map((person) => (
        <li key={person.id}>
          <img src={getImageUrl(person)} alt={person.name} />
          <p>
            <b>{person.name}:</b>
            {" " + person.profession + " "}
            known for {person.accomplishment}
          </p>
        </li>
      ))}
    </ul>
  );
}

export default function FilteringArraysOfIItems() {
  return (
    <div>
      <h1>Filtering arrays of items</h1>
      <hr />
      <List />
    </div>
  );
}
