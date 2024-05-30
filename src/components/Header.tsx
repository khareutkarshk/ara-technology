import React from 'react'
import Link from 'next/link'
function Header() {
  return (
    <div>
      <nav className="navbar-expand-lg fixed top-0 z-50 flex w-full flex-wrap items-center justify-between bg-white px-2 py-3 shadow">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="relative flex w-full justify-between lg:static lg:block lg:w-auto lg:justify-start">
            <Link className="text-slate-700 mr-4 inline-block whitespace-nowrap py-2 text-sm font-bold uppercase leading-relaxed" href="/">Notus NextJS</Link>
          </div>
          <div className="hidden flex-grow items-center bg-white lg:flex lg:bg-opacity-0 lg:shadow-none" id="example-navbar-warning">

            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <Link className="text-slate-700 hover:text-slate-500 text-sm font-bold uppercase px-3 py-4 lg:py-2 flex items-center" href="/">
                  <span className="inline-block ml-2">Home</span>
                </Link>
              </li>
              <li className="flex items-center">
                <a className="text-slate-700 hover:text-slate-500 text-sm font-bold uppercase px-3 py-4 lg:py-2 flex items-center" href="/technology">
                 <span className="inline-block ml-2">Technology</span>
                </a>
              </li>
              <li className="flex items-center">
                <a className="text-slate-700 hover:text-slate-500 text-sm font-bold uppercase px-3 py-4 lg:py-2 flex items-center" href="/career">
                  <span className="inline-block ml-2">Carrer</span>
                </a>
              </li>
              <li className="flex items-center">
                <a className="text-slate-700 hover:text-slate-500 text-sm font-bold uppercase px-3 py-4 lg:py-2 flex items-center" href="/contact">
                 <span className="inline-block ml-2">Contact</span>
                </a>
              </li>
            </ul>
          

          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
