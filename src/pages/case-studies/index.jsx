import React from 'react'
import MainLayout from '../../layouts/main'
import PageHeader from '../../components/Page-header'
import BlogsList from '../../components/Blogs-List'
import CaseList from '../../components/CaseStudy'

const Blogs = () => {
  React.useEffect(() => {
    document.querySelector('body').classList.add('index3')
  }, [])
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
        <CaseList />
      </MainLayout>
    );
}

export default Blogs;