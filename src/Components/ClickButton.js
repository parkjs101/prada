import React from 'react'
import { ReactComponent as Click } from '../assets/click_icon.svg'
import styles from '../Css/clickbutton.module.css'

function ClickButton(props) {
  
  const getPopup = () => {
    return props.popup()
  }
  
  return (
    <div className={styles.main}>
      <Click onClick={getPopup}/>
    </div>
  )
}

export default ClickButton
