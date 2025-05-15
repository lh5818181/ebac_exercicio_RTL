import { FormEvent, useState } from 'react';
import styles from './PostComments.module.css';

import Comment from '../../models/Comment';

// Renomeado para PostComments (antes era Post)
export default function PostComments() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [tempComment, setTempComment] = useState('');

  function handleAddComment(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newComment = new Comment(comments.length, tempComment);
    setTempComment('');
    setComments([...comments, newComment]);
  }

  return (
    <div>
      {/* Adicionado data-testid na lista */}
      <ul
        className={styles['post-comments']}
        data-testid="list-comments"
      >
        {comments.map(({ comment, id }) => (
          <li
            className={styles['post-comment']}
            key={id}
            /*  Adicionado data-testid em cada item */
            data-testid="comment-item"
          >
            <p className={styles['post-comment-content']}>
              {comment}
            </p>
          </li>
        ))}
      </ul>

      <form
        onSubmit={handleAddComment}
        className={styles['post-comments-form']}
      >
        {/*  Adicionado data-testid no textarea */}
        <textarea
          data-testid="input-comment"
          value={tempComment}
          onChange={e => setTempComment(e.target.value)}
          required
          className={styles['post-comments-form-textarea']}
        />

        {/* Adicionado data-testid no botão */}
        <button
          type="submit"
          data-testid="btn-submit"
          className={styles['post-comments-form-button']}
        >
          Comentar
        </button>
      </form>
    </div>
  );
}
