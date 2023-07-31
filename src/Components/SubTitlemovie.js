import React from 'react'
import { ReactComponent as Subtitle } from "../assets/subtitle_movie.svg"
import styles from '../Css/subtitle.module.css'

function SubTitlemovie() {
  return (
    <div className={styles.subtitle2}>
      <Subtitle />
    </div>
  )
}

export default SubTitlemovie
