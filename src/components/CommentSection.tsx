import { useState, ChangeEvent, FormEvent } from 'react';
import styles from '../styles/CommentSection.module.css';

export default function CommentSection() {
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState('');

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment('');
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Comments</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className={styles.textarea}
          placeholder="Add a comment"
          rows={3}
        ></textarea>
        <button type="submit" className={styles.button}>Submit</button>
      </form>
      <ul className={styles.commentList}>
        {comments.map((comment, index) => (
          <li key={index} className={styles.commentItem}>{comment}</li>
        ))}
      </ul>
    </div>
  );
}