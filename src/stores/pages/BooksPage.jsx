import React from 'react'
import Navbar from '../components/Navbar'
import { booksData } from '../data/books'

const BooksPage = () => {
  return (
    <>
        <Navbar />
        <div className='pageSection'>
        {booksData.map((item)=>{
            return(
                <div>
                    <div className="pageImg">
                        <img src={item.image} alt="" />
                    </div>
                    <div className="proModel">
                        {item.title},{item.author}
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default BooksPage


