import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'

const Collection = () => {
  const router = useRouter()
  const {id} = router.query
  const [collection] = useSelector(state => state.collection.value.filter(collection => collection.collectionName === id))
  return (
    <>
      {collection && <div>{collection.collectionName}</div>}
    </>
  )
}

export default Collection