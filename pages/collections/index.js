import React from 'react'
import UserCollectionsListComponent from '../../components/collections/UserCollectionsListComponent'
import Link from 'next/link'

import { getCollections } from '../../firebase/Firestore'

const Collections = ({ collectionsProps }) => {
  return (
    <section className='p-8 sm:px-16 lg:px-32 py-10 flex flex-col h-screen relative'>
      <Link href="/">
      <h1 className='text-white md:text-5xl text-3xl mb-12 flex items-center'><button className='text-white text-3xl max-w-fit mr-10 cursor-pointer duration-150 hover:scale-150'
      >{`<-`}</button>Collections list</h1>
      </Link>
      
            <UserCollectionsListComponent collectionsProps={collectionsProps} />
    </section>
  )
}
export async function getStaticProps(){
  const collections = await getCollections();
  const collectionsProps = []
  collections.forEach(collection => collectionsProps.push(collection.data()))
  return{
    props:{
      collectionsProps
    },
    revalidate: 10
  }
}

export default Collections