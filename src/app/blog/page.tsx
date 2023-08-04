import { ArrowRightIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import { Heading } from '~/components/Heading/Heading';
import { Paragraph } from '~/components/Paragraph';
import { PostMetadata, getAllPublished } from '~/lib/notion';

type PostCardProps = {
  post: PostMetadata;
};

function PostCard({ post }: PostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="my-4 flex w-full cursor-pointer flex-col border-b border-solid border-white pb-4 transition-all last:border-b-0 hover:scale-105"
    >
      <Heading as="h2" className="text-2xl">
        {post.title}
      </Heading>
      <Paragraph className="mb-4">{post.summary}</Paragraph>
      <button className="-mt-2 flex grow-0 items-center font-bold">
        Read more <ArrowRightIcon className="ml-2 stroke-2" />
      </button>
    </Link>
  );
}

export default async function BlogPage() {
  const posts = await getAllPublished();

  return (
    <div className="w-full px-8 text-white">
      <div className="container mx-auto max-w-prose px-4">
        <div className="flex items-center py-12">
          <Heading as="h1" className="text-4xl">
            Blog
          </Heading>
        </div>
        {posts.map((post) => (
          <PostCard post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
}
