import { User } from "./UserObject";
import { UserListProps } from "./userListProps";
export interface CurrentUserProps extends UserListProps {
    currentUser: User;
    setCurrentUser: (newCurrentUser: User) => void;
}
