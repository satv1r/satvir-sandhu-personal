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
      <Button display='inline-block' fontSize='20' position='absolute' top='50%' left={{base: '4', md: '1'}} transform='translateY(-50%)' variant='ghost-full' onClick={onIconClick}>{blurbs[currentBlurb].emoji}</Button>
    </Tooltip>
  )
}

const NavItem = ({item}) => {
  return (
      <Link href={item.url} passHref>
        <ChakraLink variant='navLink' paddingTop={{base: '0'}} color={{base: 'black', md: 'white'}} textDecoration={{base: 'none'}} _hover={{textDecoration: {base: 'none', md: 'underline'}}}>
        {item.strong ? (
          <strong>{item.text}</strong>
        ) : item.text}
        </ChakraLink>
      </Link>
  );
}


const NavBar = () => {
  return (
    <Center width='100%'>
      <Box className="navbar" bg={{base: 'none', md: 'black'}} as='nav' borderRadius={{base: 'none', md: 'full'}} paddingRight='6' paddingLeft='8' paddingY='2' position='relative' overflow='hidden' marginTop={{base: '2', md: '5'}} width={{base: 'full', md: 'fit-content'}}>
        <SpinningIconButton />
        <UnorderedList listStyleType='none' marginLeft='0' color='white' display='inline-block'>
          <Box display={{base: 'inline-block', md: 'none'}} marginLeft={{base: '2', md: '0'}}>
            <NavItem item={NavBarItems[0]}/>   
          </Box>
          <Flex justify='space-between' display={{base: 'none', md: 'flex'}}>
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