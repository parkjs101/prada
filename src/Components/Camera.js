import React, {useCallback, useRef} from 'react'
import Webcam from 'react-webcam';
import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore"
import styles from '../Css/camera.module.css'


function Camera() {

  const imagesCollectionRef = collection(db, "images")

  const videoConstraints = {
    width: 300,
    height: 400,
    facingMode: "user"
  };

  const imageRef = useRef([""])

  const createImage = async () => {
    addDoc(imagesCollectionRef, {code: imageRef.current})
  }
  
  const webcamRef = useRef(null);

  const capture = useCallback(
    () => {
      console.log(2);
      const imageSrc = webcamRef.current.getScreenshot();
      imageRef.current = imageSrc
    },
    [webcamRef])

  const save = useCallback(
    () => {
      console.log(1)
      console.log(imageRef.current)
      createImage();
    },
    [webcamRef])

  return (
    <div>
      <div className={styles.main}>
        <Webcam
          audio={false}
          width={300}
          height={400}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          mirrored={true}
          />
      </div>
      <button onClick={capture}>Capture photo</button>
      <button onClick={save}>Save photo</button>
    </div>
  );
}

export default Camera
