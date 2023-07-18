import styles from '../Css/camerapage.module.css'
import LeftArrow from './LeftArrow'
import RightArrow from './RightArrow'

function CameraPage() {
  return (
    <div className={styles.camerapage}>
      camera page
        <div className={styles.arrowcontainer}>
        <RightArrow></RightArrow>
        <LeftArrow></LeftArrow>
        </div>
    </div>
  )
}

export default CameraPage
