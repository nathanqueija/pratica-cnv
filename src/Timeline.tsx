import { ClockIcon } from "@heroicons/react/24/outline";

const activity = [
  {
    id: 2,
    title: "Boas vindas: 5 min",
    description:
      "Usamos esse momento para nos conectarmos na chamada e aguardarmos quem está chegando.",
    icon: <ClockIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />,
  },
  {
    id: 2,
    title: "Check-in: 15 min",
    description:
      "Sorteamos um check-in para cada um compartilhar como está chegando na prática de hoje.",
    icon: <ClockIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />,
  },
  {
    id: 3,
    title: "Prática: 60min",
    description:
      "Checamos primeiro se alguém no grupo está com algo vivo que queira compartilhar e/ou receber suporte. Caso não haja, iniciamos a prática sorteando uma necessidade ou sentimento para discussão.",
    icon: <ClockIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />,
  },
  {
    id: 4,
    title: "Check-out: 10min",
    description:
      "Compartilhamos como estamos saindo da prática de hoje. Até a próxima! 💛",
    icon: <ClockIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />,
  },
];

export const Timeline = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-xl font-bold">Agenda</h2>
      <ul className="-mb-8">
        {activity.map((activityItem, activityItemIdx) => (
          <li key={activityItem.id}>
            <div className="relative pb-8">
              {activityItemIdx !== activity.length - 1 ? (
                <span
                  className="absolute left-5 top-5 -ml-px h-full w-0.5 bg-gray-200"
                  aria-hidden="true"
                />
              ) : null}
              <div className="relative flex items-start space-x-3">
                <>
                  <div>
                    <div className="relative px-1">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-8 ring-white">
                        <div>{activityItem.icon}</div>
                      </div>
                    </div>
                  </div>
                  <div className="min-w-0 flex-1 py-1.5">
                    <div className="flex flex-col gap-2 items-start">
                      <span className="font-medium text-gray-900">
                        {activityItem.title}
                      </span>
                      <span className="font-medium text-gray-500 text-sm text-left">
                        {activityItem.description}
                      </span>
                    </div>
                  </div>
                </>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
