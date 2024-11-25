import React from "react";

export default function About() {
  return (
    <>
      <section className="vh-100 text-center about d-flex justify-content-center align-items-center">
        <div>
          <h2 className="fw-bolder text-white mb-4">About Component</h2>
          <div className="stars">
        <i className='fa-solid fa-star text-white fa-xl'></i>
      </div>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <p className="text-white"> 
                  A freelancer is a self-employed individual who offers services
                  to clients on a project or contract basis, often working in
                  fields like writing, design, programming, or consulting. They
                  have the flexibility to choose their clients, set their own
                  schedules, and work from virtually anywhere.
                </p>
              </div>
              <div className="col-md-6">
                <p className="text-white">    A freelancer is a self-employed individual who offers services
                  to clients on a project or contract basis, often working in
                  fields like writing, design, programming, or consulting. They
                  have the flexibility to choose their clients, set their own
                  schedules, and work from virtually anywhere.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
