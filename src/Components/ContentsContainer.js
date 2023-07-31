import styles from '../Css/contentscontainer.module.css'

function ContentsContainer(props) {
  return (
    <div className={styles.main1}>
      {props.children}
    </div>
  )
}

export default ContentsContainer
