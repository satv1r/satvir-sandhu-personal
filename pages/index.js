import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import { getAllBlogPostsForHome } from '../lib/api'
import { getSortedPostsData } from '../lib/posts'
import utilStyles from '../styles/utils.module.css'

export default function Home({ preview, allPosts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
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
      </section>
    </Layout>
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
