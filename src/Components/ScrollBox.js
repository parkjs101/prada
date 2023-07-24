import React from 'react'
import { ReactComponent as BottomScrollbox } from "../assets/scrollbox.svg"
import styles from '../Css/scrollbox.module.css'

function ScrollBox() {
  return (
    <div className={styles.scrollbox}>
      <BottomScrollbox />
    </div>
  )
}

export default ScrollBox
