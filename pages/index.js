import React from 'react'
import { useSelector } from "react-redux";

export default function index() {
  const photos = useSelector((state) => state.photos.photos)
  return (
    <div>
        <h1>Hello, I'm Sasha.<br/>Professional Photographer</h1>
    </div>
  )
}
