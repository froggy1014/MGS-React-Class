import React from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

export default function Posting() {
  const params = useParams('');
  const location = useLocation();

  console.log(params);
  console.log(location);

  return (
    <div>
      <span>id:{params.id}</span> <br/>
      <span>글내용: {location.state}</span>  <br/>
      <Link to={'/hello'}>return to write</Link>
    </div>
  )
}
