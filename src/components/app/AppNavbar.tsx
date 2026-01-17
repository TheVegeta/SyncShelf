import { Box, Container, Flex, Text } from "@chakra-ui/react";
import { TbRocket } from "react-icons/tb";
import LoginWithGoogle from "./LoginWithGoogle";

const AppNavbar = () => {
  return (
    <>
      <Container my="6">
        <Box as={Flex} justifyContent="space-between">
          <Box as={Flex} gap="2" alignItems="center">
            <TbRocket size={32} />
            <Text fontSize="2xl">SyncShelf</Text>
          </Box>

          <Box>
            <LoginWithGoogle />
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default AppNavbar;
