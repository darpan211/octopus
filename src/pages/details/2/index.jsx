import React from "react";
import MainLayout from "../../../layouts/main";
import PageHeader from "../../../components/Page-header";
import PostDetails from "../../../components/Post-details";
import thumparallaxUp from "../../../common/thumparallaxUp";
import Blog1Data from "../../../data/case.json";
import Link from "next/link";

const BlogDetails = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
    setTimeout(() => {
      if (window.simpleParallax) thumparallaxUp();
    }, 1000);
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="Case Studies"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "case-studies", url: "/case-studies" },
        ]}
        image="/assets/img/case.webp"
      />

      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>Project: {Blog1Data[1]?.title}</h2>
                  <div className="info">
                    <p>
                      {/* <Link href={"/"}>{Blog1Data[1]?.by}</Link>/
                      <Link href={"/"}>{Blog1Data[1]?.date}</Link>/
                      <Link href={"/"}>Web Development</Link> */}
                    </p>
                  </div>
                </div>
                <div className="img main-img">
                  <img
                    src={Blog1Data[1]?.image}
                    alt=""
                    className="thumparallax"
                  />
                </div>
                <div className="content pt-20">
                  <div className="row justify-content-center">
                    <div className="col-lg-10">
                      <div className="cont">
                        <div className="spacial">
                          <p>
                            Cloud5 Communications stands as a leading provider
                            of hospitality communications services, redefining
                            the way hotels and resorts engage with their
                            guests.From high-speed internet access to
                            cloud-based phone systems and contact center
                            support, Cloud5&apos;s cutting-edge services are
                            tailored to meet the evolving needs of the modern
                            hospitality sector.
                          </p>
                        </div>
                        <p></p>

                        <h5 className="mb-30">
                          # Technical Architecture
                        </h5>
                        <p>
                          The Cloud5 web application, built on the React
                          framework, boasts a modern and robust technical
                          architecture. The architecture follows a
                          component-based approach, where various
                          functionalities are encapsulated within modular
                          components.
                        </p>
                        <h6>-- Front-End Architecture</h6>
                        <ul>
                          <li>
                            The architecture incorporates a client-server model,
                            where the React front-end communicates with a
                            back-end server to retrieve and update data. RESTful
                            APIs are utilized for data exchange.
                          </li>
                        </ul>

                        <h6>-- State Management</h6>
                        <ul>
                          <li>
                            State management is achieved through Redux, a
                            predictable state container, which centralizes and
                            manages application-wide data. This enhances data
                            consistency and enables swift updates to reflect
                            real-time changes.
                          </li>
                        </ul>
                        <h6>-- Responsive Design and Styling</h6>
                        <ul>
                          <li>
                            For styling and user interface consistency, the
                            architecture employs CSS preprocessors like Sass or
                            CSS modules. To optimize performance, the
                            application implements lazy loading, loading only
                            the necessary components and resources on-demand,
                            leading to faster load times and enhanced user
                            experience.
                          </li>
                        </ul>

                        <h6>-- Deployment and Build Process</h6>
                        <ul>
                          <li>
                            In terms of deployment, the architecture leverages
                            tools like Webpack for bundling and optimizing
                            assets, and Babel for transpiling modern JavaScript
                            code into a browser-compatible format.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default BlogDetails;
