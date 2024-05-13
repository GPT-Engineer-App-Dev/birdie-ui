import { Box, Flex, Text, VStack, Input, Button, IconButton } from "@chakra-ui/react";
import { FaTwitter, FaHome, FaHashtag, FaBell, FaEnvelope, FaUserAlt, FaEllipsisH } from "react-icons/fa";

const Index = () => {
  return (
    <Flex direction="column" h="100vh">
      <Flex bg="blue.500" p={3} color="white" align="center" justify="space-between">
        <IconButton icon={<FaTwitter />} fontSize="2xl" variant="unstyled" aria-label="Twitter logo" />
        <Flex gap={2}>
          <Button leftIcon={<FaHome />} variant="ghost">Home</Button>
          <Button leftIcon={<FaHashtag />} variant="ghost">Explore</Button>
          <Button leftIcon={<FaBell />} variant="ghost">Notifications</Button>
          <Button leftIcon={<FaEnvelope />} variant="ghost">Messages</Button>
          <Button leftIcon={<FaUserAlt />} variant="ghost">Profile</Button>
          <Button leftIcon={<FaEllipsisH />} variant="ghost">More</Button>
        </Flex>
      </Flex>
      <Flex flex={1} p={3}>
        <Flex direction="column" w="70%" borderRight="1px" borderColor="gray.200">
          <VStack spacing={4} align="stretch">
            <Box p={4} shadow="md" borderWidth="1px">
              <Text mb={2}>What's happening?</Text>
              <Input placeholder="Tweet your reply" />
              <Button mt={2} colorScheme="twitter">Tweet</Button>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text mb={2}>User Name</Text>
              <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
            <Box p={4} shadow="md" borderWidth="1px">
              <Text mb={2}>User Name</Text>
              <Text fontSize="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
            </Box>
          </VStack>
        </Flex>
        <Flex direction="column" w="30%" pl={3}>
          <Text mb={2} fontSize="lg" fontWeight="bold">Trending</Text>
          <VStack spacing={4} align="stretch">
            <Text>#TrendingTopic1</Text>
            <Text>#TrendingTopic2</Text>
            <Text>#TrendingTopic3</Text>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Index;