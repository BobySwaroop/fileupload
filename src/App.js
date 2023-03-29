
import { useState, useEffect } from "react";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
function App() {
  const [image , setImage] = useState(null);
  const [imageList, setimagelist] = useState([]);
  const imagelistref = ref(storage, 'images/');


  const uploadImage = () =>{
     if(image == null) return;
     const imageRef = ref(storage, `images/${image.name + v4() }`);
     uploadBytes(imageRef, image).then((snaphsot)=>{
      getDownloadURL(snaphsot.ref).then((url)=>{
        setimagelist((prev) => [...prev, url]);
      })
         
     });
  };
  useEffect(()=>{
   listAll(imagelistref).then((res) => {
    res.items.forEach((item) => {
      getDownloadURL(item).then((url) => {
        setimagelist((prev)=> [...prev, url]); 
      })
    })
   });
  },[]);
  return (
    <div className="container">
      <div class="input-group mt-4">
        <input
          type="file"
          class="form-control"
          id="inputGroupFile04"
          aria-describedby="inputGroupFileAddon04"
          aria-label="Upload"
          onChange={(e) =>{ setImage(e.target.files[0])}}
        />
        <button
          class="btn btn-outline-secondary"
          type="button"
          id="inputGroupFileAddon04"
          onClick={uploadImage}
        >
          Upload
        </button>
        <br />
        
      </div>
      <div class="container text-center">
  <div class="row">
    <div class="col">
    {imageList.map((url)=> {
          return <img src={url} width="100px" height="80px" /> 
          
        })}
    </div>
    
  </div>
</div>
      
    </div>
  );
}

export default App;
