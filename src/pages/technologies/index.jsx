/* eslint-disable @next/next/no-img-element */
import React from "react";
import MainLayout from "../../layouts/main";
import WorkThreeColumn from "../../components/Work-Three-Column";
import PageHeader from "../../components/Page-header";

const Work2 = () => {
  React.useEffect(() => {
    document.querySelector("body").classList.add("index3");
  }, []);
  return (
    <MainLayout>
       <PageHeader
        title="Technologies"
        fullPath={[
          { id: 1, name: "home", url: "/" },
          { id: 2, name: "technologies", url: "/technologies" },
        ]}
        image="/assets/img/technolog.webp"
      />
      <WorkThreeColumn />
    </MainLayout>
  );
};

export default Work2;
