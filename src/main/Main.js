import PosterPage from "../Components/PosterPage"
import CameraPage from "../Components/CameraPage"
import ArchivePage from "../Components/ArchivePage"

import styles from '../Css/main.module.css'

function Main() {
  return (
    <div className={styles.main}>
      <PosterPage></PosterPage>
      <CameraPage></CameraPage>
      <ArchivePage></ArchivePage>
    </div>
  )
}

export default Main
