import { useEffect } from "react"
import { Link } from "react-router-dom"


const PageNotFound = () => {

  useEffect(()=>{
    document.title = ` Page Not Found / Cinema`
  },)

  return (
    <main>
      <section className="flex flex-col justify-center px 2"> 
        <div className="flex flex-col items-center my-4">
          <p className="text-6xl text-gray-700 font-bold my-10 dark:text:text-white"> 404, Oops!</p>
          <img className="rounded" src="https://colorlib.com/wp/wp-content/uploads/sites/2/404-not-found-error-page-examples.png" alt="404 Page Not Found" />
        </div>
        <div className="flex justify-center my-4">
          <Link className="w-64 text-xl bg-gradient-to-r from-red-100 via-red-400 to-red-900 rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium text-black" to="/"><button>Back To My-Cinema</button></Link>
        </div>
      </section>
    </main>
  )
}

export default PageNotFound
