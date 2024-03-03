import Profile from "./Profile";
import UserInfo from "./UserInfo";

const userInfo = {
  name: "Faleehah",
  email: "faleehah@gmail.com",
  fatherName: "Mia Hossain",
  motherName: "Romana Akter",
};

export default function PassingJsx() {
  return (
    <div>
      <Profile />
      <UserInfo userInfo={userInfo} />
    </div>
  );
}
