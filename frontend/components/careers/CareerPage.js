import React, { useState } from "react";
import style from "./career.module.scss";
import Button from "@/components/common/button/Button";
import jobs from "../data/jobs.json";
import Link from "next/link";

function CareerPage() {
  const [searchKey, setSearchKey] = useState("");
  return (
    <div className={"container"}>
      <div className={style.search}>
        <div className={"text-center"}>
          <h3>Search For Jobs</h3>
        </div>
        <div className={style.options}>
          <input
            onChange={(e) => setSearchKey(e.target.value)}
            type="text"
            placeholder="Search"
          />
          <Button>Search</Button>
        </div>
      </div>
      <div className={style.posts}>
        {jobs
          .filter((item) => {
            const items = item?.title?.toLowerCase();
            return items?.includes(searchKey.toLowerCase()) || searchKey === "";
          })
          .map((item, index) => {
            return <PostBox key={index} data={item} />;
          })}
      </div>
    </div>
  );
}

export default CareerPage;

const PostBox = ({ data }) => {
  return (
    <div className={style.post_box}>
      <div className={style.details}>
        <p>12/12/2022</p>
        <h4>{data?.title}</h4>
        <div className={style.tags}>
          {tags.map((item, index) => {
            return (
              <div key={index} className={style.tag}>
                <p>Department : {item?.department}</p>
                <p>Ex. {item?.experience}</p>
                <p>Mode : {item?.mode}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={style.view_more}>
        <div className={style.pay}>
          <p>{data?.pay}</p>
        </div>
        <Link href={`/careers/post/${data?.slug}`}>
          {" "}
          <Button variant="primary" onClick={() => console.log("view more")}>
            View More
          </Button>
        </Link>
      </div>
    </div>
  );
};

const tags = [
  {
    name: "Sales Executive",
    department: "Sales & Marketing",
    experience: "3 - 5 Years",
    mode: "Full Time",
  },
];
