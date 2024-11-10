import { useState } from "react"
import { Link } from "react-router-dom"
import '../index.css'
function ItemDetail({ title, code, images = [], price = [], storage = [], colors = [], description }) {
  let lastPrice = price.length - 1;
  const [count, setCount] = useState(1);

  const decrement = () => {
    if (count > 1) {
      setCount(count - 1)

    }
  }

  return (
    <section className="main__product">
      <div className="main__images">
        <div className="main__gallery">
          {images.map((image, index) => (
            <img className="main__gallery-image" key={index} src={image} alt={`Imagen ${index + 1}`} />
          ))}

        </div>
        <img className="main__image" alt={title} src={images[0]} />
      </div>
      <div className="main__desc">
        <p className="main__desc-title">{title}</p>
        <p className="main__desc-code">Código de Producto: {code}</p>
        <p className="main__desc-price">${price[0]} - ${price[lastPrice]}</p>

        <p className="main__desc-text">Color: <span className="color"></span></p>
        <div className="main__desc-colors">
          {colors.map((color, index) => <button key={index} className="main__desc-color" style={{ backgroundColor: color, color, border: "1px", borderColor: "black", borderStyle: "solid" }}>{color}</button>)}
        </div>
        <p className="main__desc-text">Almacenamiento: <span className="storage"></span></p>
        <div className="main__desc-storages">
          {storage.map((itemStorage, index) => <button key={index} className="main__desc-button">{itemStorage}</button>)}
        </div>
        <div className="main__desc-buttons">
          <button className="main__desc-button" onClick={decrement}><i className="fa-solid fa-minus" aria-hidden="true"></i></button>
          <p className="main__desc-amount">{count}</p>
          <button className="main__desc-button" onClick={() => setCount(count => count + 1)}><i className="fa-solid fa-plus" aria-hidden="true"></i></button>
        </div>
        <button className="main__desc-button width">AGREGAR AL CARRITO</button>
        <p className="main__desc-text">Descripcion: </p>
        <p className="description">{description}</p>
      </div>
    </section>
  )
}

export default ItemDetail