import PosterColorButton from "./ColorPosterButton"
import styles from '../Css/ColorPosterButtonContainer.module.css'

function PosterColorButtonContainer() {
  return (
    <div className={styles.buttonContainer}>
      <PosterColorButton />
      <PosterColorButton />
      <PosterColorButton />
      <PosterColorButton />
      <PosterColorButton />
      <PosterColorButton />
    </div>
  )
}
export default PosterColorButtonContainer
