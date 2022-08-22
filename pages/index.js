import React from 'react'
import Head from 'next/head'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import NavBar from '../components/NavBar'
import { getAllBlogPostsForHome } from '../lib/api'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'
import { Box, Flex, Heading, Text, Link as ChakraLink, Spacer } from '@chakra-ui/react'
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
          <Flex justify='space-between' paddingTop={24} direction={{base: 'column-reverse', md: 'row'}}>
            <Box width='100%' marginRight={12}>
              <ImageWrapper alt='Satvir' src='/images/profile.jpeg'/>
            </Box>
            <Flex grow={1} direction='column' width='100%'>
              <Box>
                <Heading fontWeight={500} fontSize={48}>
                  hi! <Box className='animated-wave' display='inline-block'>👋🏽</Box> my name is 
                </Heading>
                <Heading fontWeight={700} fontSize={86}>
                  Satvir Sandhu
                </Heading>
                <Box>
                  <Text lineHeight={'150%'} fontSize={24} paddingTop={6}>
                  I&apos;m a full-stack developer that loves creating beautiful products that scale. 
                  </Text>
                  <Text lineHeight={'150%'} fontSize={24} paddingTop={4}>
                    I&apos;ve previously helped build <Link href='https://www.getaboard.co' passHref><ChakraLink variant='externalLink'>Aboard</ChakraLink></Link>, a superb onboarding platform used by many organizations.
                  </Text>
                </Box>
              </Box>
              <Flex grow={1} justifyContent='space-between'>
                <Flex justify='center' direction='column'>
                  <Text fontSize={24}>Email me here 👉🏽 <Link href='hey@satvir.ca' passHref><ChakraLink variant='externalLink'>hey@satvir.ca</ChakraLink></Link></Text>
                  <Text fontSize={24}>Book a meeting 👉🏽 <Link href='hey@satvir.ca' passHref><ChakraLink variant='externalLink'>hey@satvir.ca</ChakraLink></Link></Text>
                  <Text fontSize={24}>View my resume 👉🏽 <Link href='hey@satvir.ca' passHref><ChakraLink variant='externalLink'>hey@satvir.ca</ChakraLink></Link></Text>
                </Flex>
                <Flex justify='center' direction='column' fontSize='30px'>
                  <Link href='https://www.github.com/satv1r'><i className="fab fa-github"></i></Link>
                  <Box mt='8'/>
                  <Link href='https://www.github.com/satv1r'><i className="fab fa-codepen"></i></Link>
                  <Box mt='8'/>
                  <Link href='https://www.github.com/satv1r'><i className="fab fa-twitter"></i></Link>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
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
