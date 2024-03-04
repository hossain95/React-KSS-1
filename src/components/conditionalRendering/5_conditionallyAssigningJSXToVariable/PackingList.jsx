function Item({ name, isPacked }) {
  let content = name;
  if (isPacked) {
    content = name + " ✔";
  }
  return <li className="item">{content}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Ride Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}
