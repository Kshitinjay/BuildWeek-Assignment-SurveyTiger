import React from "react";

const Options = ({addOptions,removeOptions,id}) => {
  return (
    <div>
      <div className="col-md-10 offset-md-1 col-12 mt-2">
        <div className="input-group">
          <input type="text" className="form-control" placeholder="Add options"/>
          <div className="input-group-append">
              <button className="btn btn-outline-secondary ms-1 me-1" type="button" onClick={()=> addOptions()}>+</button>
              <button className="btn btn-outline-secondary" id={id}  type="button" onClick={()=> removeOptions(id)}>-</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Options;
