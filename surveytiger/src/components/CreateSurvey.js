import React, { useState } from "react";
import TypeSelector from "./TypeSelector";
import Question from "./Question";
import Options from "./Options";

const CreateSurvey = () => {
  const random = () => {
    return Math.floor(Math.random() * 500 + 1);
  };

  const [quesType, setQuesType] = useState(0);
  const [quesText, setQuesText] = useState('');
  const [options, setOptions] = useState(
    [{ uid: random(), value: "" },
    { uid: random(), value: "" }]
  );

  const addOptions = ()=>{
      alert("option added");
  }
  const removeOptions = ()=>{
    alert("option removed");
}

  return (
    <div className="col-md-10 offset-md-1 col-12 container">
      <TypeSelector quesType={quesType} setQuesType={setQuesType} />
      {quesType !== 0 ? (
        <>
          <Question quesText={quesText} setQuesText={setQuesText}/>
          {options.map((uid,idx)=>{
              return <Options key={idx} addOptions={addOptions} removeOptions={removeOptions}/>
          })}
        </>
      ) : null}
    </div>
  );
};

export default CreateSurvey;
