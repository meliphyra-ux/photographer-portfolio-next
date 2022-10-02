import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Collection = () => {
  const router = useRouter()
  const {id} = router.query
  const collection = useSelector(state => state.photos.photos).filter(collection => collection.collection === id)
  
  return (
    <section>
      {collection && 
      <div>
        <h1>{collection.collectionName}</h1>
        {collection.map(photo => (
          <figure key={photo.id} className="text-white w-72 h-72 relative">
            <img src={photo.src} className="w-full h-full object-cover object-center hover:opacity-0.5 duration-150 "/>
            <h3 className='w-full h-full absolute top-0 left-0'>{photo.description}</h3>
          </figure>
        ))}
      </div>}
    </section>
  )
}

export default Collection