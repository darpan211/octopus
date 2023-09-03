/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorkThreeColumn = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.Isotope) initIsotope();
    }, 1000);
  }, []);
  return (
    <>
      <section
        className={`works filter-img three-col pt-100 pb-0`}
      >
        <div className="container">
          <div className="main-header text-center">
            <h3>We Are Using
            </h3>
            <div className="tex-bg">Technologies</div>
          </div>
        </div>
      </section>
      <section className="works filter-img three-col section-padding">
        <div className="container">
          <div className="filtering text-center mb-30">
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".frontend">Frontend</span>
              <span data-filter=".backend">Backend</span>
              <span data-filter=".database">Database</span>
              <span data-filter=".infrastructure">Infrastructure</span>
            </div>
          </div>
          <div className="row gallery">
            <div className="col-lg-4 col-md-6 items frontend">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/react.png"
                    alt="react"
                    width={300} height={300}
                  />

                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://react.dev/">React & React Native</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items frontend">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/angular.png"
                    alt="angular"
                    width={300} height={300}
                  />

                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://angularjs.org/">AngularJS</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items frontend">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/nextjs.png"
                    alt="nextjs"
                    width={300} height={300}
                  />
                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://nextjs.org/">NextJS</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items backend">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/nodejs.png"
                    alt="nodejs"
                    width={300} height={300}
                  />
                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://nodejs.org/en">NodeJS</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items database">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/mysql.png"
                    alt="mysql"
                    width={300} height={300}
                  />
                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://www.mysql.com/">MySQL</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items database">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/firebase.png"
                    alt="firebase"
                    width={300} height={300}
                  />
                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://firebase.google.com/">Firebase</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items infrastructure">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/aws.png"
                    alt="aws"
                    width={300} height={300}
                  />
                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://aws.amazon.com/">AWS</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items frontend">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/vue.png"
                    alt="vue"
                    width={300} height={300}
                  />
                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://vuejs.org/">VueJS</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items infrastructure">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/azure.png"
                    alt="azure"
                    width={300} height={300}
                  />
                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://azure.microsoft.com/en-in">Azure</Link>
                  </h5>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 items database">
              <div className="item">
                <div className="img">
                  <Image
                    fill={true}
                    priority={true}
                    src="/assets/img/clients/brands/mongo.png"
                    alt="mongo"
                    width={300} height={300}
                  />
                </div>
                <div className="cont">
                  <h5>
                    <Link rel="noopener noreferrer" target="_blank" href="https://www.mongodb.com/">MongoDB</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkThreeColumn;
