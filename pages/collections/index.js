import React from 'react'
import UserCollectionsListComponent from '../../components/collections/UserCollectionsListComponent'
// Redux imports
import { useRouter } from 'next/router'

const Collections = () => {
  const router = useRouter()
  return (
    <section className='p-8 sm:px-16 lg:px-32 py-10 flex flex-col h-screen relative'>
      <h1 className='text-white md:text-5xl text-3xl mb-12 flex items-center'><button className='text-white text-3xl max-w-fit mr-10 cursor-pointer duration-150 hover:scale-150'
      onClick={() => router.push(`/`)}
      >{`<-`}</button>Collections list</h1>
            <UserCollectionsListComponent />
    </section>
  )
}

export default Collections