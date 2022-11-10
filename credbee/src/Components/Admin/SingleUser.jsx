import {  Button, Container, Grid, GridItem, HStack, SimpleGrid, Stack } from "@chakra-ui/react"

export const SingleUser = (props)=>{
    const {data} = props
    return (
      <Container maxW="100%">
        <Grid
          textAlign="start"
          p={5}
          w="100%"
          templateRows={{md: "repeat(2, 1fr)", base: "repeat(5, 1fr)"}}
          templateColumns={{md: "repeat(4, 1fr)", base: "repeat(2, 1fr)"}}
          border="1px solid"
          bg="white"
        >
          <GridItem colSpan={{md:1,base:2}} rowSpan={1}>
            <p>
              Name : {data.first_name} {data.last_name}
            </p>
          </GridItem>
          <GridItem colSpan={{md:3,base:2}} rowSpan={1}>
            <p>Email : {data.email}</p>
          </GridItem>
          <GridItem colSpan={{md:1,base:2}} rowSpan={1}>
            <p>Address : {data.address}</p>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <p>Gender : {data.gender}</p>
          </GridItem>
          <GridItem colSpan={1} rowSpan={1}>
            <p>Plan : {data.plans}</p>
          </GridItem>
          <GridItem colSpan={{md:1,base:2}} rowSpan={1}>
            <Stack direction={{md:"row",base:"column"}} >
              <Button color="red">Delete</Button>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    );
}
// export default SingleUser