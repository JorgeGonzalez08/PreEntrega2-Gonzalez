import CartWidget from "./CartWidget"
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <nav className="flex dark:bg-purple-950 items-center relative justify-between bg-white px-10 py-6 w-full">
      <div>
        <Link to="/"><h1 className="text-2xl dark:text-white">StarPhone</h1></Link>
      </div>
      <ul id="drawer" role="menu" className="sm:gap-4 transition-left ease-[cubic-bezier(0.4, 0.0, 0.2, 1)] delay-150  sm:flex  flex flex-col cursor-pointer absolute min-h-screen -left-48 sm:static w-48 top-0 bg-white sm:shadow-none shadow-xl sm:bg-transparent sm:flex-row sm:w-auto sm:min-h-0 dark:bg-purple-950  ">

        <li className="font-medium text-sm p-3 hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-primary">
          <Link to="/" className="dark:text-white hover:underline">Todos</Link>
        </li>
        <li className="font-medium text-sm p-3 hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-primary">
          <Link to="/brand/Apple" className="dark:text-white hover:underline">Apple</Link>
        </li>
        <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
          <Link to="/brand/Samsung" className="dark:text-white hover:underline">Samsung</Link>
        </li>
        <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
          <Link to="/brand/Huawei" className="dark:text-white hover:underline">Huawei</Link>
        </li>
        <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
          <Link to="/brand/Realme" className="dark:text-white hover:underline">Realme</Link>
        </li>
        <li className="font-medium text-sm p-3 cursor-pointer hover:bg-slate-300 dark:hover:bg-slate-800 sm:p-0 sm:hover:bg-transparent text-gray-600 hover:text-primary transition-colors">
          <Link to="/brand/Oppo" className="dark:text-white hover:underline">Oppo Reno</Link>
        </li>
      </ul>
      <div className="flex gap-3 items-center">
        <CartWidget count={0} />
      </div>
    </nav>
  )
}

export default NavBar