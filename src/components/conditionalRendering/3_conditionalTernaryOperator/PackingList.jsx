function Item({ name, isPacked }) {
  return <li className="item">{isPacked ? name + " ✔" : name} </li>;
}

export default function PackingList() {
  return (
    <section>
      <h3>Sally Ride Packing List</h3>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
