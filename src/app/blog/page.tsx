import Link from 'next/link';
import Navigation from '../../components/Navigation';
import styles from '../../styles/Blog.module.css';

const posts = [
  { id: '1', title: 'First Blog Post' },
  { id: '2', title: 'Second Blog Post' },
  { id: '3', title: 'Third Blog Post' },
];

export default function Blog() {
  return (
    <div className={styles.container}>
      <Navigation />
      <div className={styles.content}>
        <h1 className={styles.heading}>Blog</h1>
        <ul className={styles.postList}>
          {posts.map((post) => (
            <li key={post.id} className={styles.postItem}>
              <Link href={`/blog/${post.id}`} className={styles.postLink}>
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}