import Item from "./Item"

function ItemList({ products }) {
  return (
    <div className="mx-10 flex flex-wrap justify-start gap-16">
      {products.map(product => <Item key={product.id} product={product} />)}
    </div>
  )
}

export default ItemList