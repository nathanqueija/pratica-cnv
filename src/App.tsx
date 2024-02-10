import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Randomizer } from "./Randomizer";
import { Timeline } from "./Timeline";

const checkIns = [
  "Como estou chegando?",
  "O que está vivo para mim agora?",
  "Que parte minha não gostaria de estar aqui neste momento?",
  "Que parte minha gostaria de estar aqui?",
  "O que estou cuidando para estar aqui?",
  "Como é estar na minha pele hoje?",
  "Qual o maior desafio que tenho na vida hoje?",
  "Pelo que sou grato hoje?",
  "Qual o clima interno? (ex. ensolarado)",
  "O que estou celebrando e o que estou enlutando?",
  "Como está minha mente hoje?",
  "Como está meu coração hoje?",
];

const feelings = [
  "CALMO",
  "RELAXADO",
  "CONECTADO",
  "DESCANSADO",
  "RENOVADO",
  "CONTENTE",
  "FELIZ",
  "ALEGRE",
  "ANIMADO",
  "ESPERANÇOSO",
  "INSPIRADO",
  "ENERGIZADO",
  "ALERTA",
  "DISPOSTO",
  "GRATO",
  "EMPODERADO",
  "MOTIVADO",
  "CONCENTRADO",
  "CURIOSO",
  "INTERESSADO",
  "BEM-HUMORADO",
  "AMOROSO",
  "CENTRADO",
  "SEGURO",
  "ALIVIADO",
  "OTIMISTA",
  "SATISFEITO",
  "PLENO",
  "COM RAIVA",
  "FURIOSO",
  "ABORRECIDO",
  "EXAUSTO",
  "ESTAFADO",
  "DEPRIMIDO",
  "TRISTE",
  "SOZINHO",
  "DESENCORAJADO",
  "DESANIMADO",
  "DESESPERANÇOSO",
  "IRRITADO",
  "RECEOSO",
  "DESCONFORTÁVEL",
  "CHATEADO",
  "AGITADO",
  "FRUSTRADO",
  "DESCONCENTRADO",
  "SURPRESO",
  "TENSO",
  "COM MEDO",
  "PREOCUPADO",
  "PESSIMISTA",
  "CANSADO",
  "FRAGILIZADO",
  "ENVERGONHADO",
  "CONFUSO",
  "ANSIOSO",
];

const needs = [
  "HONESTIDADE",
  "AUTENTICIDADE",
  "INTEGRIDADE",
  "PRESENÇA",
  "AUTONOMIA",
  "ESCOLHA",
  "LIBERDADE",
  "ESPAÇO",
  "ESPONTANEIDADE",
  "EXPRESSÃO",
  "SIGNIFICADO",
  "COMPREENSÃO",
  "CELEBRAÇÃO",
  "CLAREZA",
  "CONTRIBUIÇÃO",
  "SENTIDO",
  "LUTO",
  "INSPIRAÇÃO",
  "REALIZAÇÃO",
  "EVOLUÇÃO",
  "ESPERANÇA",
  "APRENDIZADO",
  "DESAFIO",
  "DESCOBERTA",
  "CRIATIVIDADE",
  "VALORIZAÇÃO",
  "CRESCIMENTO",
  "CONEXÃO",
  "EMPATIA",
  "ACEITAÇÃO",
  "PERTENCIMENTO",
  "COOPERAÇÃO",
  "COMUNICAÇÃO",
  "INTERDEPENDÊNCIA",
  "COMPROMETIMENTO",
  "COERÊNCIA",
  "RECONHECIMENTO",
  "RESPEITO",
  "SEGURANÇA",
  "ESTABILIDADE",
  "APOIO",
  "SUPORTE",
  "AFETO",
  "CONFORTO",
  "CONFIANÇA",
  "SUSTENTABILIDADE",
  "PROTEÇÃO",
  "PAZ",
  "BELEZA",
  "COMUNHÃO",
  "BEM-ESTAR",
  "EQUIDADE",
  "HARMONIA",
  "ORDEM",
  "EXPRESSÃO ESPIRITUAL",
  "LAZER",
  "DIVERSÃO",
  "HUMOR",
  "FACILIDADE",
  "VARIEDADE",
  "AR",
  "ÁGUA",
  "ALIMENTO",
  "MOVIMENTO",
  "DESCANSO/SONO",
  "ABRIGO",
  "TOQUE",
  "SAÚDE",
];

const movies = [
  "Duas vidas",
  "As vantagens de ser invisível",
  "O fabuloso destino de Amélie Poulain",
  "Manchester à Beira-Mar",
  "Pequena Miss Sunshine",
  "Um homem chamado Ove",
  "Árvore da Vida",
  "Lady Bird",
  "Álbum de Família",
  "A vida secreta das abelhas",
  "Intocáveis",
  "Big Fish",
  "Para sempre Alice",
  "Encanto",
  "Estão todos bem",
  "RED",
  "Elementos",
  "Divertidamente",
  "La Belle Verte",
  "A viagem de Chihiro",
];

const App = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <span className="text-3xl">🦒</span>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          {/* <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900"
              >
                {item.name}
              </a>
            ))}
          </div> */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end"></div>
        </nav>
      </header>

      <div className="relative isolate px-6 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-30 lg:py-30">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Grupo de prática
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p> */}
            <div className="mt-10 flex flex-col items-center justify-center gap-6">
              <Randomizer title="Check-in de hoje" words={checkIns} />
              <Randomizer title="Sentimento para discussão" words={feelings} />
              <Randomizer title="Necessidade para discussão" words={needs} />
              <Randomizer title="Filme do mês" words={movies} />

              <div className="mt-6">
                <Timeline />
              </div>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
