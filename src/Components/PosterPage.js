import Title from "./Title"
import SubTitlemovie from "./SubTitlemovie"
import ContentsContainer from "./ContentsContainer"
import RightArrow from './RightArrow'
import ScrollBox from "./ScrollBox"
import Frame from "./Frame"

import styles from '../Css/posterpage.module.css'

function PosterPage(props) {

  return (
    <div className={styles.posterpage}>
      <Title />
      <SubTitlemovie />
      <ContentsContainer>
        <Frame></Frame>
      </ContentsContainer>
      <RightArrow clickRightArrow={props.clickRightArrow}/>
      <ScrollBox />
    </div>
  )
}

export default PosterPage
