import styles from '../Css/camerapage.module.css'

import Title from "./Title"
import SubTitlecamera from './SubTitlecamera'
import RightArrow from './RightArrow'
import LeftArrow from './LeftArrow'
import ClickButton from './ClickButton'
import CameraIcon from './CameraIcon'

function CameraPage(props) {
  
  const popupOpen = () => {
    window.open("/Camera", "PopupWin", "width=1200,height=800,top=200,left=400");
  }
  
  return (
    <div className={styles.camerapage}>
      <Title />
      <SubTitlecamera />
      <LeftArrow clickLeftArrow={props.clickLeftArrow}/>
      <CameraIcon />
      <RightArrow clickRightArrow={props.clickRightArrow}/>
      <ClickButton popup={popupOpen}/>
    </div>
  )
}

export default CameraPage
