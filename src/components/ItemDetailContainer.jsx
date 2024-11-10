import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProductsId } from "../asyncMock"
import ItemDetail from "./ItemDetail"

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const { productId } = useParams();

  useEffect(() => {
    getProductsId(productId)
      .then(data => {
        setProduct(data)

      })
  }, [productId])


  return (
    <>
      <ItemDetail {...product} />
    </>
  )
}

export default ItemDetailContainer