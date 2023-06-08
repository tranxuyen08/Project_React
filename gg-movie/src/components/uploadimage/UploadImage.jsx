import React, { useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../firebase";
const UploadImage = () => {
  const [imageList, setImageList] = useState([])
  const handleOnChange = (e) => {
    const fileImage = e.target.files[0];
    if (!fileImage) return;
    const storages = storage
    const imgRefs = ref(storages, `image/${fileImage.name}`)
    uploadBytes(imgRefs, fileImage).then((snapshot) =>{
      getDownloadURL(snapshot.ref).then((url) =>{
        setImageList([...imageList, url])
      })
    })
  };
  return (
    <div>
      <input type="file" multiple onChange={handleOnChange} />
      {imageList.map((img, index) => (
        <img key={index} src={img} alt={`Image ${index}`} />
      ))}
    </div>
  );
};

export default UploadImage;
