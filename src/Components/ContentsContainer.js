import styles from '../Css/contentscontainer.module.css'

function ContentsContainer(props) {
  return (
    <div className={styles.main}>
      {props.children}
    </div>
  )
}

export default ContentsContainer
