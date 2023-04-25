import update from "immutability-helper";
import type { FC } from "react";
import { useCallback, useState } from "react";
import React from "react";

import { MoveableObject } from "./MoveableItem";

const style = {
    width: 400
};

export interface Item {
    id: number;
    text: string;
}

export interface ContainerState {
    cards: Item[];
}

export const CenterList: FC = () => {
    {
        const [ingredients, setIngredients] = useState([
            {
                id: 1,
                text: "Write a cool JS library"
            },
            {
                id: 2,
                text: "Make it generic enough"
            },
            {
                id: 3,
                text: "Write README"
            },
            {
                id: 4,
                text: "Create some examples"
            },
            {
                id: 5,
                text: "Spam in Twitter and IRC to promote it (note that this element is taller than the others)"
            },
            {
                id: 6,
                text: "???"
            },
            {
                id: 7,
                text: "PROFIT"
            }
        ]);

        const moveIngredient = useCallback(
            (dragIndex: number, hoverIndex: number) => {
                setIngredients((prevIngredients: Item[]) =>
                    update(prevIngredients, {
                        $splice: [
                            [dragIndex, 1],
                            [hoverIndex, 0, prevIngredients[dragIndex] as Item]
                        ]
                    })
                );
            },
            []
        );

        const renderIngredient = useCallback(
            (ingredient: { id: number; text: string }, index: number) => {
                return (
                    <MoveableObject
                        key={ingredient.id}
                        index={index}
                        id={ingredient.id}
                        text={ingredient.text}
                        moveIngredient={moveIngredient}
                    />
                );
            },
            []
        );

        return (
            <>
                <div style={style}>
                    {ingredients.map((ingredient, i) =>
                        renderIngredient(ingredient, i)
                    )}
                </div>
            </>
        );
    }
};
