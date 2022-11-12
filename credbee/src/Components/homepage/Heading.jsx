import { Box, Heading } from "@chakra-ui/react";

export default function Head({ heading }) {
    return (
        <>
            <Box>
                <Heading textAlign="left" fontSize={"18px"} fontWeight="600" color="blue">{heading}</Heading>

            </Box>
        </>
    );
}