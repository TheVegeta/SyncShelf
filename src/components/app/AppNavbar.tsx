import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { TbRocket } from "react-icons/tb";

const AppNavbar = () => {
  return (
    <>
      <Container my="4">
        <Box>
          <Box as={Flex} gap="2" alignItems="center">
            <TbRocket size={32} />
            <Text fontSize="2xl">SyncShelf</Text>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AppNavbar;
