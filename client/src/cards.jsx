import { useState } from "react"
import TaxButton from './taxbutton'
import Card from './card'

export default function Cards() {
    const info = [
        {
            name: "Pavana Lake",
            place: "Lonavala India",
            startDate: 23,
            endDate: 29,
            month: "Aug",
            cost: '₹54,777',
            isnew: 1,
            imgsrc: {
                from: 1
            }
        },
        {
            name: "Pavana Lake",
            place: "Lonavala India",
            startDate: 23,
            endDate: 29,
            month: "Aug",
            cost: '₹54,777',
            isnew: 1,
            imgsrc: {
                from: 6
            }
        },
        {
            name: "Pavana Lake",
            place: "Lonavala India",
            startDate: 23,
            endDate: 29,
            month: "Aug",
            cost: '₹54,777',
            isnew: 1,
            imgsrc: {
                from: 11
            }
        },
        {
            name: "Pavana Lake",
            place: "Lonavala India",
            startDate: 23,
            endDate: 29,
            month: "Aug",
            cost: '₹54,777',
            isnew: 1,
            imgsrc: {
                from: 16
            }
        },
        {
            name: "Pavana Lake",
            place: "Lonavala India",
            startDate: 23,
            endDate: 29,
            month: "Aug",
            cost: '₹54,777',
            isnew: 1,
            imgsrc: {
                from: 21
            }
        },
        {
            name: "Pavana Lake",
            place: "Lonavala India",
            startDate: 23,
            endDate: 29,
            month: "Aug",
            cost: '₹54,777',
            isnew: 1,
            imgsrc: {
                from: 26
            }
        },
        {
            name: "Pavana Lake",
            place: "Lonavala India",
            startDate: 23,
            endDate: 29,
            month: "Aug",
            cost: '₹54,777',
            isnew: 1,
            imgsrc: {
                from: 31
            }
        }
    ]
return (
    <section className='pt-6 pb-12'>
        <TaxButton></TaxButton>
        <div className="pt-8 justify-start mx500:justify-center items-center flex flex-wrap gap-y-8 gap-x-5">
            {info.map((info_item)=>{
             return <Card info={info_item} key ={info_item.imgsrc.from} ></Card>
            })}

        </div>
    </section>
)
}