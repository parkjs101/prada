import styles from '../Css/photoarchive.module.css'
import { useState, useEffect } from "react"
import { db } from "./firebase"
import { collection, getDocs, orderBy, query } from "firebase/firestore"
import { useHorizontalScroll } from "./useSideScroll";

function PhotoArchive() {
  const [images, setImages] = useState([])
  const imagesCollectionRef = collection(db, "images")

  useEffect(() =>{
    const getImages = async () => {
      const data = await getDocs(query(imagesCollectionRef, orderBy("timestamp", "desc")));
      setImages(data.docs.map(( doc ) => ({...doc.data(), id: doc.id}) ))
    }
    getImages()
    console.log("asdasds")
  }, [])

  const scrollRef = useHorizontalScroll();

  return (
    <div className={styles.main} ref={scrollRef}>
      {images.map((image) => {
        return <img src={image.code} className={styles.image} alt='images' />
      })}
    </div>
  )
}

export default PhotoArchive
