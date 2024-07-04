import React from "react";
import Layout from "@/components/layouts/Layout";
import CareerPage from "@/components/careers/CareerPage";
import PageHeader from "@/components/common/page-header/PageHeader";

function Careers() {
  return (
    <Layout>
      <PageHeader title={"Careers"} />
      <CareerPage />
    </Layout>
  );
}

export default Careers;
