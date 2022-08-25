// import { createElement, Fragment } from "react";
// import Head from "next/head"
// import Date from "../../components/date"
// import Layout from "../../components/layout"
// import PostBody from "../../components/PostBody";
// import { getAllBlogPostsWithSlug, getBlogPostAndMoreBlogPosts } from "../../lib/api";
// import utilStyles from '../../styles/utils.module.css';
// import BlogPost from "../../components/MarkdownRenderer";

// export async function getStaticProps({ params, preview = false }) {
//   const data = await getBlogPostAndMoreBlogPosts(params.slug, preview)

//   return {
//     props: {
//       preview,
//       post: data?.blogPost ?? null,
//       morePosts: data?.moreBlogPosts ?? null,
//     },
//   }
// }

// export async function getStaticPaths() {
//   const allPosts = await getAllBlogPostsWithSlug()
//   return {
//     paths: allPosts?.map(({ slug }) => `/posts/${slug}`) ?? [],
//     fallback: true,
//   }
// }

// export default function Post({ post, content }) {
//   return (
//     <Layout>
//       <Head>
//         <title>{post.title}</title>
//       </Head>
//       <article>
//         <h1 className={utilStyles.headingXl}>{post.title}</h1>
//         <div className={utilStyles.lightText}>
//           <Date dateString={post.date} />
//         </div>
//         <BlogPost content={post.content}/>
//         <PostBody content={post.content} />
//       </article> 
//     </Layout>
//   )
// }

export default function Slug() {
  return (
    <h1>
      <h1>Hello World</h1>
    </h1>
  )
}