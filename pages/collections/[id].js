import Router, { useRouter } from 'next/router'

const Collection = () => {
    const router = useRouter()
    const {id} = router.query
  return (
    <div>{id}</div>
  )
}

export default Collection