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
        image="/assets/img/blog/blog.webp"
      />
      <section className="blog-pg single section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-11">
              <div className="post">
                <div className="title-head">
                  <h2>{Blog1Data[0]?.title}</h2>
                  <div className="info">
                    <p>
                      <Link href={"/"}>{Blog1Data[0]?.by}</Link>/
                      <Link href={"/"}>{Blog1Data[0]?.date}</Link>/
                      <Link href={"/"}>Web Development</Link>
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
                        <p>
                          Let&apos;s delve deeper into why choosing Octopus
                          Technologies is the right decision for your Full-Stack
                          Development needs:
                        </p>

                        <h6>- Unwavering Commitment to Quality</h6>

                        <p>
                          At Octopus Technologies, quality is our guiding
                          principle. We&apos;re dedicated to delivering
                          solutions that meet industry standards. Our rigorous
                          testing procedures, code reviews, and continuous
                          quality assurance practices ensure that every project
                          we undertake is of the highest caliber. We take pride
                          in our work, and that pride shines through in the
                          results we achieve and the satisfaction of our
                          clients.
                        </p>

                        <h6>- Collaborative Partnership</h6>

                        <p>
                          We don&apos;t view our clients as mere customers but
                          as partners in success. Your goals become our goals,
                          and your challenges become our challenges. Our
                          collaborative approach ensures that you are actively
                          involved in every phase of the development process. We
                          value your input and feedback, and we&apos;re always
                          ready to adjust our strategies to align with your
                          evolving needs.
                        </p>

                        <h6>- Timely and Transparent Communication</h6>

                        <p>
                          Effective communication is the bedrock of any
                          successful project. We prioritize transparent and
                          timely communication, ensuring that you&apos;re always
                          in the loop. You&apos;ll have access to regular
                          progress updates, milestone reviews, and a dedicated
                          team ready to address any queries or concerns. This
                          open dialogue fosters trust and ensures that your
                          project remains on track.
                        </p>

                        <h6>- Scalability and Future-Proofing</h6>

                        <p>
                          In today&apos;s fast-paced digital environment,
                          scalability is essential. Our solutions are built with
                          scalability in mind, ensuring that they can grow with
                          your business. We future-proof our applications,
                          taking into account emerging technologies and industry
                          trends, so your investment continues to pay off well
                          into the future.
                        </p>

                        <h6>- Security and Data Protection</h6>

                        <p>
                          We understand the paramount importance of data
                          security and protection. Our development practices
                          adhere to the highest security standards. From secure
                          coding practices to robust encryption protocols, we
                          take every measure to safeguard your data and ensure
                          compliance with relevant regulations.
                        </p>

                        <h6>- Cost-Effective Solutions</h6>

                        <p>
                          We believe that cutting-edge technology doesn&apos;t
                          have to come with an exorbitant price tag. Octopus
                          Technologies is committed to delivering cost-effective
                          solutions that offer exceptional value for your
                          investment. Our efficient development processes and
                          strategic resource allocation allow us to provide
                          competitive pricing without compromising on quality.
                        </p>

                        <h6>- Extensive Industry Experience</h6>

                        <p>
                          Our team comprises seasoned professionals with
                          extensive experience across various industries. This
                          diversity of expertise equips us with a deep
                          understanding of different business sectors, enabling
                          us to tailor our solutions to your specific
                          industry&apos;s demands.
                        </p>
                        <h6>- Post-Development Support</h6>

                        <p>
                          Our commitment to your success doesn&apos;t end with
                          project delivery. We offer comprehensive
                          post-development support, including maintenance,
                          updates, and troubleshooting. Your application&apos;s
                          long-term health and performance are our ongoing
                          concerns. In choosing Octopus Technologies for your
                          Full-Stack Development needs, you&apos;re selecting a
                          partner deeply committed to your success. Our
                          unwavering dedication to quality, transparent
                          communication, scalability, security, and industry
                          expertise ensures that your project is not just
                          completed, but completed with excellence. We
                          don&apos;t just build solutions; we build lasting
                          relationships that thrive on trust, innovation, and
                          shared success.
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
