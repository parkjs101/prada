import styles from '../Css/camerapage.module.css'

import Title from "./Title"
import SubTitlecamera from './SubTitlecamera'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import ClickButton from './ClickButton'
import CameraIcon from './CameraIcon'

function CameraPage() {
  return (
    <div className={styles.camerapage}>
      <Title />
      <SubTitlecamera />
      <LeftArrow />
      <CameraIcon />
      <RightArrow />
      <ClickButton />
    </div>
  )
}

export default CameraPage
