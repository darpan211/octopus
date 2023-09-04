import React from "react";
import MainLayout from "../../../layouts/main";
import PageHeader from "../../../components/Page-header";
import thumparallaxUp from "../../../common/thumparallaxUp";
import Blog1Data from "../../../data/case.json";

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
                  <h2>Project: {Blog1Data[0]?.title}</h2>
                  <div className="info">
                    <p>
                      {/* <Link href={"/"}>{Blog1Data[0]?.by}</Link>/
                      <Link href={"/"}>{Blog1Data[0]?.date}</Link>/
                      <Link href={"/"}>Web Development</Link> */}
                    </p>
                  </div>
                </div>
                <div className="img main-img">
                  <img
                    src={Blog1Data[0]?.image}
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
                            KWOT is a revolutionary E-commerce platform that
                            caters specifically to the African market,
                            showcasing a wide array of authentic African
                            products. With a focus on empowering local sellers
                            and providing customers access to high-quality
                            African merchandise, KWOT aims to redefine the
                            E-commerce landscape in the region. Leveraging the
                            power of the React Framework, KWOT offers an
                            intuitive and seamless online shopping experience
                            for both sellers and customers.
                          </p>
                        </div>
                        <p>
                          the main component of a healthy environment for self
                          esteem is that it needs be nurturing.
                        </p>

                        <h6>- Impact and Vision</h6>

                        <p>
                          KWOT&apos;s vision extends beyond being a mere
                          E-commerce platform. It strives to bridge the gap
                          between local artisans, craftsmen, and a global
                          customer base. By promoting African products, culture,
                          and entrepreneurship, KWOT contributes to economic
                          development, cultural preservation, and cross-border
                          collaboration.
                        </p>

                        <h5 className="mb-30"># Key Features</h5>

                        <h6>-- Diverse Product Catalog</h6>
                        <p>
                          KWOT boasts an extensive collection of African
                          products, carefully categorized highlighting the rich
                          culture heritage of Africa.
                        </p>

                        <h6>-- Seller Empowerment</h6>
                        <p>
                          The platform provides a user-friendly interface for
                          sellers to showcase their products effectively.
                          Sellers can create detailed product listings, upload
                          images, set prices, and manage their inventory
                          efficiently.
                        </p>

                        <h6>-- Secure Transactions</h6>
                        <p>
                          KWOT employs robust security measures to ensure safe
                          and secure transactions.
                        </p>

                        <h6>-- User Personalization</h6>
                        <p>
                          KWOT personalizes the shopping experience for each
                          customer. Recommendations are tailored based on past
                          purchases, browsing history, and preferences,
                          enhancing customer engagement and satisfaction.
                        </p>

                        <h6>-- Seamless Checkout</h6>
                        <p>
                          The React Framework powers a seamless and hassle-free
                          checkout process. Customers can easily review their
                          selected items, apply discounts, choose shipping
                          options, and finalize their purchases within a few
                          clicks.
                        </p>

                        <h6>-- Responsive Design</h6>
                        <p>
                          KWOT&apos;s responsive design ensures that the
                          platform functions flawlessly across various devices,
                          including desktops, tablets, and smartphones.
                        </p>

                        <h6>-- Community Integration</h6>
                        <p>
                          KWOT goes beyond a traditional E-commerce platform by
                          fostering a sense of community. Customers can leave
                          reviews, ratings, and engage in discussions about
                          products, further enriching the shopping experience.
                        </p>

                        <h5 className="mb-30"># Technical Architecture of KWOT</h5>
                        <h6>-- Frontend Components</h6>
                        <ul>
                          <li>
                            React Components: We encapsulate UI elements and
                            user behavior. These components are organized
                            hierarchically to create the user interface and
                            interactions.
                          </li>
                          <li>
                            Redux Store: We manage the application state in a
                            centralized manner. We store data related to user
                            preferences, shopping carts, and product
                            information.
                          </li>
                        </ul>

                        <h6>-- Routing and Navigation</h6>
                        <ul>
                          <li>
                            React Router: We facilitate navigation within the
                            app by providing declarative routing. This enables
                            dynamic loading of components based on URL changes.
                          </li>
                        </ul>
                        <h6>-- User Interface</h6>
                        <ul>
                          <li>
                            Material-UI : Utilizes the Material Design system
                            for consistent and visually appealing UI components.
                          </li>
                        </ul>

                        <h6>-- API Integration</h6>
                        <ul>
                          <li>
                            RESTful APIs: Connects the frontend to the backend
                            services. Requests and receives data related to
                            products, sellers, user profiles, and transactions.
                            Supports CRUD operations for various resources.
                          </li>
                        </ul>

                        <h6>-- State Management</h6>
                        <ul>
                          <li>
                            Redux: Manages the global state of the application.
                            Stores data that needs to be accessed across
                            multiple components.
                          </li>
                        </ul>
                        <h6>-- Authentication and Security</h6>
                        <ul>
                          <li>
                            JWT Authentication: Implements JSON Web Token (JWT)
                            authentication for secure user login and
                            authorization.
                          </li>
                        </ul>

                        <h6>-- Performance Optimization</h6>
                        <ul>
                          <li>
                            Code Splitting: Utilizes React&apos;s code splitting
                            feature to load only the necessary components when
                            required.
                          </li>
                          <li>
                            Lazy Loading: Delays the loading of non-critical
                            components until they are needed.
                          </li>
                        </ul>

                        <h6>-- Responsive Design:</h6>
                        <ul>
                          <li>
                            Media Queries: We implement responsive design
                            principles using CSS media queries.
                          </li>
                        </ul>

                        <h6>-- Testing and Debugging</h6>
                        <ul>
                          <li>
                            Jest and React Testing Library: We implement unit
                            and integration tests.
                          </li>
                          <li>
                            Browser Developer Tools: We Utilize browser
                            debugging tools for real-time monitoring and
                            debugging of frontend code.
                          </li>
                        </ul>

                        <h6>
                          -- Testing and DebuggingContinuous
                          Integration/Continuous Deployment (CI/CD)
                        </h6>
                        <ul>
                          <li>
                            CI/CD Pipeline: Automates the process of building,
                            testing, and deploying the app.
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
