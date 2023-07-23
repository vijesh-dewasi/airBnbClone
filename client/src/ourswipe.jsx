import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import Aslide from "./aslide"

export default function ourswipe() {
  const [end, setend] = useState(0);
  const [start, setStart] = useState(1);
  const [slideno,setslideno]=useState(0)
  const navigationPrevRef = useRef(null)
  const navigationNextRef = useRef(null)
   const [slides_per_view,set_slides_per_view] = useState(10);
  const slide_no_prop = slideno;
  const setslideno_prop= setslideno;
   const handleResize = () => {
    if (window.innerWidth < 500){
  set_slides_per_view(3)
    } else if(window.innerWidth < 700){
  set_slides_per_view(5)   
    }
    else if(window.innerWidth < 900){
  set_slides_per_view(7)   
    }
    else{
  set_slides_per_view(10)   
    }
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
  })

  useEffect(() => {
    if (window.innerWidth < 500){
      set_slides_per_view(3)
        } else if(window.innerWidth < 700){
      set_slides_per_view(5)   
        }
        else if(window.innerWidth < 900){
      set_slides_per_view(7)   
        }
        else{
      set_slides_per_view(10)   
        }
  },[])
   
  return (
    <div className="max-w-80p mx800:max-w-70p  px-5 relative">

      <button ref={navigationPrevRef} className={`absolute top-1/2 -translate-y-1/2 left-0 flex items-center justify-center h-6 w-6 border-2 border-gray-200 rounded-full hover:drop-shadow-lg hover:scale-110 ${start ? "invisible" : ""}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-3 h-3 text-black">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>

      <button ref={navigationNextRef} className={`absolute top-1/2  -translate-y-1/2 right-0 flex items-center justify-center h-6 w-6 border-2 border-gray-200 rounded-full hover:drop-shadow-lg hover:scale-110 ${end ? "invisible" : ""}`}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="3.5" stroke="currentColor" className="w-3 h-3 text-black">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <Swiper
        slidesPerView={slides_per_view}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        onReachEnd={() => { setend(1); }}
        onReachBeginning={() => { setStart(1) }}
        onFromEdge={() => { setend(0); setStart(0) }}
      >
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={1} key={1}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={2} key={2}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={3} key={3}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={4} key={4}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={5} key={5}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={6} key={6}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={7} key={7}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={8} key={8}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={9} key={9}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={10} key={10}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={11} key={11}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={12} key={12}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={13} key={13}/>
              </SwiperSlide>
              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={14} key={14}/>
              </SwiperSlide>

              
              <SwiperSlide>
                <Aslide setslideno_prop= {setslideno_prop} slide_no_prop={slide_no_prop} i={15} key={15}/>
              </SwiperSlide>

             </Swiper>

    </div>
  )
}