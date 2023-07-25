import styles from '../Css/archivepage.module.css'
import Title from './Title'
import SubTitlevisitors from './SubTitlevisitors'
import LeftArrow from './LeftArrow'
import ContentsContainer from './ContentsContainer'
import PhotoArchive from './PhotoArchive'
import ScrollBox from "./ScrollBox"

function ArchivePage() {
  return (
    <div className={styles.archivepage}>
      <Title />
      <SubTitlevisitors />
      <LeftArrow />
      <ContentsContainer>
        <PhotoArchive />
      </ContentsContainer>
      <ScrollBox />
    </div>
  )
}

export default ArchivePage
