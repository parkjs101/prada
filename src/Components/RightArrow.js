import {ReactComponent as Arrow} from '../assets/rightarrow.svg'
import styles from '../Css/rightarrow.module.css'

function RightArrow() {
  
  
  return (
    <button className={styles.arrow}>
      <Arrow></Arrow>
    </button>
  )
}

export default RightArrow
