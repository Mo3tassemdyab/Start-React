import React from "react";

export default function Footer() {
  return (
    <>
      <footer className=" pt-5 text-center">
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-4">
              <div className="text-white ">
                <h2 className="fw-bold mb-3">Tanta</h2>
                <p className="mb-2">2215 John Daniel Drive</p>
                <p className="mb-2">Clark, Mo 65243</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="text-white">
                <h2 className="fw-bold ">About the web</h2>
                <div className="icon  mt-3 d-flex justify-content-center align-items-center">
                  <div className="my-icon d-flex justify-content-center align-items-center me-3">
                    <i className="fa-brands   fa-facebook   fa-xl "></i>
                  </div>
                  <div className="my-icon d-flex justify-content-center align-items-center me-3">
                    <i className="fa-brands   fa-twitter   fa-xl "></i>
                  </div>
                  <div className="my-icon d-flex justify-content-center align-items-center me-3">
                    <i className="fa-brands   fa-google   fa-xl "></i>
                  </div>
                  <div className="my-icon d-flex justify-content-center align-items-center me-3">
                    <i className="fa-brands   fa-github   fa-xl "></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div>
              <h2 className="text-white fw-bold mb-3">About Freelancer</h2>
              <p className="mb-2 text-white">Freelance is a free to use, licensed Bootstrap theme created by Route </p>
             
              </div>
            </div>
          </div>
        </div>

        <div className="py-3 footer-feet"> 
        <p className="text-white">Copy Right 2022 © By Moatasem All Rights Reserved</p>
      </div>
      </footer>


    </>
  );
}
