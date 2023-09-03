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
        image="/assets/img/case.jpg"
      />

      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>Project: {Blog1Data[2]?.title}</h2>
                  <div className="info">
                    <p>
                      {/* <Link href={"/"}>{Blog2Data[2]?.by}</Link>/
                      <Link href={"/"}>{Blog2Data[2]?.date}</Link>/
                      <Link href={"/"}>Web Development</Link> */}
                    </p>
                  </div>
                </div>
                <div className="img main-img">
                  <img
                    src={Blog1Data[2]?.image}
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
                            Restrocrm, an innovative restaurant admin platform,
                            is meticulously designed within the React framework
                            and powered by JavaScript to revolutionize
                            restaurant operations. This technical architecture
                            embodies efficiency, modularity, and user-centric
                            design, catering to the needs of managers and chefs
                            alike.
                          </p>
                        </div>
                        <p></p>

                        <h5 className="mb-30">
                          # Technical Architecture
                        </h5>

                        <h6>-- Front-End Architecture</h6>
                        <ul>
                          <li>
                            Restrocrm&apos;s front-end is built using React,
                            offering a component-based structure that ensures
                            reusability and maintainability. The UI is divided
                            into modular components, encompassing
                            functionalities like order management, menu updates,
                            table reservations, and more. This approach
                            streamlines development, enabling smooth updates and
                            enhancements.
                          </li>
                        </ul>

                        <h6>-- State Management</h6>
                        <ul>
                          <li>
                            Redux, a powerful state management library, plays a
                            pivotal role in maintaining a centralized data
                            store. This ensures consistent and synchronized data
                            across the application, enabling real-time updates
                            and seamless interactions between managers, chefs,
                            and the platform.
                          </li>
                        </ul>
                        <h6>-- User Authentication and Authorization</h6>
                        <ul>
                          <li>
                            User authentication is implemented through JWT (JSON
                            Web Tokens) to ensure secure access to different
                            parts of the platform. Role-based authorization
                            guarantees that managers and chefs only access
                            relevant sections of the application, maintaining
                            data integrity.
                          </li>
                        </ul>

                        <h6>-- Communication with Back-End</h6>
                        <ul>
                          <li>
                            The React front-end communicates with the back-end
                            server via RESTful APIs. This API-driven approach
                            facilitates data exchange for tasks such as menu
                            updates, order tracking, and reservation management,
                            enhancing the overall user experience.
                          </li>
                        </ul>

                        <h6>-- Responsive Design and Styling</h6>
                        <ul>
                          <li>
                            CSS preprocessors like Sass or CSS-in-JS libraries
                            are employed to create responsive and visually
                            appealing interfaces. This ensures a consistent user
                            experience across various devices, from desktops to
                            tablets and smartphones.
                          </li>
                        </ul>
                        <h6>-- Real-Time Updates</h6>
                        <ul>
                          <li>
                            WebSockets are utilized to implement real-time
                            updates for tasks like order tracking. This enhances
                            the communication flow between managers and chefs,
                            improving coordination and reducing delays in food
                            preparation.
                          </li>
                        </ul>

                        <h6>-- Deployment and Build Process</h6>
                        <ul>
                          <li>
                            Tools like Webpack handle bundling and optimizing
                            assets, while Babel transpiles modern JavaScript
                            code into a browser-compatible format. Continuous
                            integration and deployment pipelines automate the
                            process of deploying updates and new features.
                          </li>
                        </ul>

                        <h6>-- Scalability and Performance</h6>
                        <ul>
                          <li>
                            The architecture&apos;s modular design allows for
                            easy scaling by adding new components or
                            microservices. Performance optimization techniques,
                            such as code splitting and lazy loading, ensure
                            quick load times and an exceptional user experience.
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
