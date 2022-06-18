import React, {useState} from "react";
import "./cal.css";


const Cal = () => {
const [ans, setans] = useState("")

const buttonClick = (e) => {
   setans(ans.concat(e.target.value))
}

const allValue = () => {
  setans(eval(ans).toString());
}
const clearValue = () => {
  setans("")
}
const backspace = () => {
  setans({
      setans: ans.result.slice(0, -1)
  })
};
  return (
    <>
      <div className="container">
        <div className="cal">
        <input type="text" value={ans} placeholder="00"  className="place"/>
        <br/>
          <input type="button" value="1" className="btn" onClick={buttonClick}/>
          <input type="button" value="2" className="btn" onClick={buttonClick}/>
          <input type="button" value="3" className="btn" onClick={buttonClick}/>
          <br />
          <input type="button" value="4" className="btn" onClick={buttonClick}/>
          <input type="button" value="5" className="btn" onClick={buttonClick}/>
          <input type="button" value="6" className="btn" onClick={buttonClick}/>
          <br />
          <input type="button" value="7" className="btn" onClick={buttonClick}/>
          <input type="button" value="8" className="btn" onClick={buttonClick}/>
          <input type="button" value="9" className="btn" onClick={buttonClick}/>
          <br />
          <input type="button" value="0" className="btn" onClick={buttonClick}/>
          <input type="button" value="=" className="btn" onClick={allValue}/>
          <input type="button" value="AC" className="button1" onClick={clearValue}/>
          <input type="button" value="ba" className="button1" onClick={backspace}/>
    
          <br />
          <input type="button" value="*" className="btn1" onClick={buttonClick}/>
          <input type="button" value="+" className="btn1" onClick={buttonClick}/>
          <input type="button" value="/" className="btn1" onClick={buttonClick}/>
          <input type="button" value="%" className="btn1" onClick={buttonClick}/>
          <br />
  
        </div>
      </div>
    </>
  );
};

export default Cal;
