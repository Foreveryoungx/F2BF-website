import {Box, Container, Heading} from '@chakra-ui/react';
import {CheckCircleIcon} from '@chakra-ui/icons';

import React from 'react';

export default function ComingSoon() {
    return (
        <Container height="100vh">
            <Box textAlign="center" py={10} px={6}>
                <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
                <Heading as="h2" size="xl" mt={6} mb={2}>
                    Coming Soon
                </Heading>
            </Box>
        </Container>
    );
};
