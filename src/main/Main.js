import PosterPage from "../Components/PosterPage"
import CameraPage from "../Components/CameraPage"
import ArchivePage from "../Components/ArchivePage"

import {useRef, useState} from "react"
import styles from '../main/main.module.css'

function Main() {

  const [currentY, setCurrentY] = useState(0)
  const divRef = useRef()

  const clickRightArrow = () => {
    divRef.current.scrollTo({
      top: 0,
      left:currentY+divRef.current.offsetWidth,
      behavior: "smooth",
    });
    setCurrentY(currentY+divRef.current.offsetWidth)
    console.log(divRef.current.offsetWidth)
  }

  return (
    <div className={styles.main} ref={divRef}>
      <PosterPage getNewV={clickRightArrow}></PosterPage>
      <CameraPage></CameraPage>
      <ArchivePage></ArchivePage>
    </div>
  )
}

export default Main
