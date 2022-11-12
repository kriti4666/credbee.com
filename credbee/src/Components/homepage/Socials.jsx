import { Box, Button } from "@chakra-ui/react";

export default function Socials({ item }) {
    return (
        <>
            <Button boxSize={"54px"} border="1px" p={"1.1rem"} borderRadius="none">
                {item}

            </Button>


        </>
    )
}