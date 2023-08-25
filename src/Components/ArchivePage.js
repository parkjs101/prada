import Title from './Title'
import SubTitlevisitors from './SubTitlevisitors'
import LeftArrow from './LeftArrow'
import ContentsContainer from './ContentsContainer'
import PhotoArchive from './PhotoArchive'
import ArchivePageScrollBox from './ArchivePageScrollBox'
import RefreshButton from './RefreshButton'

import styles from '../Css/archivepage.module.css'

function ArchivePage(props) {

  const refresh = () => {
    window.location.replace("/");
 }

  return (
    <div className={styles.archivepage}>
      <Title />
      <SubTitlevisitors />
      <ContentsContainer>
        <PhotoArchive />
      </ContentsContainer>
      <LeftArrow clickLeftArrow={props.clickLeftArrow}/>
      <div className={styles.archivepagebutton}>
        <RefreshButton refresh={refresh} />
        <ArchivePageScrollBox />
      </div>
    </div>
  )
}

export default ArchivePage
