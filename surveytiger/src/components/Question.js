import React from "react";

const Question = ({ quesText, setQuesText }) => {
  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 my-4">
        <div className="input-group">
          <span className="input-group-text" id="basic-addon1">
            ?
          </span>{" "}
          <input
            type="text"
            value={quesText}
            className="form-control"
            placeholder="Question"
            onChange={(event) => {
              let que = event.target.value;
              setQuesText(que);
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Question;
