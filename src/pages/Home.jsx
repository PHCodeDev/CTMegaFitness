import OpenStreetMap from "../components/OpenStreetMap";
import "font-awesome/css/font-awesome.min.css";
export default function Home() {
  return (
    <div>
      <section className='bg-[url("https://i.ibb.co/nP8z63Q/Principal.webp")] lg:bg-fixed bg-no-repeat bg-cover h-auto lg:h-[100vh] flex'>
        <div className="w-[90%] max-w-[1600px] mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
          
          <div className="flex flex-col justify-center text-white text-center lg:text-left items-center lg:items-start">
            <img
              className="my-8 lg:w-auto mb-4 lg:absolute lg:top-8 lg:left-16"
              src="https://i.ibb.co/F6ZxTjP/LogoCt.png"
              alt="Logo CT MegaFitness"
            />
            <h1 className="font-bold lg:w-[580px] mb-4 text-[28px] lg:text-[55px] font-karantina leading-tight">
              <span className="text-[24px] lg:text-[30px]">
                TRANSFORME SUA VIDA:
              </span>
              <br />
              SAÚDE, BEM-ESTAR, E A SUA MELHOR VERSÃO TE ESPERAM NO{" "}
              <span className="text-marrom">CT MEGAFITNESS!</span>
            </h1>
            <a
              className="bg-marrom text-cinza mt-4 w-full max-w-[200px] lg:w-52 font-semibold text-center p-3 text-[20px] lg:text-[22px] rounded-lg hover:scale-105 duration-500"
              href="#sobre-nos"
            >
              Saiba Mais
            </a>
          </div>

          <div className="flex items-center lg:items-end">
            <img
              className="hidden lg:block h-[570px]"
              src="https://i.ibb.co/VjPcSpc/Group-117.webp"
              alt="Mulher com um belo físico"
            />
          </div>
        </div>
      </section>

      <section id="sobre-nos" className="flex min-h-screen ">
        <div className="w-[350px] lg:w-[1200px] 2xl:w-[1600px] mb-10 mx-auto flex flex-col lg:flex-row justify-between items-center">
          <div className="mx-auto justify-center rounded-xl h-[420px] lg:h-[520px]  w-[350px] lg:w-[580px]  lg:ml-12 flex flex-col items-center 3xl:w-[570px]">
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
                No CT MegaFitness, acreditamos que o exercício é para todos!
                Desde a nossa fundação em dezembro de 2022, nossa missão tem
                sido proporcionar saúde, conforto e bem-estar, criando um
                ambiente acolhedor onde cada aluno possa alcançar sua melhor
                versão. Com infraestrutura de ponta, equipamentos de última
                geração e maquinário de biomecânica avançada, garantimos uma
                experiência única para nossos alunos.
              </p>
              <a
                className="bg-marrom block text-cinza w-52 font-semibold text-center p-2 lg:p-1 text-[25px] 2xl:text-[33px] lg:text-[22px] rounded-lg hover:scale-105 duration-500"
                href="#form"
              >
                Saiba Mais
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="porque-ct"
        className=" min-h-screen flex flex-col bg-cinza text-white"
      >
        <h2 className="font-karantina mx-auto text-center font-bold leading-none text-[50px] lg:text-[80px] mt-16 2xl:text-[30px] mb-20">
          POR QUE ESCOLHER A CT MEGAFITNESS?
        </h2>
        <div className="font-medium">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-[50%] px-[30px] lg:px-[60px] text-center lg:text-left my-8">
              <h3 className="text-[34px] lg:text-[44px] font-bold font-karantina">
                Comunidade
              </h3>
              <p className="text-[18px] lg:text-[20px] mb-4">
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
              <h3 className="text-[34px] lg:text-[44px] font-bold font-karantina">
                Motivação
              </h3>
              <p className="text-[18px] lg:text-[20px] mb-4">
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
              <h3 className="text-[34px] lg:text-[44px] font-bold font-karantina">
                Resultados
              </h3>
              <p className="text-[18px] lg:text-[20px] mb-4">
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
        id="porque-ct"
        className=" lg:min-h-screen flex flex-col bg-cinza "
      >
        <h2 className="text-marrom font-karantina mx-auto font-bold leading-none text-[50px] lg:text-[80px] mt-16 2xl:text-[30px] mb-20">
          ONDE NOS ENCONTRAR
        </h2>
        <OpenStreetMap />
      </section>
      <footer className="bg-marrom py-8 font-semibold">
  {/* Container principal */}
  <div className="w-[90%] max-w-[1200px] mx-auto">
    {/* Informações de contato */}
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-4">
      <div className="flex items-start lg:items-center text-branco space-x-4">
        <img
          className="h-10"
          src="https://i.ibb.co/1zS13WC/Rectangle-212.png"
          alt="Ícone de endereço"
        />
        <p className="text-[16px] lg:text-[15px]">
          R. Prefeito Catunda Fontele<br />  N•73,
          Ipueiras, Ceará 
        </p>
      </div>

      <div className="flex items-start lg:items-center text-branco space-x-4">
        <img
          className="h-9"
          src="https://i.ibb.co/sHHrQQD/image-16.png"
          alt="Ícone de telefone"
        />
        <p className="text-[18px] lg:text-[15px]">+55 88 99907-9676</p>
      </div>

      <div className="flex items-start lg:items-center text-branco space-x-4">
        <img
          className="h-7"
          src="https://i.ibb.co/mcj7kxx/Rectangle-211.png"
          alt="Ícone de e-mail"
        />
        <p className="text-[18px] lg:text-[15px]">diassispersonal@gmail.com</p>
      </div>
    </div>
    <div className="h-[1px] bg-cinza my-5 w-full"></div>
    <div className="flex items-center">
      <p className="text-branco mx-auto text-center text-[14px] lg:text-[15px]">
        Todos os direitos Reservados | CTMegaFitness - 2024
      </p>
    </div>
  </div>
</footer>

    </div>
  );
}
