import { Avatar } from "./Avatar";

//forword props with jsx spread syntax

export default function Profile({ size, person }) {
  return (
    <div>
      <Avatar size={size} person={person} />
      {/* <Avatar {...props} /> */}
    </div>
  );
}
