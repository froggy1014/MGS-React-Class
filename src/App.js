import styled, { keyframes } from "styled-components";
import { useState } from "react";

const boxFade = (color) => keyframes`
0% {
background-color: black;
}
50% {
background-color: ${color}
}
100% {
background-color: red;
}
`;

const Box = styled.div`
width: 200px;
height:200px;
animation:  ${props => boxFade(props.color)} 3s infinite;
`;



const App = () => {
  const [color, setColor] = useState();
  const [value, setValue] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setColor(value)
    setValue('');
  }
  console.log(value)
  console.log(color)
  return (
    <>
      <Box color={color}/>
      <form onSubmit={handleSubmit}>    
        <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
      <button type="submit">클릭</button>
      </form>
    </>
  );

};

export default App;
