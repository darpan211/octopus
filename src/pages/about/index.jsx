import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import Services3 from "../../components/Services3";
import Skills2, {Skills3} from "../../components/Skills2";
import Testimonials1 from "../../components/Testimonials1";
import Team2 from "../../components/Team2";
import LightLayout from "../../layouts/light";

const About = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);

  return (
    <MainLayout>
      <PageHeader
        title="About Us"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "about us", url: "/about" },
        ]}
        image="/assets/img/about.jpg"
      />
      <AboutUs4 />
      {/* <Services3 bigTitle grid /> */}
      <Skills2 />
      <Skills3 />
    </MainLayout>
  );
};

export default About;
