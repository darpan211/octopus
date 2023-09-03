/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const Footer = ({ classText }) => {
  return (
    <footer className={`${classText ? classText : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>302, Gokulam Arcade, Beside Rise On Plaza, Sathana jakat naka, Surat, Gujarat 395006</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>hr@octopustechno.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+91 93286 62882</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Case Studies</h5>
              </div>
              <ul>
                <li>
                  <div className="img">
                    <Link href="/details/2">
                      <a>
                        <img src="/assets/img/c1.webp" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/details/2">
                      <a>
                        <p>
                        Cloud5 Communications
                        </p>
                      </a>
                    </Link>
                    <span className="date">08 Aug 2022</span>
                  </div>
                </li>
                <li>
                  <div className="img">
                    <Link href="/details/1">
                      <a>
                        <img src="/assets/img/case22.webp" alt="" />
                      </a>
                    </Link>
                  </div>
                  <div className="sm-post">
                    <Link href="/details/1">
                      <a>
                        <p>
                        KWOT - Empowering African Commerce
                        </p>
                      </a>
                    </Link>
                    <span className="date">14 Jan 2022</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src="/assets/img/logo-light.png" alt="" />
              </div>
              <div className="social">
              <Link href="#">
                  <a>
                    <i className="fab fa-instagram"></i>
                  </a>
                </Link>

                {/* <Link href="#">
                  <a>
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </Link>
                <Link href="#">
                  <a>
                    <i className="fab fa-twitter"></i>
                  </a>
                </Link>
               
                <Link href="#">
                  <a>
                    <i className="fab fa-youtube"></i>
                  </a>
                </Link> */}
              </div>
              <div className="copy-right">
                <p>
                  © {new Date().getFullYear()}, All rights reserved. | Made with passion by
                  <Link href="/">Octopus Technologies</Link>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
