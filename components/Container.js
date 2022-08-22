import { Box, Center } from "@chakra-ui/react"


const Container = ({ children }) => {
  return (
    <Center>
      <Box maxWidth='80rem' marginX={{base: '2rem', md: '4rem'}}>
        {children}
      </Box>
    </Center>
  )
}

export default Container 