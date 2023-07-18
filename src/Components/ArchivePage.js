import styles from '../Css/archivepage.module.css'
import RightArrow from './RightArrow'

function ArchivePage() {
  return (
    <div className={styles.archivepage}>
      archive page
      <div className={styles.arrowcontainer}>
        <RightArrow></RightArrow>
      </div>
    </div>
  )
}

export default ArchivePage
