import react from "react";
import Common from "./Common";

const About = () => {
  const images =
    "https://image.shutterstock.com/image-illustration/about-us-concept-on-blue-600w-200951348.jpg";
  return (
    <>
      <Common
        name="Our mission is to organise the "
        span="world’s information and Easy "
        btnname="Contact us"
        imgsrc={images}
        visit="/Contactus"
      />
    </>
  );
};
export default About;
