import Title from './Title'
import SubTitlevisitors from './SubTitlevisitors'
import LeftArrow from './LeftArrow'
import ContentsContainer from './ContentsContainer'
import PhotoArchive from './PhotoArchive'
import ArchivePageScrollBox from './ArchivePageScrollBox'
import RefreshButton from './RefreshButton'

import { useState } from "react"

import styles from '../Css/archivepage.module.css'

function ArchivePage(props) {

  const [refreshKey, setRefreshKey] = useState(0);

  const refresh = () => {
    setRefreshKey(prevKey => prevKey + 1);
  }

  return (
    <div className={styles.archivepage}>
      <Title />
      <SubTitlevisitors />
      <ContentsContainer>
        <PhotoArchive refreshKey={refreshKey} />
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
