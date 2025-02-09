"use client";

import { useParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import CommentSection from '@/components/CommentSection';
import styles from '@/styles/Blog.module.css';

const posts: Record<string, { title: string; content: string }> = {
  '1': { title: 'First Blog Post', content: 'This is the content of the first blog post.' },
  '2': { title: 'Second Blog Post', content: 'This is the content of the second blog post.' },
  '3': { title: 'Third Blog Post', content: 'This is the content of the third blog post.' },
};

export default function Post() {
  const params = useParams();
  const id = params?.id as string | undefined;  // ✅ Avoid undefined issues

  // ✅ Show a loading state if id is not yet available
  if (!id) {
    return <div>Loading post...</div>;
  }

  const post = posts[id];

  if (!post) {
    return <div>❌ Post not found</div>;
  }

  return (
    <div className={styles.container}>

      <div className={styles.content}>
        <h1 className={styles.heading}>{post.title}</h1>
        <p>{post.content}</p>
        <CommentSection />
      </div>
    </div>
  );
}
