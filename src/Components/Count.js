import {useState, useEffect} from 'react'

const Count = (props) => {
	const [num, setNum] = useState(3)
	useEffect(() => {
			num > 0 && setTimeout(() => setNum(num - 1), 1000);
			if (num === 0) {
				props.confirm()
			}
	}, [num]);

	return (
		<div>{num}</div>
	);
}

export default Count
