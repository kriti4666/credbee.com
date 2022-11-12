import { Box, Text } from "@chakra-ui/react";

export default function FText({ text }) {
    return (

        <>
            <Box>
                <Text textAlign="left" fontSize={"15.5px"} mt="12px">{text}</Text>
            </Box>

        </>
    )
}