/* eslint-disable @next/next/no-img-element */
import React from "react";
import Team1Data from "../../data/team1.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

class Team1 extends React.Component {
  constructor(props) {
    super(props);
  }
  renderArrows = () => {
    return (
      <div className="navs mt-30 wow fadeInUp" data-wow-delay=".3s">
        <span className="prev" onClick={() => this.slider.slickPrev()}>
          <i className="fas fa-long-arrow-alt-left" />
        </span>
        <span className="next" onClick={() => this.slider.slickNext()}>
          <i className="fas fa-long-arrow-alt-right" />
        </span>
      </div>
    );
  };
  render() {
    return (
      <section className="team section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="tit">
                <h6 className="mb-10 wow fadeInDown" data-wow-delay=".3s" />
                <h3 className="playfont wow flipInX" data-wow-delay=".5s">
                  Our Team
                </h3>
                <p className="wow fadeInUp" data-wow-delay=".3s">
                They work collaboratively to lead the company, manage operations, drive technology innovation, ensure financial health, market the company&apos;s services, maintain quality and security standards, and develop and nurture talent. Together, they steer the company toward its goals, growth, and long-term success in the dynamic IT services industry.
                </p>
                {/* {this.renderArrows()} */}
              </div>
            </div>
            <div className="col-lg-7">
              <Slider
                className="team-container"
                {...{
                  ref: c => (this.slider = c),
                  slidesToShow: 3,
                  slidesToScroll: 1,
                  arrows: true,
                  dots: false,
                  autoplay: true,
                  responsive: [
                    {
                      breakpoint: 1024,
                      settings: {
                        slidesToShow: 3
                      }
                    },
                    {
                      breakpoint: 767,
                      settings: {
                        slidesToShow: 2
                      }
                    },
                    {
                      breakpoint: 480,
                      settings: {
                        slidesToShow: 1
                      }
                    }
                  ]
                }}
              >
                {Team1Data.map(item =>
                  <div
                    className="item wow fadeInUp"
                    data-wow-delay=".3s"
                    key={item.id}
                  >
                    <div className="img wow imago">
                      <img src={item.image} alt="" />
                      <div className="social">
                        <a href={item.facebook}>
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a href={item.twitter}>
                          <i className="fab fa-twitter" />
                        </a>
                        <a href={item.behance}>
                          <i className="fab fa-behance" />
                        </a>
                        <a href={item.linkedin}>
                          <i className="fab fa-linkedin-in" />
                        </a>
                      </div>
                    </div>
                    <div className="info">
                      <h5>
                        {item.username}
                      </h5>
                      <span>
                        {item.usertitle}
                      </span>
                    </div>
                  </div>
                )}
              </Slider>
            </div>
          </div>
        </div>
        <div
          className="dots-half bg-img bg-repeat"
          style={{ backgroundImage: "url(/assets/img/dots.png" }}
        />
      </section>
    );
  }
}

export default Team1;
