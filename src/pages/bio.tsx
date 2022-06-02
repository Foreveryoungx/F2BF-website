import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue, useColorMode,
} from '@chakra-ui/react';
import {
    IoTrophyOutline,
} from 'react-icons/io5';
import React, { ReactElement } from 'react';

interface FeatureProps {
    text: string;
    iconBg: string;
    icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
    return (
        <Stack direction={'row'} align={'center'}>
            <Flex
                w={8}
                h={8}
                align={'center'}
                justify={'center'}
                rounded={'full'}
                bg={iconBg}>
                {icon}
            </Flex>
            <Text fontWeight={600}>{text}</Text>
        </Stack>
    );
};

export default function Bio() {
    return (
        <Container maxW={'5xl'} py={12}>
            <SimpleGrid columns={{ base: 1, md: 2}} spacing={5}>
                <Stack spacing={4}>
                    <Text
                        textTransform={'uppercase'}
                        color={'green.400'}
                        fontWeight={600}
                        fontSize={'sm'}
                        bg={useColorModeValue('green.50', 'green.900')}
                        p={2}
                        alignSelf={'flex-start'}
                        rounded={'md'}>
                        My Story
                    </Text>
                    <Heading>MELANIE GIBSON</Heading>
                    <Text color={useColorModeValue('gray.600', 'white')} fontSize={'lg'}>
                        My fitness journey began in 2013. I started my fitness journey as a second career after retiring from a 26-year teaching career. Realizing I have a passion for fitness, I set new goals for myself. My first accomplishment was becoming a licensed Zumba® Fitness Instructor. After that, I became certified to teach Zumba® Gold, Zumba® Step, Zumba® Toning, Zumba® Kids/Kids Jr., and STRONG Nation. In addition, I am also a certified MIXXEDFIT Instructor. Another dance fitness format. From there, I decided to expand my knowledge and experience in fitness by branching out to teach other HITT and Total Body Conditioning formats. I furthered my fitness career by becoming a NASM Certified Personal Trainer in 2019 and created my fitness business named Formed 2B Fierce Fitness LLC. In 2020 I will also expand my career to include NASM Fitness Nutrition Specialist. I Love to reach people through fitness! My passion! I hope to use my love for fitness to change lives. My ultimate goal is to help others become
                        better versions of themselves.

                    </Text>
                    <Stack
                        spacing={4}
                        divider={
                            <StackDivider
                                borderColor={useColorModeValue('gray.100', 'gray.700')}
                            />
                        }>
                        <Feature
                            icon={
                                <Icon as={IoTrophyOutline} color={'pink.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('pink.100', 'pink.900')}
                            text={'NASM Group Training Specialist '}
                        />
                        <Feature
                            icon={<Icon as={IoTrophyOutline} color={'green.500'} w={5} h={5} />}
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'NASM Fitness Nutrition Specialist'}
                        />
                        <Feature
                            icon={
                                <Icon as={IoTrophyOutline} color={'pink.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('pink.100', 'pink.900')}
                            text={'AAFA Group Exercise Certification'}
                        />
                        <Feature
                            icon={
                                <Icon as={IoTrophyOutline} color={'green.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('green.100', 'green.900')}
                            text={'AAFA Group Exercise Certification'}
                        />
                        <Feature
                            icon={
                                <Icon as={IoTrophyOutline} color={'pink.500'} w={5} h={5} />
                            }
                            iconBg={useColorModeValue('pink.100', 'pink.900')}
                            text={'AAFA Group Exercise Certification'}
                        />
                    </Stack>
                </Stack>
                <Flex>
                    <Stack spacing={2}>
                    <Image
                        rounded={'md'}
                        alt={'Collage for Bio image of Melanie Gibson'}
                        src={
                            'https://res.cloudinary.com/dvfdkfitt/image/upload/v1652894588/F2BFF/collage_hvjfim.jpg'
                        }
                        objectFit={'contain'}
                    />
                    </Stack>
                </Flex>
            </SimpleGrid>
        </Container>
    );
}