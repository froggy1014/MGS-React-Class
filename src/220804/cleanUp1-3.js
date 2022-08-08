import React, { useEffect } from "react";

const App = () => {
  const [value, setValue] = React.useState("");
  const [isStart, setisStart] = React.useState(false);
  const [answer, setAnswer] = React.useState(false);
  const [sec, setSec] = React.useState(3);
  let timerId;

  useEffect(() => {
    let cnt = 3;
    setSec(cnt);
    if (value !== "") 
    {
      timerId = setInterval(() => {
        cnt--;
        setSec(cnt);
        if (cnt === 0) {
          cleanUp();
          setisStart(false);
          setAnswer(true);
        }
      }, 1000);
    }

    function cleanUp() {
      clearTimeout(timerId);
    }

    return cleanUp;
  }, [value]);

  const onChange = (e) => {
    setValue(e.target.value);
    setisStart(true);
    setAnswer(false);
  };

  return (
    <div>
      <input type="number" onChange={onChange} />
      {isStart ? <div>{sec}초 남았습니다.</div> : null}
      {answer ? <div>값은 {value} 입니다.</div> : null}
    </div>
  );
};
export default App;
