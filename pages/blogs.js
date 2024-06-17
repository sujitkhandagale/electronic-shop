import React from "react";
import Layout from "@/components/layouts/Layout";
import BlogGrid from "@/components/ blogs/BlogGrid";
import PageHeader from "@/components/common/page-header/PageHeader";

function Blogs() {
  return (
    <Layout>
      <PageHeader title={"Blogs"} />
      <div className="container">
        <BlogGrid />
      </div>
    </Layout>
  );
}

export default Blogs;
