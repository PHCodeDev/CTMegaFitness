import { useState } from "react";

export default function SobreNos() {
  // Estado para controlar o texto expandido
  const [expanded, setExpanded] = useState(false);

  // Texto adicional que será exibido quando expandir
  const textoAdicional =
    "Nosso espaço é projetado para oferecer conforto e funcionalidade, tornando cada treino um momento prazeroso e eficiente.Nossa equipe de professores altamente qualificados está sempre pronta para oferecer orientação personalizada, ajudando você a atingir seus objetivos de saúde e desenvolvimento com excelência.Aqui, colocamos nossos alunos em primeiro lugar. Cada detalhe é pensado para oferecer o melhor atendimento, seja para iniciantes ou para atletas experientes. Não importa onde você esteja na sua jornada, o CT MegaFitness está aqui para ajudar você a dar o próximo passo.Venha descobrir como podemos transformar sua rotina de treinos em uma experiência incrível!";

  return (
    <section id="sobre-nos" className="flex min-h-screen">
      <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mb-10 mx-auto flex flex-col lg:flex-row justify-between items-center">
        <div className="mx-auto justify-center rounded-xl h-[420px] lg:h-[520px] w-[350px] lg:w-[580px] lg:ml-12 flex flex-col items-center 3xl:w-[570px]">
          <img
            className="lg:hover:-translate-y-2 transition-all lg:mt-10 w-[550px] 2xl:w-[600px]"
            src="https://i.ibb.co/xfy8FcY/Group-6.webp"
            alt=""
          />
        </div>
        <div className="items-center lg:items-start flex flex-col justify-center font-medium 2xl:text-[20px]">
          <div className="w-[330px] lg:w-[540px]">
            <h3 className="mt-[-20px] lg:mt-0 font-karantina font-bold leading-none text-[50px] lg:text-[90px] 2xl:text-[30px]">
              <span className="text-[30px] lg:text-[40px]">Sobre nós</span>
              <br />
              SOMOS O <br />
              <span className="text-marrom">CT MEGAFITNESS</span>
            </h3>
            <p className="text-cinza text-[18px] mb-4 mt-4">
              No CT MegaFitness, acreditamos que o exercício é para todos! Desde
              a nossa fundação em dezembro de 2022, nossa missão tem sido
              proporcionar saúde, conforto e bem-estar, criando um ambiente
              acolhedor onde cada aluno possa alcançar sua melhor versão. Com
              infraestrutura de ponta, equipamentos de última geração e
              maquinário de biomecânica avançada, garantimos uma experiência
              única para nossos alunos.
              {expanded && <span className="block mt-4">{textoAdicional}</span>}
            </p>
            <button
              className="bg-marrom text-cinza w-52 font-semibold text-center p-2 lg:p-1 text-[25px] 2xl:text-[33px] lg:text-[22px] rounded-lg hover:scale-105 duration-500"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded ? "Mostrar Menos" : "Saiba Mais"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
