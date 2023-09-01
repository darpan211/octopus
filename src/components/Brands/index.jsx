/* eslint-disable @next/next/no-img-element */
import React from "react";

const Brands = () => {
  return (
    <div className="brands bg-gray">
      <div className="container box-top wow fadeInUp" data-wow-delay=".3s">
        <div className="row">
          <div className="col-lg col-md-3 col-sm-6">
            <div className="item">
              <div className="img brang-logo">
                <img src="/assets/img/clients/brands/react.png" className="brang-logo" alt="react" />
              </div>
            </div>
          </div>
          <div className="col-lg col-md-3 col-sm-6">
            <div className="item">
              <div className="img brang-logo">
                <img src="/assets/img/clients/brands/nextjs.png" className="brang-logo" alt="nextjs" />
              </div>
            </div>
          </div>
          <div className="col-lg col-md-3 col-sm-6">
            <div className="item">
              <div className="img brang-logo">
                <img src="/assets/img/clients/brands/nodejs.png"  className="brang-logo" alt="nodejs" />
              </div>
            </div>
          </div>
          <div className="col-lg col-md-3 col-sm-6">
            <div className="item">
              <div className="img brang-logo">
                <img src="/assets/img/clients/brands/aws.png" className="brang-logo" alt="aws" />
              </div>
            </div>
          </div>
          <div className="col-lg col-md-3 col-sm-6">
            <div className="item">
              <div className="img brang-logo">
                <img src="/assets/img/clients/brands/angular.png" className="brang-logo" alt="angular" />
              </div>
            </div>
          </div>
          <div className="col-lg col-md-3 col-sm-6">
            <div className="item">
              <div className="img brang-logo">
                <img src="/assets/img/clients/brands/mysql.png" className="brang-logo" alt="mysql" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brands;
