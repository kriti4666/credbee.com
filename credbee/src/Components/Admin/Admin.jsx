import {
  Box,
  Button,
  Center,
  Container,
  Grid,
  GridItem,
  HStack,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {useEffect} from "react";
import {useState} from "react";
import {SingleUser} from "./SingleUser";
import {usersData} from "./user";

const Admin = () => {
    const [allData,setAllData] = useState([])
  const [state, setState] = useState([]);
  const [inputTag, setInputTag] = useState("");

  const handleSearch = ()=>{
    const serched = allData.filter((ele) =>
      ele.first_name.includes(inputTag)
    );
    setState(serched)
  }

  const handleFilter=({target})=>{
    console.log(target.value)
    const filtered = state.filter((ele)=>ele.gender===target.value)
    setState(filtered)
  }

  const handleSort =({target})=>{
      const sorted = [...state];
    if(target.value==="ace"){
        sorted.sort((a,b)=>{
            if(a.first_name>b.first_name){
                return 1
            }else if(a.first_name<b.first_name){
                return -1
            }
            return 0
        })
    }else if (target.value === "dec") {
      sorted.sort((a, b) => {
        if (a.first_name > b.first_name) {
          return -1;
        } else if (a.first_name < b.first_name) {
          return 1;
        }
        return 0;
      });
    }
    setState(sorted)
  }

  useEffect(() => {
    setAllData(usersData)
    setState(usersData);
  }, []);

  return (
    <Container maxW="100vw" py={{md: "100px",base:"0px"}}>
      <Center>
        <Grid
          templateColumns={{md: "repeat(3, 1fr)", base: "repeat(1, 1fr)"}}
          w={{md: "80%", base: "100%"}}
          h="100%"
          border="1px solid"
        >
          <GridItem bg="#A0AEC0" colSpan={1} border="1px solid">
            <SimpleGrid columns={1}>
              <Box h={50}>
                <Text fontSize={25}>CredBee</Text>
              </Box>
              <Grid
                templateColumns={{md: "repeat(1, 1fr)", base: "repeat(2, 1fr)"}}
                gap={1}
              >
                <Button>Users</Button>
                <Button>Subcriptions</Button>
                <Button>Invice & Credit Notes</Button>
                <Button>Product Catalog</Button>
                <Button>Logs</Button>
                <Button>RevenueStory</Button>
                <Button>Classic Reports</Button>
                <Button>Apps</Button>
              </Grid>
            </SimpleGrid>
          </GridItem>
          <GridItem colSpan={2}>
            <VStack>
              <Stack
                direction={{md: "row", base: "column"}}
                border="1px solid"
                bg="#A0AEC0"
                w="100%"
                p={{md: 5, base: 0}}
                spacing={3}
              >
                <Select
                  onChange={handleSort}
                  variant="filled"
                  placeholder="Sort"
                >
                  <option value="ace">A - Z</option>
                  <option value="dec">Z - A</option>
                </Select>
                <Select
                  onChange={handleFilter}
                  variant="filled"
                  placeholder="Filter"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </Select>
              </Stack>
              <HStack>
                <Input
                  onChange={({target}) => setInputTag(target.value)}
                  variant="filled"
                  placeholder="Enter Name"
                />
                <Button onClick={handleSearch}>Search</Button>
              </HStack>
              <VStack w="100%" overflow="scroll" h="600px">
                {state.map((ele, i) => (
                  <SingleUser key={i} data={ele} />
                ))}
              </VStack>
            </VStack>
          </GridItem>
        </Grid>
      </Center>
    </Container>
  );
};

export default Admin;
