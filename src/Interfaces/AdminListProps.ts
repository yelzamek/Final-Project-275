import { Meal } from "./MealObject";
export interface AdminListProps {
    adminList: Meal[];
    setAdminList: (newAdminList: Meal[]) => void;
}
