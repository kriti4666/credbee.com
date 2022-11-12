import {
  Button,
  Center,
  Container,
  Flex,
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
import {Box} from "@mui/system";
import {useEffect} from "react";
import {useState} from "react";
import { LoadSkeleton } from "./LoadSkeleton";
import {SingleUser} from "./SingleUser";
import {usersData} from "./user";

const Admin = () => {
  const [loading,setLoading] = useState(false)
  const [allData, setAllData] = useState([]);
  const [state, setState] = useState([]);
  const [inputTag, setInputTag] = useState("");

  const handleSearch = () => {
    const serched = allData.filter((ele) => ele.first_name.includes(inputTag));
    setState(serched);
  };

  const handleFilter = ({target}) => {
    const filtered = target.value==="All"?[...allData]:allData.filter((ele) => ele.gender === target.value);
    setState(filtered);
  };

  const handleSort = ({target}) => {
    const sorted = [...state];
    if (target.value === "ace") {
      sorted.sort((a, b) => {
        if (a.first_name > b.first_name) {
          return 1;
        } else if (a.first_name < b.first_name) {
          return -1;
        }
        return 0;
      });
    } else if (target.value === "dec") {
      sorted.sort((a, b) => {
        if (a.first_name > b.first_name) {
          return -1;
        } else if (a.first_name < b.first_name) {
          return 1;
        }
        return 0;
      });
    }
    setState(sorted);
  };

  useEffect(() => {
    
    setTimeout(()=>{
      setAllData(usersData);
      setState(usersData);
      setLoading(true)
    },2000)
  }, []);

  return (
    <Container maxW="100vw" py={{md: "100px", base: "0px"}}>
      <Center>
        <Grid
          templateColumns={{md: "repeat(3, 1fr)", base: "repeat(1, 1fr)"}}
          w={{lg: "60%", md: "80%", base: "100%"}}
          h="100%"
        >
          <GridItem colSpan={1}>
            <SimpleGrid
              h="full"
              boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
              p={2}
              pt={5}
              columns={1}
            >
              <Box>
                <a href="/">
                  <Flex
                    alignItems="center"
                    justifyContent="center"
                    borderRadius={10}
                    color="white"
                    bg="#44337A"
                    h="81"
                  >
                    <Text fontSize={25}>CredBee</Text>
                  </Flex>
                </a>
                <Grid
                  mt={2}
                  templateColumns={{
                    md: "repeat(1, 1fr)",
                    base: "repeat(2, 1fr)",
                  }}
                  gap={1}
                >
                  <Button color="#44337A">Users</Button>
                  <Button color="#44337A">Subcriptions</Button>
                  <Button color="#44337A">Invice & Credit Notes</Button>
                  <Button color="#44337A">Product Catalog</Button>
                  <Button color="#44337A">Logs</Button>
                  <Button color="#44337A">RevenueStory</Button>
                  <Button color="#44337A">Classic Reports</Button>
                  <Button color="#44337A">Apps</Button>
                </Grid>
              </Box>
            </SimpleGrid>
          </GridItem>
          <GridItem
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            pt={5}
            colSpan={2}
          >
            <VStack>
              <Stack
                direction={{md: "row", base: "column"}}
                w="100%"
                p={{md: 5, base: 0}}
                spacing={3}
              >
                <Select
                  color="white"
                  bg="#44337A"
                  onChange={handleSort}
                  variant="filled"
                  placeholder="Sort"
                >
                  <option style={{color: "black"}} value="ace">
                    A - Z
                  </option>
                  <option style={{color: "black"}} value="dec">
                    Z - A
                  </option>
                </Select>
                <Select
                  color="white"
                  bg="#44337A"
                  onChange={handleFilter}
                  variant="filled"
                  placeholder="Filter"
                >
                  <option style={{color: "black"}} value="All">
                    All
                  </option>
                  <option style={{color: "black"}} value="Male">
                    Male
                  </option>
                  <option style={{color: "black"}} value="Female">
                    Female
                  </option>
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
              <VStack
                pt={2}
                borderTop="1px solid black"
                w="100%"
                overflow="scroll"
                h="600px"
                bg="#E2E8F0"
              >
                {loading ? (
                  state.map((ele, i) => <SingleUser key={i} data={ele} />)
                ) : (
                  <LoadSkeleton />
                )}
              </VStack>
            </VStack>
          </GridItem>
        </Grid>
      </Center>
    </Container>
  );
};

export default Admin;
