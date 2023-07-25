import { ReactComponent as Arrow } from "../assets/leftarrow.svg"
import styles from '../Css/leftarrow.module.css'

function LeftArrow() {
  return (
      <button className={styles.arrow}>
        <Arrow></Arrow>
      </button>
  )
}

export default LeftArrow
