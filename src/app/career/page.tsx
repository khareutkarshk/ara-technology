import React from 'react'
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiTeamLine } from "react-icons/ri";
import { GiStairsGoal } from "react-icons/gi";
import { FaRocket } from "react-icons/fa";
import { PiRocketLight } from "react-icons/pi";
import { FaEnvira } from "react-icons/fa6";
import { GiFallingRocks } from "react-icons/gi";

function page() {
    return (
        <>
            <main>
                <div className="min-h-screen-75 relative flex content-center items-center justify-center pb-32 pt-16">
                    <div className="absolute top-0 h-full w-full bg-cover bg-center" style={{ "backgroundImage": "url(https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1267&q=80&quot)" }}><span id="blackOverlay" className="absolute h-full w-full bg-black opacity-75"></span></div>
                    <div className="container p-14 relative mx-auto">
                        <div className="flex flex-wrap items-center">
                            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-6/12">
                                <div>
                                    <h1 className="text-5xl font-semibold text-white">Discover your
                                            new career</h1>
                                    <p className="text-slate-200 mt-4 text-lg">Discover exciting career opportunities, grow your skills, and contribute to our innovative and dynamic team.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="pointer-events-none absolute bottom-0 left-0 right-0 top-auto h-16 w-full overflow-hidden" style={{ "transform": "translateZ(0)" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon className="text-slate-200 fill-current" points="2560 0 2560 100 0 100"></polygon></svg>
                    </div>
                </div>
                <section className="bg-slate-200 -mt-24 pb-20">
                    <div className="container mx-auto px-4">
                        <div className="flex flex-wrap">
                            <div className="w-full px-4 pt-6 text-center md:w-4/12 lg:pt-12">
                                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                                    <div className="flex-auto px-4 py-5">
                                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-red-400 p-3 text-center text-white shadow-lg"><HiOutlineLightBulb className='size-8'></HiOutlineLightBulb></div>
                                        <h6 className="text-xl font-semibold">Innovate Here</h6>
                                        <p className="text-slate-500 mb-4 mt-2">Join our forward-thinking team where innovation meets excellence. Your ideas can drive change and shape our future.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 text-center md:w-4/12">
                                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                                    <div className="flex-auto px-4 py-5">
                                        <div className="bg-blue-400 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full p-3 text-center text-white shadow-lg"><GiStairsGoal className='size-8'></GiStairsGoal></div>
                                        <h6 className="text-xl font-semibold">Grow Skills</h6>
                                        <p className="text-slate-500 mb-4 mt-2">Enhance your skills and advance your career with our extensive training programs and continuous learning opportunities.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full px-4 pt-6 text-center md:w-4/12">
                                <div className="relative mb-8 flex w-full min-w-0 flex-col break-words rounded-lg bg-white shadow-lg">
                                    <div className="flex-auto px-4 py-5">
                                        <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-400 p-3 text-center text-white shadow-lg"><RiTeamLine className='size-8'></RiTeamLine></div>
                                        <h6 className="text-xl font-semibold">Team Spirit</h6>
                                        <p className="text-slate-500 mb-4 mt-2">Be part of a collaborative and supportive work environment where teamwork and mutual respect are at the heart of everything we do.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-32 flex flex-wrap items-center">
                            <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
                                <div className="text-slate-500 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg"><RiTeamLine className='size-10'></RiTeamLine></div>
                                <h3 className="mb-2 text-3xl font-semibold leading-normal">Working with us is a pleasure</h3>
                                <p className="text-slate-600 mb-4 mt-4 text-lg font-light leading-relaxed">At our company, we prioritize your growth, well-being, and success. Join our vibrant team, where collaboration and innovation drive us forward.</p>
                                <p className="text-slate-600 mb-4 mt-0 text-lg font-light leading-relaxed">Together, let's create a fulfilling career journey tailored to your aspirations and passions.</p>
                                
                            </div>
                            <div className="ml-auto mr-auto w-full px-4 md:w-4/12">
                                <div className="bg-slate-700 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg shadow-lg">
                                    <img alt="..." src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=1051&amp;q=80" className="w-full rounded-t-lg align-middle" />
                                    <blockquote className="relative mb-4 p-8">
                                        {/* <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="h-95-px -top-16 absolute left-0 block w-full"><polygon points="-30,95 583,95 583,65" className="text-slate-700 fill-current"></polygon></svg> */}
                                        <h4 className="text-xl font-bold text-white">Top Notch Services</h4>
                                        <p className="text-md mt-2 font-light text-white">Experience excellence with our top-notch services, tailored to meet your needs. Trust us for reliable solutions, exceptional quality, and customer satisfaction.</p>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="relative py-20">
                    <div className="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 h-20 w-full overflow-hidden" style={{ "transform": "translateZ(0)" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon className="fill-current text-white" points="2560 0 2560 100 0 100"></polygon></svg>
                    </div>
                    <div className="container mx-auto p-4">
                        <div className="flex flex-wrap gap-4 items-center">
                            <div className="ml-auto mr-auto w-full px-4 md:w-4/12"><img alt="..." className="max-w-full rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=634&amp;q=80" /></div>
                            <div className="ml-auto mr-auto w-full px-4 md:w-5/12">
                                <div className="md:pr-12">
                                    <div className="text-slate-500 bg-slate-200 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full p-3 text-center shadow-lg"><FaRocket className='size-7'></FaRocket></div>
                                    <h3 className="text-3xl font-semibold">A growing company</h3>
                                    <p className="text-slate-500 mt-4 text-lg leading-relaxed">Be part of our dynamic company. Grow your career with us and contribute to our success story. Exciting opportunities await!</p>
                                    <ul className="mt-6 list-none">
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-slate-500 bg-slate-100 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase"><PiRocketLight></PiRocketLight></span>
                                                </div>
                                                <div><h4 className="text-slate-500">Growth Opportunities</h4></div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-slate-500 bg-slate-100 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase"><FaEnvira></FaEnvira></span>
                                                </div>
                                                <div><h4 className="text-slate-500">Dynamic Environment</h4></div>
                                            </div>
                                        </li>
                                        <li className="py-2">
                                            <div className="flex items-center">
                                                <div>
                                                    <span className="text-slate-500 bg-slate-100 mr-3 inline-block rounded-full px-2 py-1 text-xs font-semibold uppercase"><GiFallingRocks></GiFallingRocks></span>
                                                </div>
                                                <div><h4 className="text-slate-500">Exciting Challenges</h4></div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-slate-800 relative block pb-20">
                    <div className="pointer-events-none absolute bottom-auto left-0 right-0 top-0 -mt-20 h-20 w-full overflow-hidden" style={{ "transform": "translateZ(0)" }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon className="text-slate-800 fill-current" points="2560 0 2560 100 0 100"></polygon></svg>
                    </div>
                    <div className="container mx-auto px-4 lg:pb-64 pb-20 pt-24">
                        <div className="flex flex-wrap justify-center text-center">
                            <div className="w-full px-4 lg:w-6/12">
                                <h2 className="text-4xl font-semibold text-white">Explore Career Opportunities

</h2>
                                <p className="text-slate-400 mb-4 mt-4 text-lg leading-relaxed">Interested in joining our team? Fill out the form below to apply for exciting career opportunities with us. We look forward to hearing from you!</p>
                            </div>
                        </div>
                        
                    </div>
                </section>
                <section className="bg-slate-800 relative block py-24 lg:pt-0">
                    <div className="container mx-auto px-4">
                        <div className="-mt-48 flex flex-wrap justify-center lg:-mt-64">
                            <div className="w-full px-4 lg:w-6/12">
                                <div className="bg-slate-200 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg shadow-lg">
                                    <div className="flex-auto p-5 lg:p-10">
                                        <h4 className="text-2xl font-semibold">Want to work with us?</h4>
                                        <p className="text-slate-500 mb-4 mt-1 leading-relaxed">Complete this form and we will get back to you.</p>
                                        <div className="relative mb-3 mt-8 w-full">
                                            <label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="full-name">Full Name</label>
                                            <input type="text" className="placeholder-slate-300 text-slate-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring" placeholder="Full Name" />
                                        </div>
                                        <div className="relative mb-3 w-full">
                                            <label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="email">Email</label>
                                            <input type="email" className="placeholder-slate-300 text-slate-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring" placeholder="Email" />
                                        </div>
                                        <div className="relative mb-3 w-full">
                                            <label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="phone">Phone</label>
                                            <input type="number" className="placeholder-slate-300 text-slate-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring" placeholder="Phone" />
                                        </div>
                                        <div className="relative mb-3 w-full">
                                            <label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="email">Skills</label>
                                            <input type="text" className="placeholder-slate-300 text-slate-600 w-full rounded border-0 bg-white px-3 py-3 text-sm shadow transition-all duration-150 ease-linear focus:outline-none focus:ring" placeholder="Enter Comma Seperated Values" />
                                        </div>
                                        <div className="relative mb-3 w-full"><label className="text-slate-600 mb-2 block text-xs font-bold uppercase" htmlFor="resume">Resume</label>

                                                        <input type="file" accept='.pdf' name="file-input" id="file-input" className="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 file:bg-gray-50 file:border-0 file:me-4 file:py-3 file:px-4 dark:file:bg-neutral-700 dark:file:text-neutral-400" />
                                                    </div>
                                        <div className="mt-6 text-center"><button className="bg-slate-800 active:bg-slate-600 mb-1 mr-1 rounded px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none" type="button">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>


        </>
    )
}

export default page
