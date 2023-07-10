import styles from '../Css/MainPoster.module.css'
import mainposter from '../assets/mainposter.png'

function MainPoster() {
  return (
    <div className={styles.mainPoster}>
      <img src={mainposter} alt='main poster' className={styles.image}/>
    </div>

  )
}

export default MainPoster
