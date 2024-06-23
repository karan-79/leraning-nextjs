"use client"
import classes from './image-picker.module.css'
import {useRef, useState} from "react";
import Image from 'next/image'

const ImagePicker = ({label, name}) => {

    const inp = useRef()
    const [image, setImage] = useState()

    const handleImagePick = () => {
        inp.current.click()
    }

    const handlePickedImage = (event) => {
        const file = event.target.files[0]
        if(!file) return
        const fr = new FileReader();
        fr.onload = () => {
           setImage(fr.result)
        }
        fr.readAsDataURL(file)
    }

    return <div className={classes.picker}>
        <label htmlFor="image">{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>
                {!image && <p> No image picked</p>}
                {image && <Image src={image} alt="selected image" fill/>}
            </div>
            <input
                ref={inp}
                className={classes.input}
                type="file"
                onChange={handlePickedImage}
                id={name}
                accept="image/png, image/jpeg"
                name={name}
                required
            />
            <button className={classes.button} onClick={handleImagePick} type="button">Pick an Image< /button>
        </div>
    </div>
}

export default ImagePicker