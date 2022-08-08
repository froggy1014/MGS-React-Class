import {useState} from 'react'
import { BrowserRouter, Routes, Route, useParams,
  Link } from "react-router-dom";
import Form from "./Components/Form/Form";

const Posting = ({list}) => {
  const params = useParams('');
  
  

  return (
    <div>
      <span>id:{params.id}</span> <br/>
      <span>글내용: {list[params.id-1]}</span>  <br/>
      <Link to={'/hello'}>return to write</Link>
    </div>
  )
}

function Hello({list, setList}) {
  
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


const App = () => {
  const [list, setList] = useState([])
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/hello" element={<Hello list={list} setList={setList}/>} />
        <Route path="/post/:id" element={<Posting list={list}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
