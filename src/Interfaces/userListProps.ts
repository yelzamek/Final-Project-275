import { User } from "../Components/UserObject";
export interface userListProps {
    userList: User[];
    setUserList: (newUserList: User[]) => void;
}
