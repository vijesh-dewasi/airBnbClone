import React, { useState } from 'react'
const GuestDialog = () => {
  const [adultCount, setAdult] = useState(0)
  return (
    <div className='z-50 mob1:w-72 mx800:w-56 right-0 absolute border-gray-600 text-gray-400 rounded-xl bg-smoke flex flex-col gap-4 justify-center items-center p-4'>
      <div className='text-sm w-full flex justify-between items-center'>
        <div>
          <p className='font-semibold text-black'>Adults</p>
          <p >Ages 13 or above</p>
        </div>
        <div className='text-black font-bold flex mx800:gap-2 mob1:gap-4'>
          <button onClick={() => {
            let count = adultCount - 1;
            if (count < 0)
              count = 0;
            setAdult(count)
          }} className='border border-gray-400 text-gray-400 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          </button>
          <p>{adultCount}</p>

          <button onClick={() => {
            let count = adultCount + 1;
            setAdult(count)
          }} className='border border-gray-400 text-gray-400 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
      <div className='h-1 w-full border-b-gray-200 border-b'></div>
       <div className='text-sm w-full flex justify-between items-center'>
        <div>
          <p className='font-semibold text-black'>Adults</p>
          <p >Ages 13 or above</p>
        </div>
        <div className='text-black font-bold flex mx800:gap-2 mob1:gap-4'>
          <button onClick={() => {
            let count = adultCount - 1;
            if (count < 0)
              count = 0;
            setAdult(count)
          }} className='border border-gray-400 text-gray-400 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          </button>
          <p>{adultCount}</p>

          <button onClick={() => {
            let count = adultCount + 1;
            setAdult(count)
          }} className='border border-gray-400 text-gray-400 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
      <div className='h-1 w-full border-b-gray-200 border-b'></div>

       <div className='text-sm w-full flex justify-between items-center'>
        <div>
          <p className='font-semibold text-black'>Adults</p>
          <p >Ages 13 or above</p>
        </div>
        <div className='text-black font-bold flex mx800:gap-2 mob1:gap-4'>
          <button onClick={() => {
            let count = adultCount - 1;
            if (count < 0)
              count = 0;
            setAdult(count)
          }} className='border border-gray-400 text-gray-400 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          </button>
          <p>{adultCount}</p>

          <button onClick={() => {
            let count = adultCount + 1;
            setAdult(count)
          }} className='border border-gray-400 text-gray-400 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>
      <div className='h-1 w-full border-b-gray-200 border-b'></div>

       <div className='text-sm w-full flex justify-between items-center'>
        <div>
          <p className='font-semibold text-black'>Adults</p>
          <p >Ages 13 or above</p>
        </div>
        <div className='text-black font-bold flex mx800:gap-2 mob1:gap-4'>
          <button onClick={() => {
            let count = adultCount - 1;
            if (count < 0)
              count = 0;
            setAdult(count)
          }} className='border border-gray-400 text-gray-400 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
            </svg>
          </button>
          <p>{adultCount}</p>

          <button onClick={() => {
            let count = adultCount + 1;
            setAdult(count)
          }} className='border border-gray-400 text-gray-400 rounded-full p-1'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
          </button>
        </div>
      </div>

        
    </div>
  )
}

export default GuestDialog


