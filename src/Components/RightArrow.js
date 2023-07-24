import {ReactComponent as Arrow} from '../assets/rightarrow.svg'
import styles from '../Css/rightarrow.module.css'

function RightArrow() {
  return (
    <div className={styles.arrow}>
      <Arrow></Arrow>
    </div>
  )
}

export default RightArrow
