import { React, useState, useRef } from 'react'
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css/pagination'

const Card = (props) => {
    const {
        name,
        place,
        startDate,
        endDate,
        month,
        cost,
        isnew,
        favourite,
        imgsrc
    } = props.info;

    const [end, setend] = useState(0);
    const [start, setStart] = useState(1);

    const imagePrevRef = useRef(null)
    const imageNextRef = useRef(null)
    const [liked,setliked] = useState(0)

    return (<>
        <div className='lap1:w-[calc(25%-1.25rem)] tab1:w-[calc(33%-1.25rem)] mob1:w-[calc(50%-1.25rem)] mob3:w-[calc(100%-1.25rem)]' >
            <div className=' w-full relative overflow-hidden'>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#FFF",
                        "--swiper-pagination-bullet-inactive-color": "#999999",
                        "--swiper-pagination-bullet-inactive-opacity": "1",
                        "--swiper-pagination-bullet-size": "7px",
                        "--swiper-pagination-bullet-horizontal-gap": "4px"
                    }}
                    modules={[Pagination]}
                    slidesPerView={1}
                    navigation={{
                        prevEl: imagePrevRef.current,
                        nextEl: imageNextRef.current,
                    }}
                    pagination={{ clickable: true }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = imagePrevRef.current;
                        swiper.params.navigation.nextEl = imageNextRef.current;
                    }}
                    onReachEnd={() => { setend(1); }}
                    onReachBeginning={() => { setStart(1) }}
                    onFromEdge={() => { setend(0); setStart(0) }}
                >
                    <SwiperSlide >
                        <div className='w-full h-60 rounded-lg overflow-hidden'>
                            <img className=' w-full h-full object-cover' src="/assets/asset 67.webp" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-full h-60 rounded-lg overflow-hidden'>
                            <img className=' w-full h-full object-cover' src="/assets/asset 68.webp" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-full h-60 rounded-lg overflow-hidden'>
                            <img className=' w-full h-full object-cover' src="/assets/asset 69.webp" alt="" />
                        </div>
                    </SwiperSlide>
                    <SwiperSlide >
                        <div className='w-full h-60 rounded-lg overflow-hidden'>
                            <img className=' w-full h-full object-cover' src="/assets/asset 70.webp" alt="" />
                        </div>
                    </SwiperSlide>

                </Swiper>
                <button ref={imagePrevRef} className={` z-30 bg-white absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center h-6 w-6 border-2 border-gray-200 rounded-full hover:drop-shadow-lg hover:scale-110 ${start ? "invisible" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-3 h-3 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>

                <button ref={imageNextRef} className={` z-30 bg-white absolute top-1/2  -translate-y-1/2 right-0 flex items-center justify-center h-6 w-6 border-2 border-gray-200 rounded-full hover:drop-shadow-lg hover:scale-110 ${end ? "invisible" : ""}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-3 h-3 text-black">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
                <div onClick={()=>{setliked(!liked)}} className={`z-30 absolute right-4 top-4 ${liked?"opacity-100":"opacity-50"}`}>
                    
                    <svg width="20px" height="20px" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#f5f5f5" stroke="#f5f5f5" strokeWidth="1.476"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill={`${liked?"#ff008a":"#bfbaba"}`} d="M35.885 11.833c0-5.45-4.418-9.868-9.867-9.868c-3.308 0-6.227 1.633-8.018 4.129c-1.791-2.496-4.71-4.129-8.017-4.129c-5.45 0-9.868 4.417-9.868 9.868c0 .772.098 1.52.266 2.241C1.751 22.587 11.216 31.568 18 34.034c6.783-2.466 16.249-11.447 17.617-19.959c.17-.721.268-1.469.268-2.242z"></path></g></svg>
                </div>
            </div>

            <div className='flex w-full justify-between items-start  pt-4'>
                <div className='flex-col gap-4'>
                    <p className='font-medium text-base'>{place}</p>
                    <p className='text-sm text-gray-500' >{name}</p>
                    <p className='text-sm text-gray-500 ' >{startDate}-{endDate} {month}</p>
                    <p className='font-medium text-base'>{cost}</p>
                </div>
                <div className={`${isnew ? "" : "invisible"} flex gap items-center`}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                    <p className='text-sm'>New</p>
                </div>
            </div>

        </div>
    </>
    )
}

export default Card








