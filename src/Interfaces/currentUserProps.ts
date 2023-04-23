import { User } from "./UserObject";
import { userListProps } from "./userListProps";
export interface currentUserProps extends userListProps {
    currentUser: User;
    setCurrentUser: (newCurrentUser: User) => void;
}
