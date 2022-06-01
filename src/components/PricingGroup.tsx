import { ReactNode } from 'react';
import {
    Box,
    Stack,
    HStack,
    Heading,
    Text,
    VStack,
    useColorModeValue,
    List,
    ListItem,
    ListIcon,
    Button,
} from '@chakra-ui/react';
import { FaCheckCircle } from 'react-icons/fa';

function PriceWrapper({ children }: { children: ReactNode }) {
    return (
        <Box
            mb={4}
            shadow="base"
            borderWidth="1px"
            alignSelf={{ base: 'center', lg: 'flex-start' }}
            borderColor={useColorModeValue('gray.200', 'gray.500')}
            borderRadius={'xl'}>
            {children}
        </Box>
    );
}

export default function PricingGroup() {
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Group Training Packages
                </Heading>
            </VStack>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                py={10}>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            4 Sessions
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                100
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                @30 mins per session
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                once a week
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                $25 per session
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="pink" variant="outline">
                                Select this package
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>

                <PriceWrapper>
                    <Box position="relative">
                        <Box
                            position="absolute"
                            top="-16px"
                            left="50%"
                            style={{ transform: 'translate(-50%)' }}>
                        </Box>
                        <Box py={4} px={12}>
                            <Text fontWeight="500" fontSize="2xl">
                                4 Sessions
                            </Text>
                            <HStack justifyContent="center">
                                <Text fontSize="3xl" fontWeight="600">
                                    $
                                </Text>
                                <Text fontSize="5xl" fontWeight="900">
                                    140
                                </Text>
                                <Text fontSize="3xl" color="gray.500">
                                    /month
                                </Text>
                            </HStack>
                        </Box>
                        <VStack
                            bg={useColorModeValue('gray.50', 'gray.700')}
                            py={4}
                            borderBottomRadius={'xl'}>
                            <List spacing={3} textAlign="start" px={12}>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    @60 mins per session
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    once a week
                                </ListItem>
                                <ListItem>
                                    <ListIcon as={FaCheckCircle} color="green.500" />
                                    $35 per session
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="pink" variant="outline">
                                    Select this package
                                </Button>
                            </Box>
                        </VStack>
                    </Box>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            8 Sessions
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                200
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                @30 mins per session
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                twice a week
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                $25 per session
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="pink" variant="outline">
                                Select this package
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>
                <PriceWrapper>
                    <Box py={4} px={12}>
                        <Text fontWeight="500" fontSize="2xl">
                            8 Sessions
                        </Text>
                        <HStack justifyContent="center">
                            <Text fontSize="3xl" fontWeight="600">
                                $
                            </Text>
                            <Text fontSize="5xl" fontWeight="900">
                                280
                            </Text>
                            <Text fontSize="3xl" color="gray.500">
                                /month
                            </Text>
                        </HStack>
                    </Box>
                    <VStack
                        bg={useColorModeValue('gray.50', 'gray.700')}
                        py={4}
                        borderBottomRadius={'xl'}>
                        <List spacing={3} textAlign="start" px={12}>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                @60 mins per session
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                twice a week
                            </ListItem>
                            <ListItem>
                                <ListIcon as={FaCheckCircle} color="green.500" />
                                $35 per session
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="pink" variant="outline">
                                Select this package
                            </Button>
                        </Box>
                    </VStack>
                </PriceWrapper>
            </Stack>
        </Box>
    );
}