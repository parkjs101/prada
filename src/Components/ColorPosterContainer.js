import styles from '../Css/ColorPosterContainer.module.css'
import ColorPoster from './ColorPoster'

function ColorPosterContainer() {
  return (
    <div className={styles.posterContainer}>
      <ColorPoster/>
      <ColorPoster/>
      <ColorPoster/>
      <ColorPoster/>
      <ColorPoster/>
      <ColorPoster/>
    </div>
  )
}

export default ColorPosterContainer
