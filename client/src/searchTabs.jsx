import React from 'react'
import { useState } from 'react';
import WhereDialog from './WhereDialog'
import CheckinDialog from './CheckinDialog.jsx'
import CheckoutDialog from './CheckoutDialog.jsx'
import GuestDialog from './GuestDialog'

const SearchTab = (props) => {
  const [which_click,setclick] = useState(0);
  const setter = props.setter
  return (
    <div className='bg-white min-h-20c flex justify-center items-center'>
         <div className=' text-sm text-gray-600 pr-1 flex  border border-gray-400 rounded-full'>
             <div onClick={()=>{
              if(which_click==1){
              setclick(-1)
              return
              }
              setclick(1)}} className='rounded-full py-2 px-6 hover:bg-gray-200 relative'>
              <p  className='text-black font-bold' >where</p>
              <p>search destination</p>
              {which_click==1?<WhereDialog></WhereDialog>:""}
             </div>
             <div onClick={()=>{
              if(which_click==2){
              setclick(-1)
              return
              }
              setclick(2)}} className='rounded-full py-2 px-6 hover:bg-gray-200 relative'>
              <p className='text-black font-bold' >check in</p>
              <p>add dates</p>
              {which_click==2?<CheckinDialog></CheckinDialog>:""}
             </div>
             <div onClick={()=>{
              if(which_click==3){
              setclick(-1)
              return
              }
              setclick(3)}} className='rounded-full py-2 px-6 hover:bg-gray-200 relative'>
              <p className='text-black font-bold' >check out</p>
              <p>add dates</p>
              {which_click==3?<CheckoutDialog></CheckoutDialog>:""}
             </div>
             <div onClick={()=>{
              if(which_click==4){
              setclick(-1)
              return
              }
              setclick(4)}} className='rounded-full py-2 px-6 hover:bg-gray-200 relative'>
              <p className='text-black font-bold' >who</p>
              <p>add guests</p>
              {which_click==4?<GuestDialog></GuestDialog>:""}
             </div>
             <div className='p-2'>
             <button onClick={()=>{setter(0)}} className='bg-primary p-3 border-gray-300 rounded-full'>
                            <svg className='w-4 h-4' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                        </button>
              </div>
         </div>
    </div>
  )
}

export default SearchTab