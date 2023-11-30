import { Component } from 'react'
import { Link, useLocation } from 'react-router-dom'

export class PageError extends Component {
   
  render() {

    return (
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
          <div className="text-center">
            <img id='floating' className='max-w-sm' src='https://i.ibb.co/HDxg3Zc/undraw-Page-not-found-re-e9o6.png' alt='error page'/>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Unauthorized Access!</h1>
            <p className="mt-6 text-base leading-7 text-gray-600">Sorry,You dont have access to this page</p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to='/'
                className="rounded-md bg-[#FE325B] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#fc0939] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Go back home
              </Link>
              <a href="#" className="text-sm font-semibold text-gray-900">
                Contact support <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </main>
    )
  }
}

export default PageError