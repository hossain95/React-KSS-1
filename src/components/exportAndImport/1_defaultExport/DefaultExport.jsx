import UserInfo from "./UserInfo";
import UserProfile from "./UserInfo";

export default function DefaultExport() {
  return (
    <div>
      <h1>Default Export</h1>
      <hr />
      <UserInfo />
      {/* import component with any name */}
      <UserProfile />
    </div>
  );
}
