import React, { useState } from "react";

export default function Portfolio() {
  const [data, setData] = useState([
    { img: "./works/1.jpg", id: "img1" },
    { img: "./works/2.jpg", id: "img2" },
    { img: "./works/3.jpg", id: "img3" },
    { img: "./works/4.jpg", id: "img4" },
    { img: "./works/5.jpg", id: "img5" },
    { img: "./works/6.jpg", id: "img6" },
  ]);
  return (
    <>
      <section className="portfolio vh-100  py-5 text-center">
        <h2 className="fw-bolder mb-5">Portfolio Component</h2>
        <div className="stars">
          <i className="fa-solid fa-star text-white fa-xl"></i>
        </div>
        <div className="container">
          <div className="row g-4">
            {data.map((item) => <div key={item.id} className="col-md-4">
                  <div className="portfolio-item">
                    <img
                      src={item.img}
                      className="w-100 rounded-3"
                      alt={item.id}
                    />
                    <div
                      data-bs-toggle="modal"
                      data-bs-target={'#'+ item.id}
                      className="plus rounded-3"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </div>
                  </div>
                </div>
            
            )}

{data.map((item2) =>  <div key={item2.img}>
           
                  <div
            
                    className="modal fade"
                    id={item2.id}
                    tabIndex={-1}
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-body p-0">
                          <img src={item2.img} className="w-100" alt={item2.id} />
                        </div>
                    
                      </div>
                    </div>
                  </div>
                </div>
            
            )}

          </div>
          
        </div>
      </section>
    </>
  );
}
