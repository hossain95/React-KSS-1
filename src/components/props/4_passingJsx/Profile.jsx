import { Avatar } from "../3_forwordingProps/Avatar";
import Card from "./Card";

export default function Profile() {
    return (
      <Card>
        <Avatar
          size={100}
          person={{ 
            name: 'Katsuko Saruhashi',
            imageId: 'YfeOqp2'
          }}
        />
      </Card>
    );
  }