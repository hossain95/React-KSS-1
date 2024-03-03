import UserInfo from "./UserInfo";
import UserProfile from "./UserInfo";

export default function DefaultExport() {
  return (
    <div>
      <UserInfo />
      {/* import component with any name */}
      <UserProfile />
    </div>
  );
}
