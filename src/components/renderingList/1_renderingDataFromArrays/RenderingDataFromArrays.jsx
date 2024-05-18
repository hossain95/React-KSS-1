function List() {
  return (
    <ul>
      <li>Creola Katherine Johnson: mathematician</li>
      <li>Mario José Molina-Pasquel Henríquez: chemist</li>
      <li>Mohammad Abdus Salam: physicist</li>
      <li>Percy Lavon Julian: chemist</li>
      <li>Subrahmanyan Chandrasekhar: astrophysicist</li>
    </ul>
  );
}

// function List({ peopleList }) {
//   return (
//     <ul>
//       {peopleList.map((peope, index) => (
//         <li key={index}>{peope}</li>
//       ))}
//     </ul>
//   );
// }

const people = [
  "Creola Katherine Johnson: mathematician",
  "Mario José Molina-Pasquel Henríquez: chemist",
  "Mohammad Abdus Salam: physicist",
  "Percy Lavon Julian: chemist",
  "Subrahmanyan Chandrasekhar: astrophysicist",
];

export default function RenderingDataFromArrays() {
  return (
    <div>
      <h1>Rendering data from arrays</h1>
      <List />
      {/* <List peopleList={people} /> */}
    </div>
  );
}
