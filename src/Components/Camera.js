import React, {useCallback, useEffect, useRef, useState} from 'react'
import Webcam from 'react-webcam';
import { db } from "./firebase"
import { collection, addDoc } from "firebase/firestore"
import styles from '../Css/camera.module.css'
import Count from './Count';

function Camera() {
  
  const [isStarted, setIsStarted] = useState(false);
  const imagesCollectionRef = collection(db, "images")
  const videoConstraints = {
    width: 800,
    height: 600,
    facingMode: "user"
  };
  const imageRef = useRef([""])
  const createImage = async () => {
    addDoc(imagesCollectionRef, {code: imageRef.current, timestamp: new Date()})
  }
  const webcamRef = useRef(null);

  const cancelConfirm = () => {
    setIsStarted(false)
    console.log("취소했습니다.")
  }
  const saveConfirm = useCallback(
    () => {
      setIsStarted(false)
      console.log("저장되었습니다.")
      alert("앨범에 저장되었습니다")
      console.log(imageRef.current)
      createImage();
    },
    [webcamRef])

  function capture() {
    imageRef.current  = webcamRef.current.getScreenshot()
    }

  const useConfirm = () => {
    if (isStarted){
      capture()
      const confirmAction = () => {
        if (window.confirm("저장하시겠습니까?")) {
          saveConfirm();
        }
        else {
          cancelConfirm();
        }
      };
      return confirmAction();
    }
  }

  const useStart = () => {
    setIsStarted(!isStarted)
  };

  const onClosePopup = () => {
    window.close();
  };

  return (
    <div className={styles.main}>
      <Webcam
        audio={false}
        width={800}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        videoConstraints={videoConstraints}
        mirrored={true}
      >
      </Webcam>
      <div className={styles.timer}>{isStarted && <Count confirm={useConfirm}/>}</div>
      <button onClick={useStart}>Capture photo</button>
      <button onClick={onClosePopup}>Close</button>
    </div>
  );
  
}

export default Camera
