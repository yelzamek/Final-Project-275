import { ChakraProvider, List, ListItem } from "@chakra-ui/react";
import React from "react";

export function Sidebar() {
    return (
        <ChakraProvider>
            <List color="white" fontSize="1.2em" spacing={4}>
                <ListItem></ListItem>
                <ListItem></ListItem>
                <ListItem></ListItem>
            </List>
        </ChakraProvider>
    );
}
