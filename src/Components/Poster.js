import P7 from '../assets/p7.png'
import P6 from '../assets/p6.png'
import P5 from '../assets/p5.png'
import P4 from '../assets/p4.png'
import P3 from '../assets/p3.png'
import P2 from '../assets/p2.png'
import P1 from '../assets/p1.png'


import styles from "../Css/poster.module.css"

function Poster(props) {
  const posters = [
    {v: P7},
    {v: P6},
    {v: P5},
    {v: P4},
    {v: P3},
    {v: P2},
    {v: P1},
  ]
  
  return (
    <div className={styles.main}>
      <img src={posters[props.num].v} alt='img'/>
    </div>
  )
}

export default Poster
