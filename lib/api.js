const BLOG_POST_GRAPHQL_FIELDS = `
slug
title
date
coverImage {
  url
}
date
content {
  json
  links {
    assets {
      block {
        sys {
          id
        }
        url
        description
      }
    }
  }
}
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractBlogPost(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items?.[0]
}

function extractBlogPostEntries(fetchResponse) {
  return fetchResponse?.data?.blogPostCollection?.items
}

export async function getPreviewBlogPostBySlug(slug) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(preview: true, limit: 1) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    true
  )
  return extractPost(entry)
}

export async function getAllBlogPostsWithSlug() {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: date_DESC) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractBlogPostEntries(entries)
}

export async function getAllBlogPostsForHome(preview) {
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: date_DESC, preview: ${preview ? 'true' : 'false'}, limit: 1) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return extractBlogPostEntries(entries)
}

export async function getBlogPostAndMoreBlogPosts(slug, preview) {
  const entry = await fetchGraphQL(
    `query {
      blogPostCollection(preview: ${
      preview ? 'true' : 'false'
    }, limit: 1) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  const entries = await fetchGraphQL(
    `query {
      blogPostCollection(order: date_DESC, preview: ${
      preview ? 'true' : 'false'
    }, limit: 2) {
        items {
          ${BLOG_POST_GRAPHQL_FIELDS}
        }
      }
    }`,
    preview
  )
  return {
    blogPost: extractBlogPost(entry),
    moreBlogPosts: extractBlogPostEntries(entries),
  }
}
