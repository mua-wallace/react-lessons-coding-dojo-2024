import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
    
const Survey = (props) => {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const navigate = useNavigate();

  const sendSurvey = (e) => {
    e.preventDefault();
    console.log('thanks for submtting your survey');
   navigate(-1)
  }
    
    
  return (
    <form  onSubmit={sendSurvey}>
      <div>
      <label>Your Name:</label>
      <input type="text" onChange={ (e) => setName(e.target.value) } value={ name } />
      </div>
      <div>
      <label>Your Comment:</label>
      <textarea onChange={ (e) => setComment(e.target.value) } value={ comment }></textarea>
      </div>
      <input type="submit" value="Submit Survey" />
    </form>
  );
}

export default Survey