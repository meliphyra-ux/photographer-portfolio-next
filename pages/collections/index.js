import React from 'react'
import CollectionList from '../../components/collections/CollectionList'

const index = () => {
  return (
    <section className='sm:px-16 lg:px-44 py-10 flex flex-col h-screen'>
        <h1 className='text-white md:text-5xl text-3xl mb-12'>Collections list</h1>
            <CollectionList />
    </section>
  )
}

export default index