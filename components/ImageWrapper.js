import { Box, calc } from "@chakra-ui/react"
import styled from "@emotion/styled"
import Image from 'next/image'

const ImageOffsetter = styled(Box)`
  position: relative;
  top: 12px;
  left: 12px;

  &:after {
    content: "";
    height: 0.75rem;
    width: 40%;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(1.5rem, 1.5rem);
    background-color: #2E333D;
  }

  &:before {
    content: "";
    height: 40%;
    width: 0.75rem;
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(1.5rem, 1.5rem);
    background-color: #2E333D;
  }
`


const ImageWrapper = ({ src, direction, width, height, alt}) => {
  return (
    <Box display='inline-block' position='relative' style={{ overflow: "visible" }} width='calc(100% - 2rem)'>
      <Box position='relative' bg='satvir-yellow' display='inline-block' style={{ overflow: "visible" }} width='100%'>
        <ImageOffsetter width='100%'>
          <Image src={src} alt={alt} layout='responsive' objectFit='contain' height='100%' width='100%' priority/>
        </ImageOffsetter>
      </Box>
      {/* <Box position='absolute' bottom='0' right='0' height='3' width='40%' bg='black' />
      <Box position='absolute' bottom='0' right='0' height='40%' width='3' bg='black' /> */}
    </Box>
  )
}

export default ImageWrapper