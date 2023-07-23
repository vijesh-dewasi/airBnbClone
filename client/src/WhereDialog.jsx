import React from 'react'

const WhereDialog = () => {
  return (
    <div className='z-50  bg-smoke absolute mob4:p-8 mx600:p-2 rounded-xl text-gray-600 flex flex-col gap-2 '>
     <p className='font-semibold text-base text-black mx600:text-sm'>search by region</p>
     <div className='mx600:overflow-x-scroll   mob4:overflow-y-scroll max-h-64 flex mob4:flex-wrap mob4:gap-4 mx600:gap-2 mob4:w-c26 mx600:w-52'>    
        <div className='flex flex-col gap-2 mob4:w-24 mx600:w-c10 rounded-lg '>
            
             <div className='mx600:min-w-c10 rounded-lg border border-gray-400 overflow-hidden'>
            <img src="/assets/asset 0.jpeg" alt="" />
             </div>
            <p className="mx600:text-sm"> Im flexbie</p>
        </div> 
        <div className='flex flex-col gap-2 mob4:w-24 mx600:w-c10 rounded-lg '>
             <div className='mx600:min-w-c10 rounded-lg border border-gray-400 overflow-hidden'>
            <img src="/assets/asset 1.webp" alt="" />
             </div>
            <p className="mx600:text-sm"> Europe</p>
        </div> 
        <div className='flex flex-col gap-2 mob4:w-24 mx600:w-c10 rounded-lg '>
             <div className='mx600:min-w-c10 rounded-lg border border-gray-400 overflow-hidden'>
            <img src="/assets/asset 2.webp" alt="" />
             </div>
            <p className="mx600:text-sm">united kingdom</p>
        </div> 
        <div className='flex flex-col gap-2 mob4:w-24 mx600:w-c10 rounded-lg '>
             <div className='mx600:min-w-c10 rounded-lg border border-gray-400 overflow-hidden'>
            <img src="/assets/asset 3.webp" alt="" />
             </div>
            <p className="mx600:text-sm"> south east asia</p>
        </div> 
        <div className='flex flex-col gap-2 mob4:w-24 mx600:w-c10 rounded-lg '>
             <div className='mx600:min-w-c10 rounded-lg border border-gray-400 overflow-hidden'>
            <img src="/assets/asset 4.webp" alt="" />
             </div>
            <p className="mx600:text-sm">Italy</p>
        </div> 
        <div className='flex flex-col gap-2 mob4:w-24 mx600:w-c10 rounded-lg '>
             <div className='mx600:min-w-c10 rounded-lg border border-gray-400 overflow-hidden'>
            <img src="/assets/asset 5.webp" alt="" />
             </div>
            <p className="mx600:text-sm">united states</p>
        </div> 
     </div>
     </div>
  )
}

export default WhereDialog