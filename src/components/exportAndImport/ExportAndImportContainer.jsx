import Profile from "./Profile";
import UserProfile from "./Profile";
import { Address, Contact } from "./ProfileContainer";

const ExportAndImportContainer = () => {
  return (
    <div>
      {/* default export */}
      <Profile />
      <UserProfile />

      {/* named export */}
      <Contact />
      <Address />
    </div>
  );
};

export default ExportAndImportContainer;
