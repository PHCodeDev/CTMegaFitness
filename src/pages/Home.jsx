import { useEffect } from "react";
import OpenStreetMap from "../components/OpenStreetMap";
import "font-awesome/css/font-awesome.min.css";
import SobreNos from "../components/SobreNos";
import FloatingChatBot from "../components/FloatingChatBot";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faWhatsapp,
  faInstagram,
  faGoogle,
} from "@fortawesome/free-brands-svg-icons";

const handleCopyEmail = () => {
  const email = "diassispersonal@gmail.com";
  navigator.clipboard.writeText(email).then(() => {
    alert("E-mail copiado: " + email);
  });
};
export default function Home() {
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      e.preventDefault();
      const targetId = e.currentTarget.getAttribute("href").replace("#", "");
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    };

    const smoothScrollLinks = document.querySelectorAll("[data-scroll]");
    smoothScrollLinks.forEach((link) =>
      link.addEventListener("click", handleSmoothScroll)
    );

    return () => {
      smoothScrollLinks.forEach((link) =>
        link.removeEventListener("click", handleSmoothScroll)
      );
    };
  }, []);

  return (
    <div>
      <FloatingChatBot />
      <section className='bg-[url("https://i.ibb.co/nP8z63Q/Principal.webp")] lg:bg-fixed bg-no-repeat bg-cover h-auto lg:h-[100vh] flex'>
        <div className="w-[90%] max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          <div className="flex flex-col justify-center text-white text-center lg:text-left items-center lg:items-start">
            <img
              className="my-8 lg:my-0 lg:w-auto mb-4 lg:top-8 lg:left-16"
              src="https://i.ibb.co/F6ZxTjP/LogoCt.png"
              alt="Logo CT MegaFitness"
            />
            <h1 className="font-bold lg:w-[580px] 2xl:w-[800px] mb-4 text-[28px] lg:text-[55px] 2xl:text-[80px] font-karantina leading-tight">
              <span className="text-[24px] lg:text-[30px] 2xl:text-[50px]">
                TRANSFORME SUA VIDA:
              </span>
              <br />
              SAÚDE, BEM-ESTAR, E A SUA MELHOR VERSÃO TE ESPERAM NO{" "}
              <span className="text-marrom">CT MEGAFITNESS!</span>
            </h1>
            <a
              href="#sobre-nos"
              data-scroll
              className="bg-marrom text-cinza mt-4 w-full max-w-[200px] lg:w-52 font-semibold text-center p-3 text-[20px] lg:text-[22px] rounded-lg hover:scale-105 duration-500"
            >
              Saiba Mais
            </a>

            <ul className="flex space-x-4 mt-10">
              <li className="relative group">
                <span className="absolute bottom-full mb-2 w-32 text-center text-xs bg-white text-black rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  WhatsApp
                </span>
                <span
                  className="flex justify-center items-center w-12 h-12 rounded-full transition-transform transform hover:scale-110 shadow-lg"
                  style={{ backgroundColor: "rgb(37, 211, 102)" }}
                >
                  <a
                    href="https://wa.me/5588999079676"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-full h-full"
                  >
                    <FontAwesomeIcon
                      icon={faWhatsapp}
                      className="text-white text-3xl"
                    />
                  </a>
                </span>
              </li>

              <li className="relative group">
                <span className="absolute bottom-full mb-2 w-32 text-center text-xs bg-white text-black rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Instagram
                </span>
                <span
                  className="flex justify-center items-center w-12 h-12 rounded-full transition-transform transform hover:scale-110 shadow-lg"
                  style={{ backgroundColor: "#E4405F" }}
                >
                  <a
                    href="https://www.instagram.com/ctmegafitness/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex justify-center items-center w-full h-full"
                  >
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="text-white text-3xl"
                    />
                  </a>
                </span>
              </li>

              <li className="relative group">
                <span className="absolute bottom-full mb-2 w-32 text-center text-xs bg-white text-black rounded py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Copiar E-mail
                </span>
                <span
                  className="flex justify-center items-center w-12 h-12 rounded-full transition-transform transform hover:scale-110 shadow-lg cursor-pointer"
                  style={{ backgroundColor: "rgb(219, 68, 55)" }}
                  onClick={handleCopyEmail}
                >
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="text-white text-3xl"
                  />
                </span>
              </li>
            </ul>
          </div>

          <div className="flex items-center lg:items-end">
            <img
              className="hidden lg:block h-[570px] 2xl:h-[800px]"
              src="https://i.ibb.co/VjPcSpc/Group-117.webp"
              alt="Mulher com um belo físico"
            />
          </div>
        </div>
      </section>

      <section id="sobre-nos">
        <SobreNos />
      </section>

      <section
        id="porque-ct"
        className="min-h-screen flex flex-col bg-cinza text-white"
      >
        <h2 className="font-karantina mx-auto text-center font-bold leading-none text-[50px] lg:text-[80px] mt-16 2xl:text-[100px] mb-20">
          POR QUE ESCOLHER A CT MEGAFITNESS?
        </h2>
        <div className="font-medium">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-[50%] px-[30px] lg:px-[60px] text-center lg:text-left my-8">
              <h3 className="text-[34px] lg:text-[44px] 2xl:text-[54px] font-bold font-karantina">
                Comunidade
              </h3>
              <p className="text-[18px] lg:text-[20px] 2xl:text-[30px] mb-4">
                Aqui no CT MegaFitness, você encontra mais do que um espaço para
                treinar: encontra uma comunidade acolhedora e motivadora.
                Inspiramos cada aluno a superar seus limites e a alcançar seus
                objetivos em um ambiente de respeito, apoio e conquistas
                compartilhadas.
              </p>
            </div>
            <div className="lg:w-[50%]">
              <img
                className="w-full object-cover max-h-[500px] "
                src="https://i.ibb.co/bHC9Dn4/Group-115.webp"
                alt="Equipe CT MegaFitness"
              />
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-marrom">
            <div className="lg:w-[50%]">
              <img
                className="w-full object-cover max-h-[500px] "
                src="https://i.ibb.co/K2VT9x5/image.webp"
                alt="Mulher motivada fazendo agachamento livre"
              />
            </div>
            <div className="lg:w-[50%] text-cinza px-[30px] lg:px-[60px] text-center lg:text-left my-8">
              <h3 className="text-[34px] lg:text-[44px] 2xl:text-[54px] font-bold font-karantina">
                Motivação
              </h3>
              <p className="text-[18px] lg:text-[20px] 2xl:text-[30px] mb-4">
                Com professores altamente qualificados e sempre ao seu lado,
                você nunca estará sozinho na sua jornada. Nosso ambiente foi
                projetado para estimular o seu progresso, com treinos
                personalizados e apoio constante para você alcançar seus
                objetivos com determinação e entusiasmo.
              </p>
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-[50%] px-[30px] lg:px-[60px] text-center lg:text-left my-8">
              <h3 className="text-[34px] lg:text-[44px] 2xl:text-[54px] font-bold font-karantina">
                Resultados
              </h3>
              <p className="text-[18px] lg:text-[20px] 2xl:text-[30px] mb-4">
                No CT MegaFitness, seu sucesso é o nosso foco. Com
                infraestrutura moderna, maquinário de última geração e planos de
                treino pensados para cada necessidade, garantimos que você veja
                e sinta resultados reais. Seja para melhorar a saúde, ganhar
                força ou conquistar bem-estar, estamos aqui para ajudar você a
                evoluir todos os dias!
              </p>
            </div>
            <div className="lg:w-[50%]">
              <img
                className="w-full object-cover max-h-[500px]"
                src="https://i.ibb.co/X3sNzPL/image-1.webp"
                alt="Homem com um bom físico"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="onde-nos-encontrar"
        className="lg:min-h-screen flex flex-col bg-cinza "
      >
        <h2 className="text-marrom font-karantina mx-auto font-bold leading-none text-[50px] lg:text-[80px] mt-16 2xl:text-[100px] mb-20">
          ONDE NOS ENCONTRAR
        </h2>
        <OpenStreetMap />
      </section>

      <footer className="bg-marrom py-8 font-semibold">
        <div className="w-[90%] max-w-[1200px] mx-auto">
          <div className="flex items-center">
            <p className="text-branco mx-auto text-center text-[14px] lg:text-[15px] 2xl:text-[25px]">
              Todos os direitos Reservados | CTMegaFitness - 2024
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
