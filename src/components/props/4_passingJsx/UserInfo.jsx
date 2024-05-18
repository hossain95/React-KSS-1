import Card from "./Card";

export default function UserInfo({ userInfo }) {
  const { name, email, fatherName, motherName } = userInfo;
  return (
    <Card>
      <div className="user-info">
        <ul>
          <li>Name: {name}</li>
          <li>Email: {email}</li>
          <li>Father&apos;s Name: {fatherName}</li>
          <li>Mother&apos;s Name: {motherName}</li>
        </ul>
      </div>
    </Card>
  );
}
