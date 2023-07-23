import React from 'react'
import { useState } from 'react';
import WhereDialog from './WhereDialog'
import CheckinDialog from './CheckinDialog.jsx'
import CheckoutDialog from './CheckoutDialog.jsx'
import GuestDialog from './GuestDialog'
import SubTag from './subTag'

const SearchTab = (props) => {
  const [which_click, setclick] = useState(props.to_select);
  const setter = props.setter

  return (
    <div className='bg-white min-h-20c flex justify-center items-center'>
      <div className='text-sm text-gray-600 pr-1 flex mx500:items-center mx500:rounded-lg mx500:py-5 mx500:flex-col border border-gray-400 rounded-full'>
        
      <div className='p-2'>
          <button onClick={() => { setter(0) }} className='mx500:inline-block hidden bg-primary p-3 border-gray-300 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div onClick={() => {
          if (which_click == 1) {
            setclick(-1)
            return
          }
          setclick(1)
        }} className={`rounded-full py-2 px-6 hover:bg-gray-200 relative ${which_click == 1 ? "bg-gray-200" : ""}`}>
          <p className='text-black font-bold' >where</p>
          <SubTag txt="search destination" />
          {which_click == 1 ? <WhereDialog></WhereDialog> : ""}
        </div>

        <div onClick={() => {
          setclick(2)
        }} className={`rounded-full py-2 px-6 hover:bg-gray-200 relative ${which_click == 2 ? "bg-gray-200" : ""}`}>
          <p className='text-black font-bold' >check in</p>
          <SubTag txt="add dates" />
          {which_click == 2 ? <CheckinDialog></CheckinDialog> : ""}
        </div>

        <div onClick={() => {
          setclick(3)
        }} className={`rounded-full py-2 px-6 hover:bg-gray-200 relative ${which_click == 3 ? "bg-gray-200" : ""}`}>
          <p className='text-black font-bold' >check out</p>
          <SubTag txt="add dates" />
          {which_click == 3 ? <CheckoutDialog></CheckoutDialog> : ""}
        </div>

        <div onClick={() => {
          setclick(4)
        }} className={`rounded-full py-2 px-6 hover:bg-gray-200 relative ${which_click == 4 ? "bg-gray-200" : ""}`}>
          <p className='text-black font-bold' >who</p>
          <SubTag txt="add guests" />
          {which_click == 4 ? <GuestDialog></GuestDialog> : ""}
        </div>

        <div className='p-2'>
          <button onClick={() => { setter(0) }} className='mx500:hidden bg-primary p-3 border-gray-300 rounded-full'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="white" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  )
}

export default SearchTab