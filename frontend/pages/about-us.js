import React from "react";
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/common/page-header/PageHeader";
import AboutUsComponent from "@/components/ blogs/about-us/AboutUs";
import Head from "next/head";

function AboutUs() {
  return (
    <Layout>
      <Head>
        <title>About Us </title>
      </Head>
      <PageHeader title={"About Us"} />
      <div className="container">
        <AboutUsComponent />
      </div>
    </Layout>
  );
}

export default AboutUs;
