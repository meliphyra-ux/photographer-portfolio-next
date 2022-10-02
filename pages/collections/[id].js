import { useRouter } from 'next/router'
import { useState } from 'react'
import { useSelector } from 'react-redux'

const Collection = () => {
  const router = useRouter()
  const {id} = router.query
  const [collection] = useSelector(state => state.collection.value.filter(collection => collection.collectionName === id))
  // const [collection, setCollection] = useState(null)

  // useState(() => {
  //   console.log(collectionGrabber)
  //   setCollection(collectionGrabber[0])
  // }, [collectionGrabber])
  return (
    <>
      {collection && <div>{collection.collectionName}</div>}
    </>
  )
}

export default Collection