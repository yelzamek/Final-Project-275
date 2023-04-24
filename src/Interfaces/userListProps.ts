import { User } from "./UserObject";
export interface userListProps {
    userList: User[];
    setUserList: (newUserList: User[]) => void;
}
