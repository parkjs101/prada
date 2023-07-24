import { ReactComponent as Camera } from '../assets/camera_icon.svg'
import styles from '../Css/cameraicon.module.css'

function CameraIcon() {
  return (
    <div className={styles.main}>
      <Camera />
    </div>
  )
}

export default CameraIcon
