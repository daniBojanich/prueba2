"use client";
import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const LottieContainer = ({ files = [], basePath = "img" }) => {
  return (
    <div className="flex">
      {files.map((file, index) => (
        <DotLottieReact
          key={index}
          className="lottie"
          speed={1}
          mode="normal"
          direction={1}
          background="transparent"
          src={`/${basePath}/${file}`} // usa la ruta base que recibe
          loop={true}
          autoplay={true}
        />
      ))}
    </div>
  );
};

export default LottieContainer;

