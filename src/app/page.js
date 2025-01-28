"use client";
// import Image from "next/image";
// import styles from "./page.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// // import Lottie from "lottie-react";
// import animationData from "@/public/img/sol.json";
// import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home2() {
  const [language, setLanguage] = useState("es"); // Idioma por defecto: español

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  return (
    <>
      <div className="container">
      
        <header className="flex-r">
          <div className={styles.ctas}>
            <button className={styles.primary} onClick={toggleLanguage}>
              {language === "es" ? "Switch to English" : "Cambiar a Español"}
            </button>
          </div>
        </header>

        <h1>{language === "es" ? 'Portfolio de animaciones ".SVG"' : '".SVG" animation portfolio'}</h1>
        {/* https://help.lottiefiles.com/hc/en-us/articles/4887671268249-Sync-Lottie-with-scroll */}
        <div className="lotties flex-vertical">
          <h2>{language === "es" ? "Animaciones de procesos digitales" : "Digital process animation"}</h2>
          <p>{language === "es" ? "Barras de carga, indicador de espera, etc" : "Loading bars, waiting symbols, etc."}</p>

          <div className="flex">
            <DotLottieReact className="lottie" speed="1" mode="normal" direction="1" background="transparent" src="img/Dots.json" loop="true" autoplay="true" />
          </div>
        </div>
        <div className="lotties flex-vertical">
          <h2>{language === "es" ? "Animaciones experimentales o decorativas" : "Decorative or experimental animations"}</h2>

          <div className="flex">
            <DotLottieReact className="lottie" speed="1" mode="normal" direction="1" background="transparent" src="img/maceta.json" loop="true" autoplay="true"></DotLottieReact>
            <DotLottieReact className="lottie" speed="1" mode="normal" direction="1" background="transparent" src="img/circulos.json" loop="true" autoplay="true"></DotLottieReact>
            <DotLottieReact className="lottie" speed="1" mode="normal" direction="1" background="transparent" src="img/lineas.json" loop="true" autoplay="true"></DotLottieReact>
            <DotLottieReact className="lottie" speed="1" mode="normal" direction="1" background="transparent" src="img/sol.json" loop="true" autoplay="true"></DotLottieReact>
            <DotLottieReact className="lottie" speed="1" mode="normal" direction="1" background="transparent" src="img/estrella.json" loop="true" autoplay="true"></DotLottieReact>
          </div>
        </div>
        <div className="lotties flex-vertical">
          <h2>{language === "es" ? "Set de animaciones para su empresa" : "Animation sets for your businness"}</h2>
          <p>
            {language === "es" ? "Gráficos representativos de diversos servicios, siguiendo el estilo gráfico de su marca." : "Graphics that represent your services, following your brand aesthetic."}
          </p>

          <div className="flex">
            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/1_Local SEO Optimization.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/2_Technical SEO Audits.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/3_Keyword Research.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/4_Local Citations.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact className="lottie " speed="1" mode="normal" direction="1" background="transparent" src="img/animacionesWork/5_Backlinks.json" loop="true" autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/6_Press Release.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/7_Competitor Analysis.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/8_Geo-Targeted Landing Pages.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/9_Website Design & Development.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact className="lottie " speed="1" mode="normal" direction="1" background="transparent" src="img/animacionesWork/10_Ad Design.json" loop="true" autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/11_Infographic Design.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/12_Custom Web Development.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/13_Conversion Rate Optimization.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/14_Content Marketing.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact className="lottie" speed="1" mode="normal" direction="1" background="transparent" src="img/animacionesWork/15_Ads Copy.json" loop="true" autoplay="true"></DotLottieReact>

            <DotLottieReact className="lottie" speed="1" mode="normal" direction="1" background="transparent" src="img/animacionesWork/16_Blogs.json" loop="true" autoplay="true"></DotLottieReact>

            <DotLottieReact className="lottie" speed="1" mode="normal" direction="1" background="transparent" src="img/animacionesWork/17_Articles.json" loop="true" autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/18_Social Media Ads.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/19_PPC Campaign.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/20_Analytics & Reporting.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/21_Reputation Management.json"
              loop="true"
              autoplay="true"></DotLottieReact>

            <DotLottieReact
              className="lottie"
              speed="1"
              mode="normal"
              direction="1"
              background="transparent"
              src="img/animacionesWork/22_Email Marketing.json"
              loop="true"
              autoplay="true"></DotLottieReact>
          </div>
        </div>
        <footer><p>{language === "es" ? 'Hecho por Daniela Bojanich ✨ 2025' : 'Made by Daniela Bojanich ✨ 2025'}</p></footer>
      </div>
    </>
  );
}
