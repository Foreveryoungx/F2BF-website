import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'
import { AppProps } from 'next/app'
import Layout from '../components/layout';
import 'react-modal-video/css/modal-video.min.css';
export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider resetCSS theme={theme}>
            <Layout>
            <Component {...pageProps} />
            </Layout>
        </ChakraProvider>
    )
}

