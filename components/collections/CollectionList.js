import React from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

const CollectionList = () => {
    const collections = useSelector(state => state.collection.collectionsList)
    const router = useRouter()
    console.log(collections)
  return (
    <section className='text-white text-3xl grid 2xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2  gap-8'>
        {collections && collections.map(collection => (
            <div onClick={e => {
                e.stopPropagation();
                router.push(`/collections/${collection}`)
            }} className='w-full aspect-square bg-neutral-800 rounded-xl flex justify-center flex-col items-center cursor-pointer hover:bg-neutral-700 hover:text-4xl hover:scale-105 duration-150'
            key={`${collection}`}
            >
                <p>
                {collection}
                </p>
            </div>
        ))}
    </section>
  )
}

export default CollectionList