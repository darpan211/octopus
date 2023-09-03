import React from "react";
import MainLayout from "../../layouts/main";
import PageHeader from "../../components/Page-header";
import AboutUs4 from "../../components/About-Us4";
import Skills2, {Skills3} from "../../components/Skills2";

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
        image="/assets/img/about.webp"
      />
      <AboutUs4 />
      <Skills2 />
      <Skills3 />
    </MainLayout>
  );
};

export default About;
