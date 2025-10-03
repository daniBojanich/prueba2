"use client";
// import lotties from "@/js/lotties.json";   // importa tu array
import lottiesWork from "@/js/lottiesWork.json"; // importa tu array
import lottiesArt from "@/js/lottiesArt.json";
import lottiesLoaders from "@/js/lottiesLoaders.json";
import LottieContainer from "./containers/LottieContainer";
// import Image from "next/image";
// import styles from "./page.module.css";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
// // import Lottie from "lottie-react";
// import animationData from "@/public/img/sol.json";
// import { Player } from "@lottiefiles/react-lottie-player";
import { useState } from "react";
import styles from "./page.module.css";
import Rive from "@rive-app/react-canvas";

export default function Home2() {
  const [language, setLanguage] = useState("es"); // Idioma por defecto: español

  const toggleLanguage = () => {
    setLanguage((prevLanguage) => (prevLanguage === "es" ? "en" : "es"));
  };

  return (
    <>
      <div className="container">
        <header className="flex-l">
          <div className={styles.ctas}>
            <button className={styles.primary} onClick={toggleLanguage}>
              {language === "es" ? "Switch to English" : "Cambiar a Español"}
            </button>
          </div>
        </header>

        <section className="hero">
          <h2>{language === "es" ? "Hola, soy Daniela" : "Hi, I'm Daniela"}</h2>
          <p>
            {language === "es"
              ? "Soy diseñadora gráfica graduada y me he especializado en animación y motion graphics. También hago interfaces para webs y apps."
              : "I'm a graduate graphic designer, specializing in animation and motion graphics. I also design interfaces for websites and apps."}
          </p>
          {/* <a className="cta-button" href="#lotties">
    {language === "es" ? "Ver trabajos" : "See my work"}
    </a> */}
          <h3>
            <a href="https://www.upwork.com/freelancers/danielabojanich">Contact me via Upwork</a>
          </h3>
        </section>
        <h1>{language === "es" ? 'Portfolio de animaciones ".SVG"' : '".SVG" animation portfolio'}</h1>
        {/* https://help.lottiefiles.com/hc/en-us/articles/4887671268249-Sync-Lottie-with-scroll */}
        <div className="lotties flex-vertical">
          <h2>{language === "es" ? "Animaciones de procesos digitales" : "Digital process animation"}</h2>
          <p>{language === "es" ? "Barras de carga, indicador de espera, etc" : "Loading bars, waiting symbols, etc."}</p>

          <LottieContainer files={lottiesLoaders} basePath="img/loaders" />
        </div>
        <div className="lotties flex-vertical">
          <h2>{language === "es" ? "Animaciones experimentales o decorativas" : "Decorative or experimental animations"}</h2>

          <div className="flex">
            <Rive src="img/rive/cafecito.riv" stateMachines="cafecitoanim" className="lottie" />
            <LottieContainer files={lottiesArt} basePath="img/art" />
          </div>
        </div>
        <div className="lotties flex-vertical">
          <h2>{language === "es" ? "Set de animaciones para su empresa" : "Animation sets for your businness"}</h2>
          <p>
            {language === "es" ? "Gráficos representativos de diversos servicios, siguiendo el estilo gráfico de su marca." : "Graphics that represent your services, following your brand aesthetic."}
          </p>

          <div className="flex">
            <LottieContainer files={lottiesWork} basePath="img/animacionesWork" />
          </div>
        </div>
        <footer id="contact">
          <p>{language === "es" ? "Hecho por Daniela Bojanich ✨ 2025" : "Made by Daniela Bojanich ✨ 2025"}</p>
          <ul className="social">
            <li>
              <a href="https://www.behance.net/danielabojanich" target="_blank">
                Behance
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/danielabojanich/" target="_blank">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="mailto:danielabojanich@gmail.com" target="_blank">
                Mail
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
}
