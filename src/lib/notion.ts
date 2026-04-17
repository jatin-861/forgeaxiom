import { Client } from '@notionhq/client'
import { NotionToMarkdown } from 'notion-to-md'

const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion })

export async function getProjects() {
  const databaseId = process.env.NOTION_PROJECTS_DATABASE_ID
  if (!databaseId) return []

  const response = await (notion.databases as any).query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'Date',
        direction: 'descending',
      },
    ],
  })

  return response.results
}

export async function getBlogPosts() {
  const databaseId = process.env.NOTION_BLOG_DATABASE_ID
  if (!databaseId) return []

  const response = await (notion.databases as any).query({
    database_id: databaseId,
    filter: {
      property: 'Status',
      status: {
        equals: 'Published',
      },
    },
  })

  return response.results
}

export async function getPostContent(_slug: string) {
  // Logic to find page ID by slug and convert to MD
  // To be implemented when database schema is confirmed
  return ""
}
