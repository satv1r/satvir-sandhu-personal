import '../styles/global.css'
import { ChakraProvider, CSSReset , extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  components: {
    Link: {
      variants: {
        'navLink': {
          marginLeft: '4',
          color: 'white',
          fontSize: '1rem',
          paddingTop: '40',
        },
        'externalLink': {
          fontWeight: 700,
          color: 'satvir-red'
        },
      }
    },
    Button: {
      variants: {
        'ghost-full': {
          bg: 'transparent',
          color: 'white',
          _hover: {
            bg: 'transparent'
          }
        }
      }
    }
  },
  styles: {
    global: {
      body: {
        fontFamily: `'Poppins', sans-serif`,
        backgroundColor: '#f3fcf0',
        color: 'black'
      }
    }
  },
  colors: {
    black: '#2E333D',
    'satvir-yellow': '#ffd23f',
    'satvir-red': '#ee4266'
  }
})

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}