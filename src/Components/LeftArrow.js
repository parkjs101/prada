import { ReactComponent as Arrow } from "../assets/leftarrow.svg"
import styles from '../Css/leftarrow.module.css'

function LeftArrow() {
  return (
    <div className={styles.arrow}>
      <Arrow></Arrow>
    </div>
  )
}

export default LeftArrow
