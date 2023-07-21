import Filterswipe from "../filterswipe"
import Cards from '../cards'
export default function IndexPage(){
    return (
        <section className='pt-24 p-4  z-30'>        
       <Filterswipe></Filterswipe>
        <Cards></Cards>
        </section>
    )
}