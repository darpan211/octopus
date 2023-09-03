import React from "react";
import MainLayout from "../../../layouts/main";
import PageHeader from "../../../components/Page-header";
import PostDetails from "../../../components/Post-details";
import thumparallaxUp from "../../../common/thumparallaxUp";
import Blog1Data from "../../../data/blog1.json";
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
        title="Blog details"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "blogs", url: "/blogs" },
        ]}
        image="/assets/img/blog.jpg"
      />
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>{Blog1Data[1]?.title}</h2>
                  <div className="info">
                    <p>
                      <Link href={"/"}>{Blog1Data[1]?.by}</Link>/
                      <Link href={"/"}>{Blog1Data[1]?.date}</Link>/
                      <Link href={"/"}>Web Development</Link>
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
                        <p></p>
                        <h6>- Introduction</h6>

                        <p>
                          In the dynamic landscape of web development, making
                          the right choice between a JavaScript library and a
                          full-fledged framework can significantly impact the
                          success of your projects. At Octopus Technologies,
                          we&apos;ve not only recognized the importance of this
                          decision but have taken it a step further. We&apos;ve
                          delved into client preferences, invested in talent,
                          and embraced cutting-edge technology, making React the
                          cornerstone of our development process. In this blog,
                          we&apos;ll explore why we&apos;ve chosen React over traditional
                          JavaScript libraries and how it aligns with our
                          commitment to meeting client expectations and
                          embracing the latest advancements in the field.
                        </p>

                        <h6>- Client-Centric Approach</h6>

                        <p>
                          Client satisfaction is at the heart of Octopus
                          Technologies. We understand that clients have unique
                          requirements and demand high-quality, maintainable,
                          and scalable solutions for their projects. Through
                          extensive research and consultations, we discovered
                          that React resonates strongly with our clients.
                          React&apos;s component-based architecture allows us to
                          build highly modular and reusable UI components. This
                          approach aligns with our client-centric philosophy, as
                          it enables us to quickly adapt to changing
                          requirements, reducing development time and costs.
                          Clients appreciate the flexibility and efficiency
                          React brings to their projects, making it a natural
                          choice for us.
                        </p>

                        <h6>- Investing in Talent</h6>

                        <p>
                          Recognizing the pivotal role of React, we&apos;ve
                          prioritized hiring and training employees with
                          in-depth React skills. Our development teams are
                          well-versed in the framework, ensuring we deliver
                          top-notch solutions that leverage React&apos;s capabilities
                          to the fullest. By fostering a culture of continuous
                          learning, we&apos;ve equipped our teams to stay updated
                          with React&apos;s latest features and best practices. This
                          investment in talent ensures that our clients benefit
                          from the expertise of professionals who are passionate
                          about React and committed to delivering excellence.
                        </p>

                        <h6>- Embracing Advanced Technology</h6>

                        <p>
                          Octopus Technologies places a premium on staying at
                          the forefront of technological advancements. React, as
                          an open-source library, is actively maintained and
                          constantly evolving. It enjoys a vibrant community,
                          which contributes to its growth and innovation. By
                          choosing React, we&apos;re not just selecting a framework;
                          we&apos;re embracing a technology ecosystem that&apos;s at the
                          cutting edge of web development. This enables us to
                          deliver modern, performant, and feature-rich web
                          applications that meet the ever-evolving demands of
                          the digital world.
                        </p>
                        <p>
                          In conclusion, our preference for React over
                          traditional JavaScript libraries is rooted in our
                          commitment to our clients&apos; success, our investment in
                          our employees&apos; skills, and our dedication to
                          leveraging the most advanced technologies. React
                          empowers us to create flexible, scalable, and
                          high-quality solutions that align perfectly with our
                          client-centric approach. At Octopus Technologies, we
                          don&apos;t just build web applications; we build
                          experiences that exceed expectations, and React is an
                          essential tool in achieving that goal.
                        </p>
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
