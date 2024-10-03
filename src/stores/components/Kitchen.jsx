import React from 'react'
import { kitchenData } from '../data/kitchen'


const Kitchen = () => {
    const firstFiveImages = kitchenData.slice(0,5)

  return (
    <>
        <div className='proTitle'>
          <h2>Kitchen</h2>
        </div>
        <div className='proSection'>
      {
        firstFiveImages.map((item)=>{
            return(
                <div className='imageBox'>
                    <img className='proImage' src={item.image} alt="" />
                </div>
            )
        })
      }
    </div>
    </>
  )
}

export default Kitchen
