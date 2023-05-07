//import React from "react";
//import { useDrag } from "react-dnd";
//import { MEAL_LIST } from "../Interfaces/MealObject";
//import { DndProvider } from "react-dnd";
//import { HTML5Backend } from "react-dnd-html5-backend";
import React from "react";
import {
    Image,
    Text,
    Card,
    Heading,
    CardBody,
    Stack,
    Box
} from "@chakra-ui/react";
//import RatingFeature from "./RatingFeature";
import { useDrag } from "react-dnd";
//import { GetCurrentUser } from "./SelectRole";
//import { userProps } from "../interfaces/User";

/*function countOrders(list: userProps[], foodName: string): number {
    return list.reduce((count, user) => {
        return (
            count + user.order.filter((food) => food.name === foodName).length
        );
    }, 0);
}*/

export function MealItem({
    name,
    image,
    calories,
    fats,
    sugars,
    protein
}: {
    name: string;
    image: string;
    calories: number;
    fats: number;
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
    /*const [currentUser, setCurrentUser] = useState<userProps>(GetCurrentUser());
    const customers: string | null = sessionStorage.getItem("customers");
    const storageCustomers: userProps[] = customers
        ? JSON.parse(customers)
        : [];
    useEffect(() => {
        const handleStorage = () => {
            //console.log("handleStorage called");
            setCurrentUser(GetCurrentUser());
        };
        // Event listeners to run handleStorage() if "checkout" key is updated
        window.addEventListener("checkoutUpdated", handleStorage);
        return () =>
            window.removeEventListener("checkoutUpdated", handleStorage);
    }, []);*/

    return (
        <Card
            ref={drag}
            key={name}
            size="sm"
            w="550px"
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="elevated"
            border={isDragging ? "3px solid tomato" : "0px"}
        >
            <Box display="flex" flexDirection="column" alignItems="center">
                <Image
                    src={image}
                    alt={name}
                    objectFit="cover"
                    maxW={{ base: "100%", sm: "200px" }}
                    borderRadius="full"
                    boxSize="100px"
                    mx={5}
                    my={5}
                />
                <Text
                    className="desc"
                    fontFamily="DM Serif"
                    fontSize="2xl"
                    mt={2}
                    fontWeight="medium"
                ></Text>
            </Box>
            <Stack>
                <CardBody>
                    <div className="foodTitle">
                        <Heading
                            fontFamily="Ananda Black"
                            display="inline-block"
                            marginRight="6"
                        >
                            {name}
                        </Heading>
                    </div>
                    <div className="meal_details">
                        <Text fontWeight="semibold" py="2">
                            {calories}
                        </Text>
                        <Text fontWeight="semibold" py="2">
                            {fats}
                        </Text>
                        <Text fontWeight="semibold" py="2">
                            {sugars}
                        </Text>
                        <Text fontWeight="semibold" py="2">
                            {protein}
                        </Text>
                    </div>
                </CardBody>
            </Stack>
        </Card>
    );
}

/*
function Board() {
    return <DndProvider backend={HTML5Backend}>...</DndProvider>;
}*/

/*export const MealItem = {
    MEAL: MEAL_LIST[0]
};*/

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
