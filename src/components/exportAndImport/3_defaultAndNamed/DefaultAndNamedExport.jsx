import Profile, { Address, Contact } from "./Profile";

export default function DefaultAndNamedExport() {
  return (
    <div>
      <h1>User Profile</h1>
      <Profile />
      <Contact />
      <Address />
    </div>
  );
}
