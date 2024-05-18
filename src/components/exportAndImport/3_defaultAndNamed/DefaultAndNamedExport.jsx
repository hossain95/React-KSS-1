import Profile, { Address, Contact } from "./Profile";

export default function DefaultAndNamedExport() {
  return (
    <div>
      <h1>Dafault and Named Export</h1>
      <hr />
      <Profile />
      <Contact />
      <Address />
    </div>
  );
}
