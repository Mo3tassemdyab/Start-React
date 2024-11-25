import React from "react";

export default function Contact() {
  return (
    <>
      <div className="contact vh-100  py-xxl-5">
        <h2 className="fw-bolder text-center mb-5">Contact Section</h2>
        <div className="w-50 m-auto">
          <form >
            <input type="text" placeholder="User Name" className="form-control w-100 form-control-lg border-0 border-bottom rounded-0 mb-5"/>
            <input type="number" placeholder="User Age" className="form-control w-100 form-control-lg border-0 border-bottom rounded-0 mb-5"/>
            <input type="email" placeholder="User Email" className="form-control w-100 form-control-lg border-0 border-bottom rounded-0 mb-5"/>
            <input type="password" placeholder="User password" className="form-control w-100 form-control-lg border-0 border-bottom rounded-0 mb-5"/>

              <button className="btn send">Send</button>
          </form>
        </div>
      </div>
    </>
  );
}
