import styles from '../Css/frame.module.css'

import Poster from './Poster'

function Frame() {
  return (
    <div className={styles.main}>
      <Poster num={0}/>
    </div>
  )
}

export default Frame
