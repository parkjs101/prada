import styles from '../Css/camerapage.module.css'

import Title from "./Title"
import SubTitlecamera from './SubTitlecamera'
import ContentsContainer from './ContentsContainer'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import ClickButton from './ClickButton'
import CameraIcon from './CameraIcon'

function CameraPage() {
  return (
    <div className={styles.camerapage}>
      <Title />
      <SubTitlecamera />
      <ContentsContainer>
        <LeftArrow />
        <CameraIcon />
        <RightArrow />
      </ContentsContainer>
      <ClickButton />
    </div>
  )
}

export default CameraPage
