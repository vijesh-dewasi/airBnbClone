import {useState} from 'react'
export default function taxbutton(){
    const [taxButton,setTax]=useState(0);
  return (
    <div className=" m-auto tab1:w-1/2 border-2 py-3 rounded-lg border-gray-200  p-4 items-center flex justify-between">
    <div className="lg:flex lg:gap-2 ">
        <p className="text-sm font-semibold">Display total price</p>
        <div className='lg:border-l lg:border-gray-200'></div>
        <p className="text-sm text-gray-400">Includes all fees, before taxes</p>
    </div> 
    <div onClick={()=>{setTax(!taxButton)}} className={`w-12 relative h-7 rounded-full  ${taxButton?"bg-black":"bg-gray-200"}`}>
       <div className={` transition-transform absolute flex justify-center items-center h-7 w-7 rounded-full border-2 bg-white ${taxButton?"translate-x-3/4 border-black":"translate-x-0 border-gray-200"}`}>
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className={`w-3 h-3 ${taxButton?"":"invisible"}`}>
<path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
</svg>

       </div>
    </div>
  </div>
  )
}
