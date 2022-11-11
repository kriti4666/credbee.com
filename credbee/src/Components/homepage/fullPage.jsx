import { ChakraProvider } from "@chakra-ui/react";
import { Body } from "./body";
import { Comp } from "./chakraComp";
import { Navbar } from "./navbar";

export default function FullPage() {
    return ( 
        <ChakraProvider>
            <Navbar />
            <Body />
            <Comp/>
        </ChakraProvider>
    )
}