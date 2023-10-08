import React from "react";

export default function AddPhone() {
  return (
    <div className="container details my-3">
      <div className="mb-3 d-flex ">
        <label htmlFor="modelNumber" className="form-label w-50">
          Enter Model Number
        </label>
        <input
          type="email"
          className="form-control"
          id="modelNumber"
          placeholder="XYZ 35 PRO MAX"
        />
      </div>
      <div className="mb-3 d-flex">
        <label htmlFor="keyFeatures" className="form-label w-50">
          Enter Key Features
        </label>
        <input
          type="email"
          className="form-control"
          id="keyFeatures"
          placeholder="RAM || Process || Screen Size "
        />
      </div>
      <div className="mb-3 d-flex ">
        <label htmlFor="description" className="form-label w-50">
          Enter Description
        </label>
        <textarea className="form-control" id="description" rows="3"></textarea>
        
      </div>
      <div className="mb-3 d-flex">
          <label htmlFor="formFile" className="form-label w-50">
          <i className="bi bi-image"></i> Image file
          </label>
          <input className="form-control" type="file" id="formFile"></input>
        </div>
      <button type="button" className="btn btn-primary">Submit</button>
    </div>
  );
}
