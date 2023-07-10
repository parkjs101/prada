import styles from '../Css/CommentContainer.module.css'

function CommentContainer() {
  return (
    <div className={styles.commentHeader}>
      Curator's<br></br>
      Comment
      <br></br>
      <br></br>
      <div className={styles.commentContainer}>
        #comment
      </div>
    </div>
  )
}

export default CommentContainer
