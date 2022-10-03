import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Collection = () => {
  const router = useRouter()
  const {id} = router.query
  const collection = useSelector(state => state.photos.photos).filter(collection => collection.collection === id)
  
  return (
    <section className="text-white sm:px-16 lg:px-44 py-10">
      <h1 className="md:text-5xl text-3xl mb-12">{id}</h1>
      {collection && 
      <div className='grid grid-cols-4 gap-32 w-full'>
        {collection.map(photo => (
          <figure key={photo.id} className="w-72 h-72 relative">
            <img src={photo.src} className="w-full h-full object-cover object-center hover:opacity-10 duration-150 relative z-10 cursor-pointer"/>
            <h3 className='w-full h-full absolute top-0 left-0 flex justify-center items-center bg-neutral-800'>{photo.description}</h3>
          </figure>
        ))}
      </div>}
    </section>
  )
}

export default Collection