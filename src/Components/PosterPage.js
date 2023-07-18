import styles from '../Css/posterpage.module.css'
import LeftArrow from './LeftArrow'


function PosterPage() {
  return (
    <div className={styles.posterpage}>
      Movie Posters
      <div className={styles.arrowcontainer}>
        <LeftArrow></LeftArrow>
      </div>
    </div>
  )
}

export default PosterPage
