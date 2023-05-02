//import React from "react";
//import { useDrag } from "react-dnd";
import { MEAL_LIST } from "../Interfaces/MealObject";
//import { DndProvider } from "react-dnd";
//import { HTML5Backend } from "react-dnd-html5-backend";

/*
function Board() {
    return <DndProvider backend={HTML5Backend}>...</DndProvider>;
}*/

export const MealItem = {
    MEAL: MEAL_LIST[0]
};

/*
export function thing() {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ING_LIST[0],
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <div
          ref={drag}
          style={{
            opacity: isDragging ? 0.5 : 1,
            fontSize: 25,
            fontWeight: 'bold',
            cursor: 'move',
          }}
        >
          ♘
        </div>,
      )
}
*/

/*
export function MealItem(): JSX.Element {
    return <div>{ING_LIST[0]}</div>;
}
*/

/*
export function Box() {
    const [{ isDragging }, drag, dragPreview] = useDrag(() => ({
        type: "BOX",
        collect: (monitor) => ({
            isDragging: monitor.isDragging()
        })
    }));
    return (
        <div ref={dragPreview} style={{ opacity: isDragging ? 0.5 : 1 }}>
            <div role="Handle" ref={drag} />
        </div>
    );
}
*/

/*
export default function MealItem({
    name,
    image,
    calories,
    sugars,
    protein
}: {
    name: string;
    image: string;
    calories: number;
    sugars: number;
    protein: number;
}): JSX.Element {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "mealItem",
        item: { name: name },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    return <div></div>;
}
*/
