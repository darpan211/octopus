import React from "react";
import Image from "next/image";

const Skills2 = () => {
  return (
    <div className="skills-sec section-padding pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <Image
                fill={true}
                priority={true}
                src="/assets/img/vision.webp"
                alt="bg"
                width={"500"}
                height={"300"}
              />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="content">
              <h4 className="playfont line-height-50 mb-20">Our Vision</h4>
              <p className="mb-10">
                Our vision is simple yet ambitious: to create exceptional web
                experiences that captivate, engage, and empower businesses and
                individuals alike. In an ever-evolving digital landscape, we
                strive to be at the forefront of innovation, delivering
                tailor-made solutions that leave a lasting impact.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills2;

export const Skills3 = () => {
  return (
    <div className="skills-sec section-padding pt-80">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="content">
              <h4 className="playfont line-height-50 mb-20">Our Expertise</h4>
              <p className="mb-10">
                We specialize in harnessing the power of the latest technologies
                to build dynamic and user-friendly web applications. With a core
                focus on React.js, Node.js, and other leading-edge tools, we
                craft solutions that are not just visually stunning but also
                robust, scalable, and future-ready.
              </p>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <Image
                fill={true}
                priority={true}
                src="/assets/img/expertise.webp"
                alt="bg"
                width={"500"}
                height={"300"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
