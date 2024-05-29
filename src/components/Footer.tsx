import React from 'react'

function Footer() {
    return (
        <footer className="block py-4">
            <div className="container mx-auto px-4">
                <hr className="border-b-1 border-slate-200 mb-4" />
                <div className="flex flex-wrap items-center justify-center md:justify-between">
                    <div className="w-full px-4 md:w-4/12">
                        <div className="text-slate-500 py-1 text-center text-sm font-semibold md:text-left">
                            Copyright ©
                            <a href="https://www.creative-tim.com?ref=nnjs-footer-admin" className="text-slate-500 hover:text-slate-700 py-1 text-sm font-semibold">Creative Tim</a>
                        </div>
                    </div>
                    <div className="w-full px-4 md:w-8/12">
                        <ul className="flex list-none flex-wrap justify-center md:justify-end">
                            <li><a href="https://www.creative-tim.com?ref=nnjs-footer-admin" className="text-slate-600 hover:text-slate-800 block px-3 py-1 text-sm font-semibold">Creative Tim</a></li>
                            <li><a href="https://www.creative-tim.com/presentation?ref=nnjs-footer-admin" className="text-slate-600 hover:text-slate-800 block px-3 py-1 text-sm font-semibold">About Us</a></li>
                            <li><a href="http://blog.creative-tim.com?ref=nnjs-footer-admin" className="text-slate-600 hover:text-slate-800 block px-3 py-1 text-sm font-semibold">Blog</a></li>
                            <li><a href="https://github.com/creativetimofficial/notus-nextjs/blob/main/LICENSE.md?ref=nnjs-footer-admin" className="text-slate-600 hover:text-slate-800 block px-3 py-1 text-sm font-semibold">MIT License</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
