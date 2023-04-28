import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { JsxElement } from "typescript";
//import { HTML5Backend } from "react-dnd-html5-backend";

export const ItemTypes = {
    KNIGHT: "knight"
};

export interface Colors {
    black: string;
    children: React.ReactNode;
}
export function Knight() {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.KNIGHT,
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
            ♘
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
    const [{ isOver }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
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
export function Board(): JSX.Element {
    return (
        <div>
            <Square black="black">
                <Knight></Knight>
            </Square>
        </div>
    );
}
