import React from 'react'
import Navbar from '../components/Navbar'
import { menData } from '../data/men'

const MenPage = () => {
  return (
    <>
        <Navbar />
        <div className='pageSection'>
        {menData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="proModel">
                        {item.brand},{item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default MenPage
