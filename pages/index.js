import React from 'react'
import Head from 'next/head'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import NavBar from '../components/NavBar'
import { getAllBlogPostsForHome } from '../lib/api'
import { Box, Flex, Heading, Text, Link as ChakraLink } from '@chakra-ui/react'
import ImageWrapper from '../components/ImageWrapper'
import Container from '../components/Container'
import Link from 'next/link'

export default function Home({ preview, allPosts }) {
  const dim = 100
  return (
    <Box>
      <NavBar/>
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <Container>
          <Flex justify='space-between' paddingTop={{base: 6, md: 24}} direction={{base: 'column-reverse', md: 'row'}}>
            <Box width='100%' marginRight={12} mt={{base: 8, md: 0}}>
              <ImageWrapper alt='Satvir' src='/images/profile.jpeg'/>
            </Box>
            <Flex grow={1} direction='column' width='100%'>
              <Box>
                <Heading fontWeight={500} fontSize={{base: 24, lg: 48}}>
                  hi! <Box className='animated-wave' display='inline-block'>👋🏽</Box> my name is 
                </Heading>
                <Heading fontWeight={700} fontSize={{base: 48, lg: 84}}>
                  Satvir Sandhu
                </Heading>
                <Box>
                  <Text lineHeight={'150%'} fontSize={{base: 18, md: 24}} paddingTop={6}>
                  I&apos;m a full-stack developer that loves creating beautiful products that scale. 
                  </Text>
                  <Text lineHeight={'150%'} fontSize={{base: 18, md: 24}} paddingTop={4}>
                    I&apos;ve previously helped build <Link href='https://www.getaboard.co' passHref><ChakraLink variant='externalLink'>Aboard</ChakraLink></Link>, a superb onboarding platform used by many organizations.
                  </Text>
                </Box>
              </Box>
              <Flex grow={1} justifyContent='space-between' marginTop='4' direction={{base: 'column', md: 'row'}}>
                <Flex justify='center' direction='column'>
                  <Text fontSize={{base: 18, md: 24}}>Email me here 👉🏽 <Link href='mailto:hey@satvir.ca' passHref><ChakraLink variant='externalLink'>hey@satvir.ca</ChakraLink></Link></Text>
                  <Text fontSize={{base: 18, md: 24}}>Book a meeting 👉🏽 <Link href='hey@satvir.ca' passHref><ChakraLink variant='externalLink'> Calendly</ChakraLink></Link></Text>
                  <Text fontSize={{base: 18, md: 24}}> View my resume 👉🏽 <Link href='hey@satvir.ca' passHref><ChakraLink variant='externalLink'> Download</ChakraLink></Link></Text>
                </Flex>
                <Flex justify={{base: 'flex-start', md: 'center'}} direction={{base: 'row', md: 'column'}} fontSize='30px' mt={{base: 2, md: 0}}>
                  <Link href='https://www.github.com/satv1r' marginRight={{base: 10, md: 0}} passHref><ChakraLink aria-label="GitHub"><i className="fab fa-github"></i></ChakraLink></Link>
                  <Box mt={{base: 0, md: 4}} mr={{base: 4, md: 0}}/>
                  <Link href='https://www.github.com/satv1r' passHref><ChakraLink aria-label="Codepen"><i className="fab fa-codepen"></i></ChakraLink></Link>
                  <Box mt={{base: 0, md: 4}} mr={{base: 4, md: 0}}/>
                  <Link href='https://www.github.com/satv1r' passHref><ChakraLink aria-label="Twitter" padding={0} margin={0} width='fit-content' height='fit-content' position='relative' _hover={{
                    _after:{content: '"satv1r"', background: 'black', color: 'white', position: 'absolute', top: 0, left: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', transform: 'translate(-105%, 0)', width: 0, height: '100%', borderRadius: '20px', fontSize: '1.25rem', fontWeight: '700',animation: '0.25s ease-out forwards unroll'}
                  }} ><Box animation='0.25s roll-up' transform='rotate(-360deg)' _hover={{ animation: '0.25s forwards rolling'}}><i className="fab fa-twitter"></i></Box></ChakraLink></Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
          <ImageWrapper alt='Satvir' src='/images/screenshot.png'/>
        </Container>
        {/* <section className={utilStyles.headingMd}>
          <p>Hey! I&apos;m <strong>Satvir</strong>. I love writing software and playing video games. You can contact me on <a href='https://www.twitter.com/satv1r' target="_blank" rel="noopener noreferrer">Twitter</a>.</p>
          <p>
            (This is a sample website - you’ll be building a site like this on{' '}
            <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPosts.map(({ slug, date, title }) => (
              <li className={utilStyles.listItem} key={slug}>
              <Link href={`/posts/${slug}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
            ))}
          </ul>
        </section> */}
      </Layout>
    </Box>
  )
}

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData()
//   return {
//     props: {
//       allPostsData
//     }
//   }
// }

export async function getStaticProps({ preview = false }) {
  const allPosts = (await getAllBlogPostsForHome(preview)) ?? []
  return {
    props: { preview, allPosts },
  }
}