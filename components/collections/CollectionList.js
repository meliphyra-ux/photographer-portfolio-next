import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const CollectionList = () => {
    const collections = useSelector(state => state.collection.value)
    const router = useRouter()
  return (
    <section className='text-white text-3xl flex flex-wrap'>
        {collections && collections.map(collection => (
            <div onClick={e => {
                e.stopPropagation();
                router.push(`/collections/${collection.collectionName}`)
            }} className='w-72 h-72 bg-neutral-800 rounded-xl flex justify-center flex-col items-center cursor-pointer hover:bg-neutral-700 hover:text-4xl hover:scale-105 duration-150'>
                <p>
                {collection.collectionName}
                </p>
            </div>
        ))}
    </section>
  )
}

export default CollectionList