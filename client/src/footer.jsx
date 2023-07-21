import { useState } from "react"

export default function Footer() {
     const [support,setsupport]= useState(0)
    return (
        <footer className="bg-white gap-y-4 z-30 min-w-full max-w-full flex-wrap text-sm flex justify-between p-4 border-t mob1:fixed bottom-0">
            <div className="flex gap-4">
                <p>&#169; 2023 airbnb,inc</p>
                <ul className="mx500:flex-wrap flex gap text-gray-600">
                    <span className="">.</span>
                    <li><a href="">Privacy</a></li>
                    <span className="align-middle">.</span>
                    <li><a href="">Terms</a></li>
                    <span className="align-middle">.</span>
                    <li><a href="">Sitemap</a></li>
                    <span className="align-middle">.</span>
                    <li><a href="">Company details</a></li>
                    <span className="align-middle">.</span>
                    <li><a href="">Destinations</a></li>
                </ul>
            </div>

            <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                <p>English(IN)</p>
                <p>₹</p>
                <p>INR</p>
                <button onClick={()=>{setsupport(!support)}} className="flex">support&resources
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mx800:rotate-180">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
                    </svg>
                </button>
            </div>

            {support?<div className="max-w-full p-12 bg-smoke rounded-lg mob1:absolute -bottom-full flex flex-wrap gap-y-4 gap-x-6 justify-between min-h-1/2 min-w-full">
                <button onClick={()=>{setsupport(!support)}} className="absolute left-2 top-10 ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
       <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                 </svg>

                </button>
                <div className="flex flex-col gap-y-4 gap-x-6 text-gray-600">
                    <h2 className=" text-lg text-black text-semibold">support</h2>
                    <p>helpcenter</p>
                    <p>air cover</p>
                    <p>supporting disabled</p>
                    <p>helpcenter</p>
                    <p>air cover</p>
                    <p>supporting disabled</p>
                </div>
                <div className="flex flex-col gap-y-4 text-gray-600">
                    <h2 className=" text-lg text-black text-semibold">support</h2>
                    <p>helpcenter</p>
                    <p>air cover</p>
                    <p>supporting disabled</p>
                    <p>helpcenter</p>
                    <p>air cover</p>
                    <p>supporting disabled</p>
                </div>
                <div className="flex flex-col gap-y-4 text-gray-600">
                    <h2 className=" text-lg text-black text-semibold">support</h2>
                    <p>helpcenter</p>
                    <p>air cover</p>
                    <p>supporting disabled</p>
                    <p>helpcenter</p>
                    <p>air cover</p>
                    <p>supporting disabled</p>
                </div>
                <div className="flex flex-col gap-y-4 text-gray-600">
                    <h2 className=" text-lg text-black text-semibold">support</h2>
                    <p>helpcenter</p>
                    <p>air cover</p>
                    <p>supporting disabled</p>
                    <p>helpcenter</p>
                    <p>air cover</p>
                    <p>supporting disabled</p>
                </div>
            </div>:""}

        </footer>
    )
}