import { ReactComponent as Refresh } from "../assets/refresh.svg"
import styles from '../Css/refreshbuttion.module.css'

function RefreshButton(props) {

	return (
		<div className={styles.main} onClick={props.refresh} >
			<Refresh />
		</div>
	)
}

export default RefreshButton
