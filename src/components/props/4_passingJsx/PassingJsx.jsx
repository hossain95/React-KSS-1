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
      <h1>Passing JSX</h1>
      <hr />
      <Profile />
      <UserInfo userInfo={userInfo} />
    </div>
  );
}
