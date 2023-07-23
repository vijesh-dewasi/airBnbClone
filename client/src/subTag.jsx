import {React,useEffect, useState} from 'react'

const SubTag = (props) => {
    const txt = props.txt
    const [tagLine,setTagline]= useState(txt)
    const handleWindowSizeChange = () => {
        if(window.innerWidth<750)
        setTagline("");
        else
        setTagline(txt)
    };
    if(window.innerWidth)
    useEffect(() =>{
        window.addEventListener("resize", handleWindowSizeChange)
      })
      useEffect(() =>{
        if(window.innerWidth<750)
        setTagline("");
      },[])
  return (
    <p>{tagLine}</p>
  )
}

export default SubTag