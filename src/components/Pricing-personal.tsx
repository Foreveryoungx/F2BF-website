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

export default function PricingPersonal() {
    return (
        <Box py={12}>
            <VStack spacing={2} textAlign="center">
                <Heading as="h1" fontSize="4xl">
                    Personal Training Packages
                </Heading>
                <Text fontSize="lg" color={'gray.500'}>
                    <u>Trial Package</u> Includes 1-30min fitness assessment & 1-30min personal training session
                </Text>
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
                                120
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
                                $30 per session
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="red" variant="outline">
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
                                    160
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
                                    $40 per session
                                </ListItem>
                            </List>
                            <Box w="80%" pt={7}>
                                <Button w="full" colorScheme="red" variant="outline">
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
                                240
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
                                $30 per session
                            </ListItem>
                        </List>
                        <Box w="80%" pt={7}>
                            <Button w="full" colorScheme="red" variant="outline">
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
                            320
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
                            $40 per session
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
            {/*<Box w="100%" pt={7}>*/}
            {/*    <Button w="full" colorScheme="green" >*/}
            {/*        Group Package*/}
            {/*    </Button>*/}
            {/*</Box>*/}
        </Box>
    );
}