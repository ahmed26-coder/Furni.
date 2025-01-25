import'./home.css'
import sofa1 from '../assets/sofa 1.png'
import { MdMarkAsUnread } from "react-icons/md";
import { GrSend } from "react-icons/gr";
import { useState } from "react";

function contact() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleReset = () => {
    setInput1("");
    setInput2("");
  };

  return (
    <div className="contact" id='contact'>
      <div className="top_contact">
        <h3><MdMarkAsUnread />Subscribe to Newsletter</h3>
        <div className="top_bottom">
            <input type="text" value={input1} onChange={(e) => setInput1(e.target.value)} placeholder='Enter your name' />
            <input type="text" value={input2} onChange={(e) => setInput2(e.target.value)} placeholder='Enter your e-mail' />
            <button onClick={handleReset} ><GrSend /></button>
        </div>
      </div>
      <img src={sofa1} alt="error" />
    </div>
  )
}

export default contact
