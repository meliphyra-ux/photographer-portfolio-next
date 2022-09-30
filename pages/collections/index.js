import React from 'react'
import { useSelector } from 'react-redux'

const index = () => {
    const collections = useSelector(state => state.collection.value)
    console.log(collections)
  return (
    <section>
        <h1 className='text-white'>Collections list</h1>
        <section>
            
        </section>
    </section>
  )
}

export default index