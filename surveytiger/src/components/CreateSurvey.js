import React, { useState } from "react";
import TypeSelector from "./TypeSelector";
import Question from "./Question";
import Options from "./Options";

const CreateSurvey = () => {
  const random = () => {
    return Math.floor(Math.random() * 500 + 1);
  };

  const [quesType, setQuesType] = useState(0);
  const [quesText, setQuesText] = useState("");
  const [options, setOptions] = useState([
    { uid: random(), value: "" },
    { uid: random(), value: "" },
  ]);

  const addOptions = () => {
    let newOption = { uid: random(), value: "" };
    let tempOptions = [...options, newOption];
    setOptions(tempOptions);
  };

  const removeOptions = (id) => {
    let tempOptions = [...options];
    delete tempOptions[id];
    setOptions(tempOptions);
    console.log(tempOptions[id]);
  };

  return (
    <div className="col-md-10 offset-md-1 col-12 container">
      <TypeSelector quesType={quesType} setQuesType={setQuesType} />
      {quesType !== 0 ? (
        <>
          <Question quesText={quesText} setQuesText={setQuesText} />
          {options.map((uid, idx) => {
            return (
              <Options
                key={idx}
                id={idx}
                addOptions={addOptions}
                removeOptions={removeOptions}
              />
            );
          })}
        </>
      ) : null}
    </div>
  );
};

export default CreateSurvey;
