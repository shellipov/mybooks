import React, { FC } from "react";
import AboutContent from "../components/AboutContent";

const About: FC = () => {
  return (
    <div className="full_heigth center">
      <div className="margin">
        <h1>О программе</h1>
      </div>
      <AboutContent />
    </div>
  );
};

export default About;
