import styles from '../Css/photoarchive.module.css'
import { useState, useEffect } from "react"
import { db } from "./firebase"
import { collection, getDocs } from "firebase/firestore"

function PhotoArchive() {
  const [images, setImages] = useState([])
  const imagesCollectionRef = collection(db, "images")

  useEffect(() =>{

    const getImages = async () => {
      const data = await getDocs(imagesCollectionRef);
      setImages(data.docs.map(( doc ) => ({...doc.data(), id: doc.id}) ))
    }
    getImages()

  }, [])


  return (
    <div className={styles.main}>
      {images.map((image) => {
        return <img src={image.code} className={styles.image} />
      })}
    </div>
  )
}

export default PhotoArchive
