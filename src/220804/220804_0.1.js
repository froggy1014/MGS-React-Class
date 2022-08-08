import React, { useEffect, useRef } from "react";

const App = () => {
  const [value, setValue] = React.useState("");
  const [isClicked, setIsClicked] = React.useState(false);
  useEffect(() => {
    const onClick = () => {
      setIsClicked(true);
    };
    document.addEventListener("click", onClick);
  }, []);

  return (
    <div>
      <input
        type="number"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />

      {isClicked ? <div>{value}</div> : null}
    </div>
  );
};
export default App;
