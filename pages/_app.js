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
        backgroundColor: '#FEF5EF',
        color: 'black'
      }
    }
  },
  colors: {
    black: '#2E333D',
    'satvir-yellow': '#ea7317',
    'satvir-red': '#CC3363'
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