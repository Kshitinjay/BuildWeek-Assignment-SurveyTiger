import React from "react";

const TypeSelector = ({ quesType, setQuesType }) => {
  return (
    <div className="col-md-10 offset-md-1 col-12 ">
      <div className="input-group">
        <select
          className="form-select"
          value={quesType}
          onChange={(event) => {
            let type = parseInt(event.target.value);
            setQuesType(type);
          }}
        >
          <option defaultValue value="0">
            Choose Question Type
          </option>
          <option value="1">Multi-Select</option>
          <option value="2">Single-Select</option>
        </select>
      </div>
    </div>
  );
};

export default TypeSelector;
