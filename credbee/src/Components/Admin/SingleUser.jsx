import {Button, Container, Grid, GridItem, Stack, Text} from "@chakra-ui/react";
import axios from "axios";

export const SingleUser = (props) => {
  const {data,handleDelete} = props;

  // const deleteData = async (id) => {
  //   const res = await axios.delete("/admin/:id", {_id: id});
  //   console.log(res);
  //   return res
  // };

  // const handleDelete =  async(id) => {
  // //    const res = await deleteData(id);
  // //  console.log(res)

  //  axios.delete("/admin",{_id:id}).then(res=>console.log(res))
  // };
  return (
    <Container maxW="100%">
      <Grid
        textAlign="start"
        p={5}
        w="100%"
        templateRows={{md: "repeat(2, 1fr)", base: "repeat(5, 1fr)"}}
        templateColumns={{md: "repeat(2, 1fr)", base: "repeat(2, 1fr)"}}
        border="1px solid"
        bg="white"
      >
        <GridItem colSpan={{md: 2, base: 2}} rowSpan={1}>
          <Text fontSize={{md: "2xl", base: "25px"}}>Name : {data.name}</Text>
        </GridItem>
        <GridItem colSpan={{md: 2, base: 2}} rowSpan={1}>
          <Text fontSize={{md: "2xl", base: "25px"}}>Email : {data.email}</Text>
        </GridItem>
        <GridItem colSpan={{md: 2, base: 2}} rowSpan={1}>
          <Text fontSize={{md: "2xl", base: "25px"}}>
            Company : {data.website}
          </Text>
        </GridItem>
        <GridItem colSpan={1} rowSpan={1}>
          <Text fontSize={{md: "2xl", base: "25px"}}>Plan : {data.plan}</Text>
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="end"
          colSpan={{md: 1, base: 1}}
          rowSpan={1}
        >
          <Stack direction={{md: "row", base: "column"}}>
            <Button color="red" onClick={() => handleDelete(data._id)}>
              Delete
            </Button>
          </Stack>
        </GridItem>
      </Grid>
    </Container>
  );
};
// export default SingleUser
