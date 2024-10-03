import React from 'react'
import Navbar from '../components/Navbar'
import { tvData } from '../data/tv'


const TvPage = () => {
  return (
    <>
        <Navbar />
        <div className='pageSection'>
        {tvData.map((item)=>{
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

export default TvPage
