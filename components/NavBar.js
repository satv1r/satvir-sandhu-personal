// import Image from "next/image";
import React from 'react'
import { Box, Center, Flex, ListItem, UnorderedList, Link as ChakraLink, Text, Button, IconButton, Tooltip } from "@chakra-ui/react";
import Link from "next/link";

const NavBarItems = [
  {
    text: "Satvir",
    url: "/",
    strong: true
  }, {
    text: "Web Experiments",
    url: "/"
  }, {
    text: "Satvir x DALL-E",
    url: "/"
  }, {
    text: "Thoughts",
    url: "/"
  }, {
    text: "Gratitude",
    url: "/"
  }
]

const blurbs = [
  {
    emoji: '👨🏾‍💻',
    text: 'Thats me!',
  },
  {
    emoji: '🎮',
    text: 'You should play Nier Automata!',
  },
  {
    emoji: '😐',
    text: 'I added this to the navbar because I was bored.',
  },
  {
    emoji: '🥷🏽',
    text: 'Look! Im a ninja now!',
  },
  {
    emoji: '🇺🇦',
    text: 'Slava Ukraine!',
  },
  {
    emoji: '🧙🏾',
    text: 'Youre a wizard Harry!',
  },
  {
    emoji: '🕹',
    text: 'The Witcher 3 is one of my favourite games.',
  },
  {
    emoji: '🐥',
    text: 'I want a pet duck so bad but they dont let you own one where I live.',
  }
]


const SpinningIconButton = () => {
  const [currentBlurb, setCurrentBlurb] = React.useState(0)

  const onIconClick = e => {
    e.preventDefault()
    e.target.classList.remove('fade-in')
    e.target.classList.add('fade-out')
    setTimeout(() => {
      setCurrentBlurb(currentBlurb < blurbs.length - 1 ? currentBlurb + 1 : 0)
      e.target.classList.add('fade-in')
      e.target.classList.remove('fade-out')
    }, 250)

  }

  return (
    <Tooltip hasArrow label={blurbs[currentBlurb].text} bg='black'>
      <Button display='inline-block' fontSize='20' position='absolute' top='50%' left='0.25rem' transform='translateY(-50%)' variant='ghost-full' onClick={onIconClick}>{blurbs[currentBlurb].emoji}</Button>
    </Tooltip>
  )
}

const NavItem = ({item}) => {
  return (
    <ChakraLink variant='navLink'>
      <Link href={item.url} variant='navLink'>
        {item.strong ? (
          <strong>{item.text}</strong>
        ) : item.text}
      </Link>
    </ChakraLink>
  );
}


const NavBar = () => {
  return (
    <Center width='100%'>
      <Box className="navbar" bg='black' as='nav' borderRadius='full' paddingRight='6' paddingLeft='8' paddingY='2' position='relative' overflow='hidden'>
        <SpinningIconButton />
        <UnorderedList listStyleType='none' marginLeft='0' color='white' display='inline-block'>         
          <Flex justify='space-between'>
            {NavBarItems.map(item => (
              <ListItem key={item.text}>
                <NavItem item={item} />
              </ListItem>
            ))}
          </Flex>
        </UnorderedList>
      </Box>
    </Center>
  );
}

export default NavBar