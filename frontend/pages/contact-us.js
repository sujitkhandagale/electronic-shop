import React from "react";
import Layout from "@/components/layouts/Layout";
import PageHeader from "@/components/common/page-header/PageHeader";
import ContactUsForm from "@/components/contactus/ContactUsForm";

import Head from "next/head";
function ContactUs() {
  return (
    <Layout>
      <Head>
        <title>Contact Us</title>
      </Head>
      <PageHeader title={"Contact Us"} />
      <div className="container">
        <ContactUsForm />
      </div>
    </Layout>
  );
}

export default ContactUs;
