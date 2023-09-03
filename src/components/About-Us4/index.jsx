import React from "react";

const AboutUs4 = () => {
  return (
    <section className="about section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="numbers">
              <div className="row">
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr custom-font">15+</span>
                    </h3>
                    <h6>Projects Completed</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item mb-50">
                    <h3>
                      <span className="nbr custom-font">12+</span>
                    </h3>
                    <h6>Satisfied Clients</h6>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="item">
                    <h3>
                      <span className="nbr custom-font">22+</span>
                      {/* <i>M</i> */}
                    </h3>
                    <h6>Team Members</h6>
                  </div>
                </div>
                {/* <div className="col-sm-6">
                  <div className="item">
                    <h3>
                      <span className="nbr custom-font">17</span>
                    </h3>
                    <h6>Awards Won</h6>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="txt-cont">
              <p className="mb-20">
              When you choose <b>Octopus Technologies</b> as your web development partner, you&apos;re choosing a commitment to excellence, innovation, and unwavering support. Whether you&apos;re a startup looking to make a mark or an established business seeking digital transformation, we&apos;re here to help you thrive in the digital age.
              </p>
              <p>
              Join us on this exciting journey. Let&apos;s create extraordinary web experiences together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs4;
