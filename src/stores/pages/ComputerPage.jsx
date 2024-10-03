import React from 'react'
import Navbar from '../components/Navbar'
import { computerData } from '../data/computers'


const ComputerPage = () => {
  return (
    <>
        <Navbar />
        <div className='pageSection'>
        {computerData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="proModel">
                        {item.company},{item.model}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default ComputerPage