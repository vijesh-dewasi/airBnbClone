import React, { useState } from 'react'


const aslide = (props) => {
   const setclick = props.setslideno_prop;
   const isclick=props.slide_no_prop;
   const i = props.i;
   return ( 

<div onClick={()=>{setclick(i)}} className={`m-auto flex-col gap pb-2  max-w-icon hover:opacity-100 hover:border-b-4 ${isclick!=i?"opacity-50":"opacity-100 border-b-black border-b-4"}`} >
  <div className='mx600:w-5  w-7  mx-auto '>
    <img className="w-full " src="/assets/asset 46.jpeg" alt="" />
  </div>
  <p className='text-sm hover:text-black'>Desert</p>
</div>

  )
}

export default aslide
