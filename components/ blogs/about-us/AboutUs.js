import React from "react";
import style from "./about-us.module.scss";
import ImageAsset from "@/components/loader/ImageAsset";
import BoardIcon from "../../../assets/icons/11447386_1297.svg";

function AboutUsComponent() {
  return (
    <div>
      <div className={style.info}>
        <div className={style.bullets}>
          <h2>Experience</h2>
          <p>
            Welcome to our Electronics Shop, where innovation meets quality. Our
            shop offers a wide range of electronic products, from the latest
            gadgets to essential household electronics, catering to all your
            needs.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is to provide top-notch electronic products that enhance
            your lifestyle. We are dedicated to offering the latest technology
            and high-quality electronics at competitive prices. Whether{" "}
            {"you're"}
            looking for a new smartphone, home appliance, or any other
            electronic device, our goal is to make your shopping experience
            seamless and satisfying.
          </p>
          <p>
            As a trusted name in the electronics market, we aim to bring the
            best products to our customers, ensuring they stay ahead with the
            latest innovations. We strive to build a long-lasting relationship
            with our customers by offering exceptional service and support.
          </p>
          <h2>Our Commitment to Quality</h2>
          <p>
            We are committed to providing products that meet the highest
            standards of quality and safety. All our electronics undergo
            rigorous testing to ensure they comply with industry standards and
            regulations. Our shop is synonymous with reliability, and we take
            pride in delivering only the best to our customers.
          </p>
          <p>
            Visit us today and discover a world of electronics designed to make
            your life easier, more connected, and more enjoyable.
          </p>
        </div>
        <div className={style.image}>
          <ImageAsset src={BoardIcon} alt="Board" width={400} height={400} />
        </div>
      </div>
      <div className={style.team_d}>
        <h2>Meet Our Team</h2>
      </div>
      <div className={style.about_grid}>
        {director.map((item, index) => {
          return (
            <div
              data-aos="fade-right"
              key={index}
              className={style.about_grid_item}
            >
              <div className={style.about_grid_item_image}>
                <div className={style.title}>
                  <h3>{item.title}</h3>
                </div>
                <ImageAsset
                  src={item.image}
                  alt={item.name}
                  width={250}
                  height={250}
                />
              </div>
              <div className={style.about_grid_item_content}>
                <h3>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AboutUsComponent;

const director = [
  {
    name: "John Doe",
    title: "Director",
    image: "https://via.placeholder.com/150",
    description:
      "fermentum magna. Nullam auctor, ligula nec luctus lacinia, purus tellus lacinia libero, nec cursus metus justo ac turpis",
  },
  {
    name: "Jane Doe",
    title: "Assistant Director",
    image: "https://via.placeholder.com/150",
    description:
      "fermentum magna. Nullam auctor, ligula nec luctus lacinia, purus tellus lacinia libero, nec cursus metus justo ac turpis",
  },
  {
    name: "John Doe",
    title: "Chairman",
    image: "https://via.placeholder.com/150",
    description:
      "fermentum magna. Nullam auctor, ligula nec luctus lacinia, purus tellus lacinia libero, nec cursus metus justo ac turpis",
  },
  {
    name: "Jane Doe",
    title: "Electrical Engineer",
    image: "https://via.placeholder.com/150",
    description:
      "fermentum magna. Nullam auctor, ligula nec luctus lacinia, purus tellus lacinia libero, nec cursus metus justo ac turpis",
  },
  {
    name: "John Doe",
    title: "Junior Engineer",
    image: "https://via.placeholder.com/150",
    description:
      "fermentum magna. Nullam auctor, ligula nec luctus lacinia, purus tellus lacinia libero, nec cursus metus justo ac turpis",
  },
  {
    name: "Jane Doe",
    title: "Department Head",
    image: "https://via.placeholder.com/150",
    description:
      "fermentum magna. Nullam auctor, ligula nec luctus lacinia, purus tellus lacinia libero, nec cursus metus justo ac turpis",
  },
];
