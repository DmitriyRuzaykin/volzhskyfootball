import { useState } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("schedule");

  // Список команд
  const teams = [
    "ФК Петьял",
    "ФК Карамассы",
    "ФК Параты",
    "ФК Приволжск",
    "ФК Помары",
    "ФК Ярамор",
    "ФК Сотнур",
    "ФК Эмеково",
    "ФК Часовенная"
  ];

  // Все матчи по турам
  const allMatchesByRound = [
    {
      round: 1,
      date: "03.05",
      matches: [
        { home: "ФК Петьял", away: "ФК Карамассы" },
        { home: "ФК Приволжск", away: "ФК Помары" },
        { home: "ФК Сотнур", away: "ФК Ярамор" },
        { home: "ФК Эмеково", away: "ФК Часовенная" }
      ]
    },
    {
      round: 2,
      date: "10.05",
      matches: [
        { home: "ФК Карамассы", away: "ФК Параты" },
        { home: "ФК Петьял", away: "ФК Ярамор" },
        { home: "ФК Помары", away: "ФК Часовенная" },
        { home: "ФК Сотнур", away: "ФК Эмеково" }
      ]
    },
    {
      round: 3,
      date: "17.05",
      matches: [
        { home: "ФК Параты", away: "ФК Приволжск" },
        { home: "ФК Карамассы", away: "ФК Ярамор" },
        { home: "ФК Петьял", away: "ФК Эмеково" },
        { home: "ФК Сотнур", away: "ФК Помары" }
      ]
    },
    {
      round: 4,
      date: "24.05",
      matches: [
        { home: "ФК Ярамор", away: "ФК Параты" },
        { home: "ФК Часовенная", away: "ФК Приволжск" },
        { home: "ФК Эмеково", away: "ФК Карамассы" },
        { home: "ФК Помары", away: "ФК Петьял" }
      ]
    },
    {
      round: 5,
      date: "31.05",
      matches: [
        { home: "ФК Параты", away: "ФК Часовенная" },
        { home: "ФК Ярамор", away: "ФК Эмеково" },
        { home: "ФК Приволжск", away: "ФК Сотнур" },
        { home: "ФК Карамассы", away: "ФК Помары" }
      ]
    },
    {
      round: 6,
      date: "07.06",
      matches: [
        { home: "ФК Эмеково", away: "ФК Параты" },
        { home: "ФК Сотнур", away: "ФК Часовенная" },
        { home: "ФК Ярамор", away: "ФК Помары" },
        { home: "ФК Петьял", away: "ФК Приволжск" }
      ]
    },
    {
      round: 7,
      date: "14.06",
      matches: [
        { home: "ФК Параты", away: "ФК Сотнур" },
        { home: "ФК Помары", away: "ФК Эмеково" },
        { home: "ФК Часовенная", away: "ФК Петьял" },
        { home: "ФК Приволжск", away: "ФК Карамассы" }
      ]
    },
    {
      round: 8,
      date: "21.06",
      matches: [
        { home: "ФК Параты", away: "ФК Помары" },
        { home: "ФК Петьял", away: "ФК Сотнур" },
        { home: "ФК Карамассы", away: "ФК Часовенная" },
        { home: "ФК Ярамор", away: "ФК Приволжск" }
      ]
    },
    {
      round: 9,
      date: "28.06",
      matches: [
        { home: "ФК Параты", away: "ФК Петьял" },
        { home: "ФК Сотнур", away: "ФК Карамассы" },
        { home: "ФК Эмеково", away: "ФК Приволжск" },
        { home: "ФК Часовенная", away: "ФК Ярамор" }
      ]
    },
    {
      round: 10,
      date: "05.07",
      matches: [
        { home: "ФК Петьял", away: "ФК Параты" },
        { home: "ФК Карамассы", away: "ФК Сотнур" },
        { home: "ФК Приволжск", away: "ФК Эмеково" },
        { home: "ФК Ярамор", away: "ФК Часовенная" }
      ]
    },
    {
      round: 11,
      date: "12.07",
      matches: [
        { home: "ФК Помары", away: "ФК Параты" },
        { home: "ФК Сотнур", away: "ФК Петьял" },
        { home: "ФК Часовенная", away: "ФК Карамассы" },
        { home: "ФК Приволжск", away: "ФК Ярамор" }
      ]
    },
    {
      round: 12,
      date: "19.07",
      matches: [
        { home: "ФК Сотнур", away: "ФК Параты" },
        { home: "ФК Эмеково", away: "ФК Помары" },
        { home: "ФК Петьял", away: "ФК Часовенная" },
        { home: "ФК Карамассы", away: "ФК Приволжск" }
      ]
    },
    {
      round: 13,
      date: "26.07",
      matches: [
        { home: "ФК Параты", away: "ФК Эмеково" },
        { home: "ФК Часовенная", away: "ФК Сотнур" },
        { home: "ФК Помары", away: "ФК Ярамор" },
        { home: "ФК Приволжск", away: "ФК Петьял" }
      ]
    },
    {
      round: 14,
      date: "02.08",
      matches: [
        { home: "ФК Параты", away: "ФК Ярамор" },
        { home: "ФК Приволжск", away: "ФК Часовенная" },
        { home: "ФК Карамассы", away: "ФК Эмеково" },
        { home: "ФК Петьял", away: "ФК Помары" }
      ]
    },
    {
      round: 15,
      date: "09.08",
      matches: [
        { home: "ФК Приволжск", away: "ФК Параты" },
        { home: "ФК Ярамор", away: "ФК Карамассы" },
        { home: "ФК Эмеково", away: "ФК Петьял" },
        { home: "ФК Помары", away: "ФК Сотнур" }
      ]
    },
    {
      round: 16,
      date: "16.08",
      matches: [
        { home: "ФК Параты", away: "ФК Карамассы" },
        { home: "ФК Ярамор", away: "ФК Петьял" },
        { home: "ФК Часовенная", away: "ФК Помары" },
        { home: "ФК Эмеково", away: "ФК Сотнур" }
      ]
    },
    {
      round: 17,
      date: "23.08",
      matches: [
        { home: "ФК Карамассы", away: "ФК Петьял" },
        { home: "ФК Помары", away: "ФК Приволжск" },
        { home: "ФК Ярамор", away: "ФК Сотнур" },
        { home: "ФК Часовенная", away: "ФК Эмеково" }
      ]
    },
    {
      round: 18,
      date: "30.08",
      matches: [
        { home: "ФК Карамассы", away: "ФК Петьял" },
        { home: "ФК Помары", away: "ФК Приволжск" },
        { home: "ФК Ярамор", away: "ФК Сотнур" },
        { home: "ФК Часовенная", away: "ФК Эмеково" }
      ]
    }
  ];

  // Завершённые туры (первые два)
  const completedRounds = allMatchesByRound.slice(0, 2);

  // Туры, которые ещё не начались или запланированы
  const upcomingRounds = allMatchesByRound.slice(2);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl md:text-4xl font-bold">Чемпионат Волжского района по футболу 2025</h1>
          <p className="text-sm md:text-base opacity-90">Круговой турнир — 9 команд</p>
        </div>
      </header>

      {/* Navigation Tabs */}
      <nav className="bg-white shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <ul className="flex space-x-4">
            <li>
              <button
                onClick={() => setActiveTab("schedule")}
                className={`py-4 px-6 font-medium transition-colors ${
                  activeTab === "schedule"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "hover:text-blue-500"
                }`}
              >
                Календарь матчей
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("results")}
                className={`py-4 px-6 font-medium transition-colors ${
                  activeTab === "results"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "hover:text-blue-500"
                }`}
              >
                Результаты матчей
              </button>
            </li>
            <li>
              <button
                onClick={() => setActiveTab("teams")}
                className={`py-4 px-6 font-medium transition-colors ${
                  activeTab === "teams"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "hover:text-blue-500"
                }`}
              >
                Команды
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Tab: Schedule (future matches) */}
        {activeTab === "schedule" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Календарь матчей</h2>
            {upcomingRounds.map((round, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="bg-gray-100 px-4 py-3">
                  <h3 className="font-semibold">Тур {round.round}, дата: {round.date}</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {round.matches.map((match, matchIndex) => (
                    <div key={matchIndex} className="px-4 py-3 flex justify-between items-center">
                      <div className="text-sm">
                        <div className="font-medium">{match.home}</div>
                        <div className="text-xs text-gray-500">vs</div>
                        <div className="font-medium">{match.away}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Results (completed matches) */}
        {activeTab === "results" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Результаты матчей</h2>
            {completedRounds.map((round, index) => (
              <div key={index} className="bg-white rounded-lg shadow overflow-hidden mb-6">
                <div className="bg-gray-100 px-4 py-3">
                  <h3 className="font-semibold">Тур {round.round}, дата: {round.date}</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {round.matches.map((match, matchIndex) => (
                    <div key={matchIndex} className="px-4 py-3 flex justify-between items-center">
                      <div className="text-sm">
                        <div className="font-medium">{match.home}</div>
                        <div className="text-xs text-gray-500">vs</div>
                        <div className="font-medium">{match.away}</div>
                      </div>
                      <div className="text-green-600 font-medium">Результат: 3:1</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Teams */}
        {activeTab === "teams" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Участники чемпионата</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teams.map((team, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-24"></div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{team}</h3>
                    <p className="text-sm text-gray-600">
                      Локальная футбольная команда, представляющая Волжский район в чемпионате 2025 года.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-6 mt-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">© 2025 Чемпионат Волжского района по футболу</p>
          <p className="text-xs text-gray-400 mt-1">Организатор: Администрация Волжского района</p>
        </div>
      </footer>
    </div>
  );
}