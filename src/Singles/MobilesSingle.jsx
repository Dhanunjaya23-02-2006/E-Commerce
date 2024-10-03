import React from 'react'
import { useParams } from 'react-router-dom'
import { mobileData } from '../stores/data/mobiles'
import Navbar from '../stores/components/Navbar'


const MobilesSingle = () => {

    const {id}=useParams()

    const product = mobileData.find((item)=>item.id === id)

    console.log(id)

  return (
    <>
        <Navbar />
        <div className="ind-section">
        <div className='ind-image'>
            <img src={product.image} alt=" " />
        </div>
        <div className="ind-details space">
            <div className="ind-company">
                <h2>{product.company}</h2>
            </div>
            <div className="ind-model space">
                <h3>{product.model}</h3>
            </div>
            <div className="ind-price space">
                <h2>{product.price}</h2>n
            </div>
            <div className="ind-disc space">
                <p>
                    {product.description}
                </p>
            </div>
            <button>Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default MobilesSingle
