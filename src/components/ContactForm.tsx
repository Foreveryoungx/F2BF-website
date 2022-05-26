import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
} from '@chakra-ui/react';
import axios from 'axios';
import {useForm} from 'react-hook-form';
import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
} from 'react-icons/md';
import { BsInstagram, BsPerson, BsLinkedin } from 'react-icons/bs';
export default function ContactForm() {
        const {
            handleSubmit,
                register,
                formState:{ errors, isSubmitting},
        } = useForm()

     function onSubmit(values) {
         axios.post("https://f2bf-server.herokuapp.com/api/post", values).then((res) => {
             console.log(res)
         })
         return new Promise<void>((resolve) => {
             setTimeout(() => {

                     resolve()
                 },
                 3000)
         })
     }
    return (
        <Container bg="white" maxW="full" mt={0} centerContent overflow="hidden">
            <Flex>
                <Box
                    bg="#02054B"
                    color="white"
                    borderRadius="lg"
                    m={{ sm: 4, md: 16, lg: 10 }}
                    p={{ sm: 5, md: 5, lg: 16 }}>
                    <Box p={4}>
                        <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                            <WrapItem>
                                <Box>
                                    <Heading>Contact Me</Heading>
                                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                                        Fill out the form below for more info or Inquires
                                    </Text>
                                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                                        <VStack pl={0} spacing={3} alignItems="flex-start">
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdEmail color="#1970F1" size="20px" />}>
                                                mb3kz@hotmail.com
                                            </Button>
                                            <Button
                                                size="md"
                                                height="48px"
                                                width="200px"
                                                variant="ghost"
                                                color="#DCE2FF"
                                                _hover={{ border: '2px solid #1C6FEB' }}
                                                leftIcon={<MdLocationOn color="#1970F1" size="20px" />}>
                                                United States, MO
                                            </Button>
                                        </VStack>
                                    </Box>
                                    <HStack
                                        mt={{ lg: 10, md: 10 }}
                                        spacing={5}
                                        px={5}
                                        alignItems="flex-start">
                                        <IconButton
                                            aria-label="facebook"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<MdFacebook size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="linkedin"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsLinkedin size="28px" />}
                                        />
                                        <IconButton
                                            aria-label="instagram"
                                            variant="ghost"
                                            size="lg"
                                            isRound={true}
                                            _hover={{ bg: '#0D74FF' }}
                                            icon={<BsInstagram size="28px" />}
                                        />
                                    </HStack>
                                </Box>
                            </WrapItem>
                            <WrapItem>
                                <Box bg="white" borderRadius="lg">
                                    <Box m={8} color="#0B0E3F">
                                        <VStack spacing={5}>
                                            <form onSubmit={handleSubmit(onSubmit)}>
                                            <FormControl id="name" isInvalid={errors.name}>
                                                <FormLabel htmlFor={'name'}>Name:</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<BsPerson color="gray.800" />}
                                                    />
                                                    <Input id="name" placeholder='name' type="text" size="md" {...register('name', {
                                                        required: 'This is required',
                                                        minLength: {value: 4, message: 'minimum length is 4'},
                                                    })}/>
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="email" isInvalid={errors.email}>
                                                <FormLabel htmlFor={'email'}>E-mail:</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                    <InputLeftElement
                                                        pointerEvents="none"
                                                        children={<MdOutlineEmail color="gray.800" />}
                                                    />
                                                    <Input id="email" placeholder='e-mail' type="email" size="md" {...register('email', {
                                                        required: 'This is required',
                                                        minLength: { value: 4, message: 'should be a e-mail' },
                                                    })}/>
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="message" isInvalid={errors.message}>
                                                <FormLabel htmlFor={'message'}>Message:</FormLabel>
                                                <InputGroup borderColor="#E0E1E7">
                                                <Textarea id="message"
                                                    borderColor="gray.300"
                                                    _hover={{
                                                        borderRadius: 'gray.300',
                                                    }}
                                                    placeholder="message" {...register('message')}
                                                />
                                                </InputGroup>
                                            </FormControl>
                                            <FormControl id="name" float="right">
                                                <Button
                                                    isLoading={isSubmitting}
                                                    variant="solid"
                                                    bg="#0D74FF"
                                                    color="white"
                                                    _hover={{}}
                                                type='submit'>
                                                    Send Message
                                                </Button>
                                            </FormControl>
                                            </form>
                                        </VStack>
                                    </Box>
                                </Box>
                            </WrapItem>
                        </Wrap>
                    </Box>
                </Box>
            </Flex>
        </Container>
    );
}