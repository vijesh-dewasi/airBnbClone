import { useState } from "react"
import TaxButton from './taxbutton'
import Card from './card'

export default function Cards(){
         const info={
            name:"Pavana Lake",
            place:"Lonavala India",
            startDate:23,
            endDate:29,
            month:"Aug",
            cost:'₹54,777',
            isnew:1,
            favourite:'',
            imgsrc:{
                from:10,
                to:15
            }
         }
    return (
        <section className='pt-6 pb-12'>       
          <TaxButton></TaxButton>
          <div className="pt-8 justify-start mx500:justify-center items-center flex flex-wrap gap-y-8 gap-x-5">
          <Card info ={info} ></Card>
          <Card info ={info} ></Card>
          <Card info ={info} ></Card>
          <Card info ={info} ></Card>
          <Card info ={info} ></Card>
          <Card info ={info} ></Card>
          <Card info ={info} ></Card>
          </div>  
        </section>
    )
}