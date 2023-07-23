import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchTabs from './searchTabs'

const Header = function (props) {
    const [profile, setprofile] = useState(0)
    const [search, setSearch] = useState(0)
    const searchSetter = function(i){
        setSearch(i);
       } 
       const [which_tab,setTab]=useState(-1);
    return (
        <div>
            <header className='pt-6 bg-white z-50 p-4 border-b flex flex-col gap-y-4  justify-between fixed top-0 min-h-10c min-w-full max-w-full'>
                <div className='flex justify-between min-h-10c'>
                <Link to={"/"} href="#" className='logo flex items-center gap-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="35" viewBox="0 0 16 16" id="airbnb"><path fill="#F06292" d="M15.02 11.113c-.561-1.19-1.405-2.973-2.25-4.755s-1.688-3.564-2.249-4.752A2.794 2.794 0 0 0 8 0a2.795 2.795 0 0 0-2.514 1.592c-.646 1.38-1.673 3.542-2.64 5.582-.711 1.499-1.391 2.931-1.865 3.938a3.413 3.413 0 0 0-.328 1.454A3.437 3.437 0 0 0 4.087 16c1.22 0 2.673-.849 3.913-2.058C9.24 15.151 10.693 16 11.913 16a3.439 3.439 0 0 0 3.435-3.435c0-.497-.114-1-.328-1.452zM6.218 8.652c0-.983.8-1.783 1.782-1.783s1.782.8 1.782 1.783c0 1.19-.762 2.61-1.782 3.806-1.021-1.195-1.782-2.616-1.782-3.806zM11.913 15c-.898 0-2.129-.744-3.217-1.8 1.212-1.413 2.086-3.125 2.086-4.548C10.782 7.118 9.534 5.87 8 5.87S5.218 7.118 5.218 8.652c0 1.422.874 3.135 2.086 4.548C6.216 14.256 4.985 15 4.087 15a2.437 2.437 0 0 1-2.435-2.435c0-.351.08-.705.232-1.026.475-1.008 1.154-2.439 1.865-3.937.968-2.042 1.995-4.206 2.642-5.585A1.79 1.79 0 0 1 8 1a1.79 1.79 0 0 1 1.615 1.031c.561 1.19 1.405 2.973 2.25 4.755s1.688 3.563 2.25 4.754c.152.32.232.674.232 1.025A2.436 2.436 0 0 1 11.913 15z"></path></svg>
                    <span className='font-bold text-xl text-primary'>airbnb</span>
                </Link>
                {search ?
                    <div onClick={() => { setSearch(!search) }} className=' absolute  left-1/2 -translate-x-1/2 text-gray-600 text-lg flex gap-x-4 mx800:hidden'>
                        <p>stay </p>
                        <p> experiences</p>
                        <p>online experiences</p>
                    </div>
                    : <div className='absolute left-1/2 -translate-x-1/2 hover:shadow-gray-300 py-2 px-4 gap-2 flex border border-gray-300 rounded-full shadow-md shadow-gray-200'>
                        <div  onClick={() => {
                       
                        setTab(1)
                        setSearch(!search)
                    }}className='mx730:hidden text-sm font-semibold'>Any where</div>
                        <div  onClick={() => {
                       
                        setTab(2)
                        setSearch(!search)
                    }} className=' mx730:hidden border-l border-gray-200'></div>
                        <div  onClick={() => {
                       
                        setTab(3)
                        setSearch(!search)
                    }} className='mx730:hidden text-sm font-semibold'>Any week</div>
                        <div className='mx600:hidden border border-l border-gray-200'></div>

                        <div 
                         onClick={() => {
                       
                        setTab(4)
                        setSearch(!search)
                    }} className=' mx730:hidden text-sm'>Add guest</div>
                        <button onClick={() => {
                        setTab(4)
                        setSearch(!search)
                    }} className=' bg-primary p-1 border-gray-300 rounded-full'>
                            <svg className='w-4 h-4' fill="white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="search"><g data-name="Layer 2"><path d="m20.71 19.29-3.4-3.39A7.92 7.92 0 0 0 19 11a8 8 0 1 0-8 8 7.92 7.92 0 0 0 4.9-1.69l3.39 3.4a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42zM5 11a6 6 0 1 1 6 6 6 6 0 0 1-6-6z" data-name="search"></path></g></svg>
                        </button>
                    </div>
                }

                <div className=' gap-2 flex justify-between '>
                    <button className='px-3 hover:bg-gray-100  rounded-full text-sm font-semibold mx1200:hidden'>Air bnb your home</button>
                    <button className='hover:bg-gray-100  rounded-full px-3 mx900:hidden'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                        </svg>
                    </button>
                    <Link onClick={() => { setprofile(!profile) }} to={"/"} className='relative hover:shadow-gray-300 shadow-md shadow-gray-200 px-2 gap-2 flex border border-gray-300 rounded-full items-center'>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                            </svg>
                        </div>
                        <div className='bg-gray-500 text-white rounded-full'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        {profile ? <div className='flex flex-col gap-4 text-gray-600 text-sm absolute w-42 -left-32 top-full  bg-smoke rounded-lg p-6'>
                            <p className='font-semibold'>Log in</p>
                            <p>Sign up </p>
                            <div className='w-full h border-b-2 border-gray-200'></div>
                            <p>Air bnb your home</p>
                            <p>help</p>
                        </div> : ""}
                    </Link>
                </div>
                </div>
                {search ? <SearchTabs to_select={which_tab} setter = {searchSetter} ></SearchTabs> : ""}
            </header>
        </div>
    )
}

export default Header