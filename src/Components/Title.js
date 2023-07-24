import { ReactComponent as MainTitle } from "../assets/title.svg"
import styles from '../Css/title.module.css'

function Title() {
  return (
    <div className={styles.title}>
      <MainTitle></MainTitle>
    </div>
  )
}

export default Title
