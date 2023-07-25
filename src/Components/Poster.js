import { ReactComponent as P7} from '../assets/p7.svg'
import { ReactComponent as P6} from '../assets/p6.svg' 
import { ReactComponent as P5} from '../assets/p5.svg' 
import { ReactComponent as P4} from '../assets/p4.svg' 
import { ReactComponent as P3} from '../assets/p3.svg' 
import { ReactComponent as P2} from '../assets/p2.svg' 
import { ReactComponent as P1} from '../assets/p1.svg' 

import styles from "../Css/poster.module.css"

function Poster(props) {
  const posters = [
    { 
      v: <P7 />
    },
    { 
      v: <P6 />
    },
    { 
      v: <P5 />
    },
    { 
      v: <P4 />
    },
    { 
      v: <P3 />
    },
    { 
      v: <P2 />
    },
    { 
      v: <P1 />
    }
  ]
  
  return (
    <div className={styles.main}>
      {posters[props.num].v}
    </div>
  )
}

export default Poster
