import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GiEarthAmerica } from "react-icons/gi";
import { SiWeb3Dotjs } from "react-icons/si";
import { IoMdCloudDone } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";

export default function Home() {
  return (
    <>
      <section className="header max-h-860-px relative flex h-screen items-center pt-16">
        <div className="container mx-auto flex flex-wrap items-center">
          <div className="w-full px-4 md:w-8/12 lg:w-6/12 xl:w-6/12">
            <div className="pt-32 sm:pt-0">
              <h2 className="text-slate-500 text-4xl font-semibold">Integrate Technology, Creating Value</h2>
              <p className="text-slate-500 mt-4 text-lg leading-relaxed">
                BEEU Tech integrates digital technology into businesses to deliver value to our customers. Optimize every aspect of your business from strategy to operations for added resilience, efficiency, and engagement.
              </p>
              <div className="mt-4">
                <Button className="bg-slate-700 p-6">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
        <img className="b-auto max-h-860-px absolute right-0 top-0 -mt-48 w-10/12 pt-16 sm:mt-0 sm:w-6/12" src="https://demos.creative-tim.com/notus-nextjs/img/pattern_nextjs.png" alt="..." />
      </section>


      <section className="bg-slate-100 relative mt-48 pb-40 md:mt-40">
        <div className="absolute bottom-auto left-0 right-0 top-0 -mt-20 h-20 w-full" style={{ "transform": "translateZ(0px);" }}>
          <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0"><polygon className="text-slate-100 fill-current" points="2560 0 2560 100 0 100"></polygon></svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="-mt-32 ml-auto mr-auto w-10/12 px-12 md:w-6/12 md:px-4 lg:w-4/12">
              <div className="bg-slate-700 relative mb-6 flex w-full min-w-0 flex-col break-words rounded-lg shadow-lg">
                <img alt="..." src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80" className="w-full rounded-t-lg align-middle" />
                <blockquote className="relative mb-4 p-8">
                  <svg preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 583 95" className="h-95-px -top-16 absolute left-0 block w-full"><polygon points="-30,95 583,95 583,65" className="text-slate-700 fill-current"></polygon></svg>
                  <h4 className="text-xl font-bold text-white">More Than Just A Proven Software Development Company</h4>
                  <p className="text-md mt-2 font-light text-white">
                    At BEEU Tech, our aim is to build a leading IT company that offers real value to customers, employees, and stakeholders. Our slogan, “Centillion Possibilities,” reflects our commitment to making the client experience delightful in countless ways.</p>
                </blockquote>
              </div>
            </div>
            <div className="w-full px-4 md:w-6/12">
              <div className="flex flex-wrap">
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative mt-4 flex flex-col">
                    <div className="flex-auto px-4 py-5">
                      <div className="text-slate-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg">                  <GiEarthAmerica className="size-8"></GiEarthAmerica>
                      </div>
                      <h6 className="mb-1 text-xl font-semibold">Software Development</h6>
                      <p className="text-slate-500 mb-4">Crafting innovative, custom software solutions to drive your business forward efficiently and effectively.</p>
                    </div>
                  </div>
                  <div className="relative flex min-w-0 flex-col">
                    <div className="flex-auto px-4 py-5">
                      <div className="text-slate-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg"><IoMdCloudDone className="size-8"/></div>
                      <h6 className="mb-1 text-xl font-semibold">Cloud Operations</h6>
                      <p className="text-slate-500 mb-4">Ensuring seamless cloud performance with optimized management and continuous monitoring.</p>
                    </div>
                  </div>
                </div>
                <div className="w-full px-4 md:w-6/12">
                  <div className="relative mt-4 flex min-w-0 flex-col">
                    <div className="flex-auto px-4 py-5">
                      <div className="text-slate-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg"><SiWeb3Dotjs className="size-8" /></div>
                      <h6 className="mb-1 text-xl font-semibold">Web 3.0</h6>
                      <p className="text-slate-500 mb-4">Empowering decentralized applications and blockchain solutions for a more transparent and user-centric internet.</p>
                    </div>
                  </div>
                  <div className="relative flex min-w-0 flex-col">
                    <div className="flex-auto px-4 py-5">
                      <div className="text-slate-500 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white p-3 text-center shadow-lg"><IoShieldCheckmark className="size-8" /></div>
                      <h6 className="mb-1 text-xl font-semibold">IOT</h6>
                      <p className="text-slate-500 mb-4">Connecting devices seamlessly to enhance efficiency, automation, and data-driven decision-making.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>



          </div>
        </div>


      </section>

    </>
  );
}
