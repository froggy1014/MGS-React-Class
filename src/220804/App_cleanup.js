import React, { useEffect } from "react";

const App = () => {
  console.log("App 컴포넌트 렌더");

  const [value, setValue] = React.useState("최초값");

  useEffect(() => {
    console.log("useEffect의 콜백함수 실행 : ", value);

    const onClick = () => {
      console.log(`현재 값은 ${value}입니다.`);
    };

    document.addEventListener("click", onClick);

    function cleanUp() {
      console.log("클린업 실행");
      document.removeEventListener("clcik", onClick);
    }

    console.log("클린업 함수 만들어 저장");

    return cleanUp;
  }, []);

  return (
    <input
      value={value}
      type="number"
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
  );
};

export default App;
