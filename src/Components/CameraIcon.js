import { ReactComponent as CameraI } from '../assets/camera_icon.svg'
import styles from '../Css/cameraicon.module.css'

function CameraIcon() {

  return (
    <div className={styles.main}>
      <CameraI />
    </div>
  )
}

export default CameraIcon
