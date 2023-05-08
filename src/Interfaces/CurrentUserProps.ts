import { User } from "./UserObject";
import { UserListProps } from "./UserListProps";
export interface CurrentUserProps extends UserListProps {
    currentUser: User;
    setCurrentUser: (newCurrentUser: User) => void;
}
