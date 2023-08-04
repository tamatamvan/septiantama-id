import { Client } from '@notionhq/client';

import { z } from 'zod';

const envSchema = z.object({
  NOTION_TOKEN: z.string(),
  NOTION_DB_ID: z.string(),
});

const RichTextSchema = z.object({
  rich_text: z.array(
    z.object({
      plain_text: z.string(),
      text: z.object({
        content: z.string(),
      }),
    }),
  ),
});

const TitleSchema = z.object({
  title: z.array(z.object({ plain_text: z.string() })),
});

const CategoryEnums = z.enum(['poetry', 'tech_code', 'other']);

const CategorySchema = z.object({
  select: z.object({
    name: CategoryEnums,
  }),
});

const DateSchema = z.object({
  date: z.object({
    start: z.string().transform((d) => new Date(d)),
  }),
});

const TagsSchema = z.object({
  multi_select: z.array(
    z.object({
      name: z.string(),
    }),
  ),
});

const PostSchema = z.object({
  id: z.string(),
  properties: z.object({
    slug: RichTextSchema,
    summary: RichTextSchema,
    title: TitleSchema,
    category: CategorySchema,
    date: DateSchema,
    tags: TagsSchema,
  }),
});

export type PostDBObj = z.infer<typeof PostSchema>;

const notion = new Client({
  auth: envSchema.parse(process.env).NOTION_TOKEN,
});

export type PostMetadata = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  category: string;
  date: string | Date;
  tags: string[];
};

function getPostMetadata(post: PostDBObj): PostMetadata {
  return {
    id: post.id,
    slug: post.properties.slug.rich_text[0].plain_text,
    title: post.properties.title.title[0].plain_text,
    summary: post.properties.summary.rich_text[0].text.content,
    category: post.properties.category.select.name,
    date: post.properties.date.date.start,
    tags: post.properties.tags.multi_select.map((tag) => tag.name),
  };
}

export const getAllPublished = async () => {
  const posts = await notion.databases.query({
    database_id: envSchema.parse(process.env).NOTION_DB_ID,
    filter: {
      property: 'status',
      status: {
        equals: 'Published',
      },
    },
    sorts: [
      {
        property: 'date',
        direction: 'descending',
      },
    ],
  });

  const allPosts = z.array(PostSchema).parse(posts.results);

  return allPosts.map((post) => getPostMetadata(post));
};
