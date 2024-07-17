import LevelProgress from "@/components/level-progress";
import Image from "next/image";

const HomePage = () => {
  return (
    <div className="my-16 px-4 sm:px-8 mx-auto max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-4">
      <section className="space-y-4 col-span-1">
        <div className="text-2xl font-ttsupermolot-bold">
          Olá, meu nome é
        </div>
        <div className="text-5xl font-bold">
          Lucas Kissmann
        </div>
        <div className="text-2xl font-ttsupermolot-normal">
          Sou desenvolvedor de software na DBServer
        </div>
      </section>
      <section className="flex col-span-1">
        <Image src={'/eu-portfoil.jpeg'} height={100} width={400} alt="Imagem de Lucas Kissmann" className="max-w-full h-auto" />
      </section>
      <section className="pr-0 md:pr-10 space-y-4 col-span-1 ">
        <h1 className="text-2xl font-ttsupermolot-bold">
          Sobre mim
        </h1>
        <p className="text-md leading-tight">
          Minha relação com a tecnologia começou cedo, devido a um forte interesse por jogos na minha infância, chegando a atuar brevemente como profissional na adolescência. <br/><br/>Aos 19 anos, após o serviço militar, ingressei na faculdade de Engenharia de Controle e Automação na UFPEL, onde tive meu primeiro contato significativo com a programação. Decidi então cursar Engenharia de Software e hoje, com 23 anos, estou iniciando uma nova jornada na minha carreira aqui na DB. <br/><br/> Depois de 2 anos como desenvolvedor backend Java em outra empresa, senti a necessidade de buscar novos desafios para continuar minha evolução profissional. A oportunidade na DB representa um passo adiante significativo, onde espero aplicar e expandir meus conhecimentos técnicos, contribuindo para projetos inovadores e desafiadores.
        </p>
      </section>
      <section className="space-y-4 col-span-1 ">
        <h1 className="text-2xl font-ttsupermolot-bold">
          Habilidades
        </h1>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <LevelProgress label={"Java"} level={4} />
          </li>
          <li>
            <LevelProgress label={"Spring"} level={4} />
          </li>
          <li>
            <LevelProgress label={"Docker"} level={4} />
          </li>
          <li>
            <LevelProgress label={"TypeScript"} level={4} />
          </li>
          <li>
            <LevelProgress label={"Tailwind"} level={4} />
          </li>
          <li>
            <LevelProgress label={"NodeJS"} level={3} />
          </li>
          <li>
            <LevelProgress label={"NestJS"} level={3} />
          </li>
          <li>
            <LevelProgress label={"NextJS"} level={3} />
          </li>
          <li>
            <LevelProgress label={"React"} level={3} />
          </li>
        </ul>
      </section>
    </div>
  );
}

export default HomePage;
