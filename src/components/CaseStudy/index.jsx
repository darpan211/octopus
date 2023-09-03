/* eslint-disable @next/next/no-img-element */
import React from "react";
import Blog1Data from "../../data/case.json";
import Link from "next/link";
import thumparallaxUp from "../../common/thumparallaxUp";

const CaseList = () => {
  React.useEffect(() => {
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  return (
    <>
      <section className="blog-pg section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="posts">
                {Blog1Data.map((item) => (
                  <div className="item mb-80" key={item?.id}>
                    <div className="img">
                          <img
                            src={item?.image}
                            alt=""
                            className="thumparallax"
                          />
                    </div>
                    <div className="content">
                      <div className="cont">
                        <h4 className="title"> 
                            {item?.title}
                        </h4>
                        <p>
                        {item?.desc}
                        </p>
                        <Link href={`/details/${item?.id}`}>
                          <a className="more">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CaseList;
