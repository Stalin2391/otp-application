import { useEffect, useRef, useState } from "react";
import "./App.css";

const OTP_COUNT = 5;

function App() {
  const [intputArr, setInputArr] = useState(new Array(OTP_COUNT).fill(""));
  const refArr = useRef([]);

  const handleChange = (value, index) => {
    console.log(value);
    const newVal = value.trim();
    const newArr = [...intputArr];
    newArr[index] = newVal.slice(-1);
    setInputArr(newArr);

    newVal && refArr.current[index + 1].focus();
  };

  const handleKeyDown = (e, index) => {
    if(!e.target.value && e.key === "Backspace"){
        refArr.current[index - 1].focus();
    }
  }

  useEffect(() => {
    refArr.current[0].focus();
  }, []);


  return (
    <div style={{textAlign: "center"}}>
      <h3>OTP Application</h3>
      {intputArr.map((val, index) => (
        <input
          ref={(input) => (refArr.current[index] = input)}
          className="otp-input"
          type="text"
          value={val}
          onChange={(e) => handleChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e, index)}
        />
      ))}
    </div>
  );
}

export default App;
