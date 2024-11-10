import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { getProducts, getProductsBrand } from '../asyncMock.js'
import ItemList from "./ItemList.jsx"

function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const { brandId } = useParams();

    useEffect(() => {
        const asyncFunction = brandId ? getProductsBrand : getProducts
        asyncFunction(brandId)
            .then(data => setProducts(data))
    }, [brandId])

    return (
        <main>
            <ItemList products={products} />
        </main>
    )
}

export default ItemListContainer