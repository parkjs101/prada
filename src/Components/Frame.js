import styles from '../Css/frame.module.css'

import Poster from './Poster'

function Frame() {
  return (
    <div className={styles.main}>
      <Poster num={0}/>
      <Poster num={1}/>
      <Poster num={2}/>
      <Poster num={3}/>
      <Poster num={4}/>
      <Poster num={5}/>
      <Poster num={6}/>
    </div>
  )
}

export default Frame
