import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { Meal } from "../Interfaces/MealObject";
//import { HTML5Backend } from "react-dnd-html5-backend";

export const ItemTypes = {
    MEAL: "meal"
};

export interface Colors {
    black: string;
    children: React.ReactNode;
}
export function MealDraggable(object: Meal): JSX.Element {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.MEAL,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }));
    return (
        <div
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
                fontSize: 25,
                fontWeight: "bold",
                cursor: "move"
            }}
        >
            {object.name}
        </div>
    );
}

export function Square({ black, children }: Colors) {
    const fill = black ? "black" : "white";
    const stroke = black ? "white" : "black";
    return (
        <div
            style={{
                backgroundColor: fill,
                color: stroke,
                width: "100%",
                height: "100%"
            }}
        >
            {children}
        </div>
    );
}
export function DropBox(): JSX.Element {
    const [visible, setVisible] = useState<boolean>(true);
    function updateVisible() {
        setVisible(!visible);
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.MEAL,
        drop: () => updateVisible(),
        collect: (monitor) => ({
            isOver: !!monitor.isOver()
        })
    });
    return (
        <div>
            <div
                ref={drop}
                data-testid="colored-box"
                style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: "green",
                    display: visible ? "inline-block" : "none",
                    verticalAlign: "bottom",
                    marginLeft: "5px"
                }}
            ></div>
        </div>
    );
}
