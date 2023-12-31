import React from "react";

const Process = () => {
  return (
    <section
      className="process section-padding bg-img bg-repeat"
      style={{ backgroundImage: `url(/assets/img/dots.png)` }}
    >
      <div className="container">
        <div className="section-head text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8 col-sm-10">
              <h6 className="custom-font wow fadeInDown" data-wow-delay=".3s">
                How We Do It
              </h6>
              <h4 className="playfont wow flipInX" data-wow-delay=".5s">
                Work Process
              </h4>
            </div>
          </div>
        </div>
        <div className=" row">
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".3s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/01.webp)` }}
              >
                <h3 className="numb custom-font">01</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Requirements Gathering and Analysis</h6>
                <p>Requirements are documented in detail to create a clear and shared understanding of the project scope.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".5s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/02.webp)` }}
              >
                <h3 className="numb custom-font">02</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Design and Planning  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                <p>Planning is essential to define project milestones, allocate resources, estimate costs, and create a project timeline.</p>
              </div>
            </div>
          </div>
          <div
            className="col-lg-3 col-md-6 coulmn wow fadeInUp"
            data-wow-delay=".4s"
          >
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/03.webp)` }}
              >
                <h3 className="numb custom-font">03</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Implementation (Coding)  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</h6>
                <p>In this phase, developers write the actual code for the software based on the design specifications and requirements.</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay=".6s">
            <div className="item">
              <div
                className="bg-img"
                style={{ backgroundImage: `url(/assets/img/process/04.webp)` }}
              >
                <h3 className="numb custom-font">04</h3>
              </div>
              <div className="cont">
                <h6 className="mb-10">Testing and Quality Assurance</h6>
                <p>Quality assurance activities focus on validating that the software meets quality standards and is ready for deployment.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
