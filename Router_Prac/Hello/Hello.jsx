import { useParams, Link } from "react-router-dom";
import { useState } from "react";

export default function Hello({list, setList}) {
  
  const [input, setInput] = useState('');
  // const [posts, setPosts] = useState([]);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    // setPosts(prev => [...posts, input]);
    setList(prev => [...list, input])
    setInput('');
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>글쓰기 화면</h1>
        <input 
          value={input} 
          type="text" 
          onChange={e => setInput(e.target.value)}
        />
        <button>등록</button> <br/>
        {list.map((contents, i) => (
           <Link 
              key={i+1} 
              to={{pathname : `/post/${i+1}`}}
              state = {contents}
           >
           <h2>{contents}</h2>
           </Link>
        ))}
      </form>
    </>
  )
}
