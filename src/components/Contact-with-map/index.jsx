import React from "react";

const ContactWithMap = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-6 map-box">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.046065363247!2d72.89910067603743!3d21.230021830834094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be0458b2a400001%3A0xd2243dbe6f25fa4!2sOctopus%20Technologies!5e0!3m2!1sen!2sin!4v1693729938284!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          {/* <iframe src={appData.mapIframe}></iframe> */}
        </div>
        <div className="col-lg-6 form">
          <form>
            <div className="messages"></div>
            <div className="controls">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required="required"
                />
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required="required"
                />
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows="4"
                  required="required"
                ></textarea>
              </div>

              <button type="submit" className="btn-curve btn-color">
                <span>Send Message</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactWithMap;
