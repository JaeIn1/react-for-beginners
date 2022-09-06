import { useState, useEffect } from "react";

function First() {
  const [counter, setCounter] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => {
    setCounter((prev) => prev + 1);
  };
  const onChange = (evnet) => {
    setKeyword(evnet.target.value);
  };
  useEffect(() => {
    console.log("CALL THE API..");
  }, []);
  useEffect(() => {
    console.log("I run when 'counter'");
  }, [counter]);
  useEffect(() => {
    console.log("I run when 'keyword'");
  }, [keyword]);
  return (
    <div>
      <h3>{counter}</h3>
      <button onClick={onClick}>Click</button>
      <br></br>
      <input
        value={keyword}
        type="text"
        onChange={onChange}
        placeholder="Search..."
      ></input>
    </div>
  );
}
export default First;
