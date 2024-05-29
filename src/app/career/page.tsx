import React from 'react'

function page() {
    return (
        <div>
            <div className="text-slate-700 antialiased">

                <div className="bg-slate-100 relative">
                    <div className="bg-slate-800 relative pb-32 pt-12 md:pt-32">
                    <div className="bg-full absolute top-0 h-full w-full bg-slate-800 bg-no-repeat" style={{"backgroundImage": "url(&#x27;https://demos.creative-tim.com/notus-nextjs/img/register_bg_2.png&#x27;)"}} ></div>
                        <div className="mx-auto w-full px-4 md:px-10">
                            <div>
                                <div className="flex justify-center flex-wrap">
                                    <div className="w-full px-4 lg:w-6/12 items-center xl:w-6/12">
                                        <h1 className="text-slate-100 text-center font-semibold text-4xl">Discover your
                                            new career</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="-m-24 mx-auto w-full px-4 md:px-10">

                        <div className="flex flex-wrap justify-center">
                            <div className="w-full px-4 lg:w-8/12">
                                <div className="bg-slate-100 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg border-0 shadow-lg">
                                    <div className="mb-0 rounded-t bg-white px-6 py-6">
                                        <div className="flex justify-between text-center">
                                            <h6 className="text-slate-700 text-xl font-bold">Work With Us</h6>

                                        </div>
                                    </div>
                                    <div className="flex-auto px-4 py-10 pt-0 lg:px-10">
                                        <form>
                                            <h6 className="text-slate-400 mb-6 mt-3 text-sm font-bold uppercase">General Information</h6>
                                            <div className="flex flex-wrap">
                                                <div className="w-full px-4 lg:w-6/12">
                                                    <div className="relative mb-3 w-full"><label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="name">Name</label><input name='name' placeholder='Enter Your Full Name' type="text" className="placeholder-slate-300 text-slate-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring" /></div>
                                                </div>
                                                <div className="w-full px-4 lg:w-6/12">
                                                    <div className="relative mb-3 w-full"><label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="email">Email address</label><input placeholder='Enter Your Email' name='email' type="email" className="placeholder-slate-300 text-slate-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring" /></div>
                                                </div>
                                                <div className="w-full px-4 lg:w-6/12">
                                                    <div className="relative mb-3 w-full"><label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="phone">Phone</label><input name='phone' placeholder='Enter Your Phone' type="text" className="placeholder-slate-300 text-slate-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring" /></div>
                                                </div>
                                                <div className="w-full px-4 lg:w-6/12">
                                                    <div className="relative mb-3 w-full"><label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="skills">Skills</label><input name='skills' placeholder='Enter Comma Seperated Values' type="text" className="placeholder-slate-300 text-slate-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring" /></div>
                                                </div>
                                            </div>
                                            <hr className="border-b-1 border-slate-300 mt-6" />
                                            <h6 className="text-slate-400 mb-6 mt-3 text-sm font-bold uppercase">About Me</h6>
                                            <div className="flex flex-wrap">
                                                <div className="lg:w-12/12 w-full px-4">
                                                    <div className="relative mb-3 w-full"><label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="resume">Resume</label>

                                                        <input type="file" accept='.pdf' name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400" />
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>



                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default page
