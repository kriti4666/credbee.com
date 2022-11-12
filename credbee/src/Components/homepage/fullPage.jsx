import { ChakraProvider } from "@chakra-ui/react";
import { Body } from "./body";
import { Comp } from "./chakraComp";
import { Navbar } from "./Navbar";
import Product from "./product";

export default function FullPage() {
    return ( 
        <ChakraProvider>
            {/* <Product/> */}
            <Navbar />
            <Body />
            <Comp/>
        </ChakraProvider>
    )
}