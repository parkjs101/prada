import React from 'react'
import { ReactComponent as Click } from '../assets/click_icon.svg'
import styles from '../Css/clickbutton.module.css'

function ClickButton() {
  return (
    <div className={styles.main}>
      <Click />
    </div>
  )
}

export default ClickButton
