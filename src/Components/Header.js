import BackButton from './BackButton'
import styles from '../Css/Header.module.css'

function Header() {
	return (
		<div className={styles.header}>
			<BackButton></BackButton>
			<br></br>
			#The Devil Wears Prada
		</div>
	)
}

export default Header
