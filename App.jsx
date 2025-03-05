import { useEffect, useState } from "react";
import './App.css'

 function App() {
  const [images, setImages] = useState([]);
  const [id, setId] = useState(0);

  const addImage = async() => {
    setId (id + 1)
    const newImage = await fetch(`https://picsum.photos/id/${id}/200/300`)
    setImages([...images, {id, url: newImage.url}]);
  };

  const searchImage = () => {
    mensaje = "no pude profe"
  };

  
    return (
      <>
        <h>Generador de imágenes</h>
        <div>
        <button onClick={addImage}>Agregar imagen</button>
        </div>
        <input type= "text"
        placeholder="buscar por id..."/>
        <button onClick={searchImage}>Buscar</button>
        <ul>
          {images.map(item => {
            return (
              <li>
                <h2>{item.id}</h2>
                <img src={item.url}/>
              </li>
            )
          })}
        </ul>
        
      </>
    );
}
export default App;
