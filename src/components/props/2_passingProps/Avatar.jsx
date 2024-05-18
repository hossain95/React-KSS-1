import { getImageUrl } from "../../../utils";

{
  /*
1. <Avatar/> send all the properties inside an object.
2. We can read the object with any name like props
*/
}
export function Avatar({ person, size = 150 }) {
  // const {person, size} = props; // destructuring
  return (
    <img
      className="avatar"
      src={getImageUrl(person)}
      alt={person.name}
      width={size}
      height={size}
    />
  );
}
