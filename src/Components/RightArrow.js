import {ReactComponent as Arrow} from '../assets/rightarrow.svg'
import styles from '../Css/rightarrow.module.css'

function RightArrow(props) {
  const sendNewValue = () => {
    return props.clickRightArrow()
  }

  return (
    <div className={styles.arrow} onClick={sendNewValue}>
      <Arrow></Arrow>
    </div>
  )
}

export default RightArrow
