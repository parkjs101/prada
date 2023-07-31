import { ReactComponent as Arrow } from "../assets/leftarrow.svg"
import styles from '../Css/leftarrow.module.css'

function LeftArrow(props) {
  const sendNewValue = () => {
    return props.clickLeftArrow()
  }
  return (
      <div className={styles.arrow} onClick={sendNewValue}>
        <Arrow></Arrow>
      </div>
  )
}

export default LeftArrow
