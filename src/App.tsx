import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { Randomizer } from "./Randomizer";
import { Timeline } from "./Timeline";

const checkIns = [
  "Qual necessidade sua está sendo/foi atendida hoje?",
  "Há alguma necessidade sua que não está sendo atendida agora?",
  "O que está vivo em você neste momento?",
  "Qual foi um momento recente em que você se sentiu verdadeiramente conectado(a) com alguém?",
  "O que você espera alcançar ou vivenciar durante este encontro?",
  "Existe algo que você gostaria de expressar ou compartilhar antes de começarmos?",
  "Com o que você está se preocupando ou refletindo ultimamente?",
  "O que você está trazendo consigo hoje (pensamentos, sentimentos, expectativas)?",
  "Qual foi a última vez que você se sentiu ouvido(a) de verdade?",
  "Que qualidade de presença você gostaria de oferecer ao grupo hoje?",
  "Se houvesse uma coisa que você gostaria de deixar para trás hoje, o que seria?",
  "O que te trouxe alegria ou alívio recentemente?",
  "Qual valor ou princípio é mais importante para você neste momento?",
  "Como está seu coração hoje?",
  "Existe algo que você gostaria de receber do grupo neste encontro?",
  "Se você pudesse usar uma palavra para descrever seu estado atual, qual seria?",
  "Que sentimento ou necessidade você gostaria de nomear agora?",
  "Há algo que te impeça de estar totalmente presente neste encontro?",
  "O que você está precisando no momento para se sentir mais presente?",
  "Qual a última vez que você se sentiu verdadeiramente em paz?",
  "O que você gostaria de reconhecer em si mesmo(a) hoje?",
  "Qual foi a última vez que você expressou gratidão por algo ou alguém?",
  "Existe algum desafio que você está enfrentando e gostaria de compartilhar?",
  "Se você pudesse trazer um sentimento para este encontro, qual seria?",
  "O que te faz sentir inspirado(a) recentemente?",
  "Qual foi a última vez que você se sentiu vulnerável, e como foi para você?",
  "O que você está buscando cultivar em sua vida neste momento?",
];

const feelings = [
  "Agradecido(a)",
  "Alegre",
  "Alerta",
  "Aliviado(a)",
  "Amoroso(a)",
  "Animado(a)",
  "Apaixonado(a)",
  "Cheio(a) de Energia",
  "Comovido(a)",
  "Confiante",
  "Confortável",
  "Contente",
  "Curioso(a)",
  "Deslumbrado(a)",
  "Esperançoso(a)",
  "Estimulado(a)",
  "Eufórico(a)",
  "Feliz",
  "Impressionado(a)",
  "Inspirado(a)",
  "Interessado(a)",
  "Intrigado(a)",
  "Orgulhoso(a)",
  "Otimista",
  "Realizado(a)",
  "Relaxado(a)",
  "Satisfeito(a)",
  "Solidário(a)",
  "Surpreso(a)",
  "Tranquilo(a)",
  "Ansioso(a)",
  "Apavorado(a)",
  "Apreensivo(a)",
  "Cauteloso(a)",
  "Chocado(a)",
  "Confuso(a)",
  "Constrangido(a)",
  "Culpado(a)",
  "Desconfiado(a)",
  "Desconfortável",
  "Desorientado(a)",
  "Embaraçado(a)",
  "Envergonhado(a)",
  "Estressado(a)",
  "Horrorizado(a)",
  "Impaciente",
  "Incrédulo(a)",
  "Indeciso(a)",
  "Modesto(a)",
  "Nervoso(a)",
  "Preocupado(a)",
  "Relutante",
  "Aborrecido(a)",
  "Agoniado(a)",
  "Agressivo(a)",
  "Colérico(a)",
  "Crítico(a)",
  "Decepcionado(a)",
  "Enciumado(a)",
  "Enojado(a)",
  "Exasperado(a)",
  "Frustrado(a)",
  "Histérico(a)",
  "Hostil",
  "Indignado(a)",
  "Invejoso(a)",
  "Irado(a)",
  "Irritado(a)",
  "Perturbado(a)",
  "Rabugento(a)",
  "Revoltado(a)",
  "Vingativo(a)",
  "Cansado(a)",
  "Chateado(a)",
  "Com pena/dó",
  "Com saudades",
  "Depressivo(a)",
  "Desapontado(a)",
  "Desencorajado(a)",
  "Desesperançoso(a)",
  "Desgostoso(a)",
  "Desolado(a)",
  "Entediado(a)",
  "Exausto(a)",
  "Magoado(a)",
  "Melancólico(a)",
  "Nostálgico(a)",
  "Perdido(a)",
  "Retraído(a)",
  "Solitário(a)",
  "Sozinho(a)",
];

const needs = [
  "Abrigo",
  "Água",
  "Ar",
  "Comida",
  "Exercício Físico",
  "Expressão Sexual",
  "Movimento",
  "Saúde",
  "Toque",
  "Acolhimento",
  "Conforto",
  "Estabilidade",
  "Ordem",
  "Segurança",
  "Segurança Física",
  "Suporte",
  "Equilíbrio",
  "Espaço",
  "Harmonia",
  "Integração",
  "Paz",
  "Relaxamento",
  "Tranquilidade",
  "Apoio",
  "Apreciação",
  "Atenção",
  "Companhia",
  "Comunhão",
  "Comunidade",
  "Confiança",
  "Contato",
  "Contribuição",
  "Cumplicidade",
  "Diversidade",
  "Encorajamento",
  "Honestidade",
  "Integração",
  "Mutualidade",
  "Participação",
  "Pertencimento",
  "Proximidade",
  "Troca",
  "Aceitação",
  "Clareza",
  "Compreensão",
  "Empatia",
  "Inclusão",
  "Presença",
  "Afeição",
  "Amor",
  "Carinho",
  "Conexão",
  "Consideração",
  "Respeito",
  "Segurança Emocional",
  "Amor Próprio",
  "Autenticidade",
  "Auto Estima",
  "Criatividade",
  "Equilíbrio",
  "Escolha",
  "Força Interior",
  "Integridade",
  "Liberdade",
  "Metas",
  "Significado",
  "Sonhos",
  "Alegria",
  "Aprendizado",
  "Criatividade",
  "Distração",
  "Humor",
  "Iniciativa",
  "Inspiração",
  "Riso",
  "Apreciação",
  "Beleza",
  "Celebração",
  "Esperança",
  "Expressão espiritual",
  "Felicidade",
  "Gratidão",
  "Luto",
  "Propósito",
  "Significado",
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
              Prática de CNV
            </h1>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p> */}
            <div className="mt-10 flex flex-col items-center justify-center gap-6">
              <Randomizer title="Check-in de hoje" words={checkIns} />
              <Randomizer title="Sentimento" words={feelings} />
              <Randomizer title="Necessidade" words={needs} />
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
