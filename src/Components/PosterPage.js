import Title from "./Title"
import SubTitlemovie from "./SubTitlemovie"
import ContentsContainer from "./ContentsContainer"
import RightArrow from './RightArrow'
import ScrollBox from "./ScrollBox"
import Frame from "./Frame"

import styles from '../Css/posterpage.module.css'

function PosterPage() {
  return (
    <div className={styles.posterpage}>
      <Title />
      <SubTitlemovie />
      <ContentsContainer>
        <Frame></Frame>
        <RightArrow />
      </ContentsContainer>
      <ScrollBox />
    </div>
  )
}

export default PosterPage
