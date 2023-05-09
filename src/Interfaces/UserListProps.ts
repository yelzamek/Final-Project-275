import { User } from "./UserObject";
export interface UserListProps {
    userList: User[];
    setUserList: (newUserList: User[]) => void;
}
