import { Link } from "react-router-dom"

function Item({ product }) {
    let lastPrice = product.price.length - 1;
    return (
        <div className="my-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-purple-200 bg-white hover:shadow-lg hover:shadow-purple-950">
            <div className="relative mx-3 mt-3 flex justify-center h-64 overflow-hidden rounded-xl" >
                <img className="peer cursor-pointer absolute top-0 w-48 h-full" src={product.images[0]} alt={product.title} />
                <img className="peer cursor-pointer absolute -bottom-96 w-48 h-full transition-all delay-0 duration-1000 hover:bottom-0 peer-hover:bottom-0" src={product.images[1]} alt="product image" />
                <svg className="pointer-events-none absolute inset-x-0 bottom-0 mx-auto w-8 h-8 transition-opacity group-hover:animate-ping group-hover:opacity-30 peer-hover:opacity-0" fill="rgb(107 33 168)" version="1.1" id="Icons" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M24.4,24c-0.9,0-1.8-0.3-2.5-1l-5.8-5.7c-0.1-0.1-0.2-0.1-0.3,0L10.1,23c-1.4,1.4-3.6,1.4-5,0c-0.7-0.7-1-1.6-1-2.5 c0-1,0.4-1.8,1-2.5l9.4-9.3c0.9-0.9,2.3-0.9,3.1,0l9.4,9.3c0.7,0.7,1,1.6,1,2.5c0,1-0.4,1.8-1,2.5C26.2,23.7,25.3,24,24.4,24z"></path> </g> </g></svg>
            </div>
            <div className="mt-4 px-5 pb-5">
                <a href="#">
                    <h5 className="text-xl tracking-tight text-slate-900">{product.title}</h5>
                </a>
                <div className="mt-2 mb-5 flex items-center justify-between">
                    <p>
                        <span className="text-3xl font-bold text-slate-900">${`${product.price[0]} - $${product.price[lastPrice]}`}</span>
                    </p>
                </div>
                <Link to={`/detail/${product.code}`} className="flex items-center justify-center rounded-md bg-purple-950 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-purple-800">VER MAS</Link>
            </div>
        </div>
    )
}

export default Item