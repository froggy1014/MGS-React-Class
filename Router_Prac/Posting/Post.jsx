import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Post = ({list}) => {
  const params = useParams('');


  return (
    <div>
      <span>id:{params.id}</span> <br/>
      <span>글내용: {list[params.id-1]}</span>  <br/>
      <Link to={'/hello'}>return to write</Link>
    </div>
  )
}


export default Post