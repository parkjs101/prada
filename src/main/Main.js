import PosterPage from "../Components/PosterPage"
import CameraPage from "../Components/CameraPage"
import ArchivePage from "../Components/ArchivePage"

import {useRef } from "react"

import styles from '../main/main.module.css'

function Main() {

  const divRef = useRef();

  const clickRightArrow = () => {
    divRef.current.scrollTo({
      top: 0,
      left:divRef.current.scrollLeft+divRef.current.offsetWidth,
      behavior: "smooth",
    });
  }
  
  const clickLeftArrow = () => {
    divRef.current.scrollTo({
      top: 0,
      left:divRef.current.scrollLeft-divRef.current.offsetWidth,
      behavior: "smooth",
    });
  }
  
  return (
    <div className={styles.main} ref={divRef}>
      <PosterPage clickRightArrow={clickRightArrow}></PosterPage>
      <CameraPage clickRightArrow={clickRightArrow} clickLeftArrow={clickLeftArrow}></CameraPage>
      <ArchivePage clickLeftArrow={clickLeftArrow} ></ArchivePage>
    </div>
  )
}

export default Main
