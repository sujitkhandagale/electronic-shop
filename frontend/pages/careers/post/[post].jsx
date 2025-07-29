import React, { useEffect, useState } from "react";
import Layout from "@/components/layouts/Layout";
import { useRouter } from "next/router";
import jobs from "../../../components/data/jobs.json";
import Button from "@/components/common/button/Button";

function Post() {
  const [postInfo, setPostInfo] = useState({});
  console.log("postInfo", postInfo);
  const router = useRouter();
  const { post } = router.query;
  useEffect(() => {
    //   find post from job array
    const MyPost = jobs.find((item) => post === item?.slug) ?? null;
    setPostInfo(MyPost);
  }, [post]);
  return (
    <Layout>
      <div className="container">
        <br />
        <br />
        <h2>{postInfo?.title}</h2>
        <p>Department : {postInfo?.department}</p>
        <p>Ex. {postInfo?.experience}</p>
        <p>Mode : {postInfo?.mode}</p>
        <br />
        <div dangerouslySetInnerHTML={{ __html: postInfo?.description }}></div>
        <br />
        <Button variant="primary">Apply Now</Button>
        <br />
        <br />
      </div>
    </Layout>
  );
}
export default Post;
