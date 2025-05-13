import { useState, useEffect } from "react";

export default function App() {
  const [activeTab, setActiveTab] = useState("schedule");
  const [matchesByRound, setMatchesByRound] = useState([]);
  const [standings, setStandings] = useState([]);

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

  // Все матчи по турам (взято из PDF)
  const initialMatchesByRound = [
    {
      round: 1,
      date: "03.05",
      matches: [
        { home: "ФК Петьял", away: "ФК Карамассы", result: "" },
        { home: "ФК Приволжск", away: "ФК Помары", result: "" },
        { home: "ФК Сотнур", away: "ФК Ярамор", result: "" },
        { home: "ФК Эмеково", away: "ФК Часовенная", result: "" }
      ]
    },
    {
      round: 2,
      date: "10.05",
      matches: [
        { home: "ФК Карамассы", away: "ФК Параты", result: "" },
        { home: "ФК Петьял", away: "ФК Ярамор", result: "" },
        { home: "ФК Помары", away: "ФК Часовенная", result: "" },
        { home: "ФК Сотнур", away: "ФК Эмеково", result: "" }
      ]
    },
    {
      round: 3,
      date: "17.05",
      matches: [
        { home: "ФК Параты", away: "ФК Приволжск", result: "" },
        { home: "ФК Карамассы", away: "ФК Ярамор", result: "" },
        { home: "ФК Петьял", away: "ФК Эмеково", result: "" },
        { home: "ФК Сотнур", away: "ФК Помары", result: "" }
      ]
    },
    {
      round: 4,
      date: "24.05",
      matches: [
        { home: "ФК Ярамор", away: "ФК Параты", result: "" },
        { home: "ФК Часовенная", away: "ФК Приволжск", result: "" },
        { home: "ФК Эмеково", away: "ФК Карамассы", result: "" },
        { home: "ФК Помары", away: "ФК Петьял", result: "" }
      ]
    },
    {
      round: 5,
      date: "31.05",
      matches: [
        { home: "ФК Параты", away: "ФК Часовенная", result: "" },
        { home: "ФК Ярамор", away: "ФК Эмеково", result: "" },
        { home: "ФК Приволжск", away: "ФК Сотнур", result: "" },
        { home: "ФК Карамассы", away: "ФК Помары", result: "" }
      ]
    },
    {
      round: 6,
      date: "07.06",
      matches: [
        { home: "ФК Эмеково", away: "ФК Параты", result: "" },
        { home: "ФК Сотнур", away: "ФК Часовенная", result: "" },
        { home: "ФК Ярамор", away: "ФК Помары", result: "" },
        { home: "ФК Петьял", away: "ФК Приволжск", result: "" }
      ]
    },
    {
      round: 7,
      date: "14.06",
      matches: [
        { home: "ФК Параты", away: "ФК Сотнур", result: "" },
        { home: "ФК Помары", away: "ФК Эмеково", result: "" },
        { home: "ФК Часовенная", away: "ФК Петьял", result: "" },
        { home: "ФК Приволжск", away: "ФК Карамассы", result: "" }
      ]
    },
    {
      round: 8,
      date: "21.06",
      matches: [
        { home: "ФК Параты", away: "ФК Помары", result: "" },
        { home: "ФК Петьял", away: "ФК Сотнур", result: "" },
        { home: "ФК Карамассы", away: "ФК Часовенная", result: "" },
        { home: "ФК Ярамор", away: "ФК Приволжск", result: "" }
      ]
    },
    {
      round: 9,
      date: "28.06",
      matches: [
        { home: "ФК Параты", away: "ФК Петьял", result: "" },
        { home: "ФК Сотнур", away: "ФК Карамассы", result: "" },
        { home: "ФК Эмеково", away: "ФК Приволжск", result: "" },
        { home: "ФК Часовенная", away: "ФК Ярамор", result: "" }
      ]
    },
    {
      round: 10,
      date: "05.07",
      matches: [
        { home: "ФК Петьял", away: "ФК Параты", result: "" },
        { home: "ФК Карамассы", away: "ФК Сотнур", result: "" },
        { home: "ФК Приволжск", away: "ФК Эмеково", result: "" },
        { home: "ФК Ярамор", away: "ФК Часовенная", result: "" }
      ]
    },
    {
      round: 11,
      date: "12.07",
      matches: [
        { home: "ФК Помары", away: "ФК Параты", result: "" },
        { home: "ФК Сотнур", away: "ФК Петьял", result: "" },
        { home: "ФК Часовенная", away: "ФК Карамассы", result: "" },
        { home: "ФК Приволжск", away: "ФК Ярамор", result: "" }
      ]
    },
    {
      round: 12,
      date: "19.07",
      matches: [
        { home: "ФК Сотнур", away: "ФК Параты", result: "" },
        { home: "ФК Эмеково", away: "ФК Помары", result: "" },
        { home: "ФК Петьял", away: "ФК Часовенная", result: "" },
        { home: "ФК Карамассы", away: "ФК Приволжск", result: "" }
      ]
    },
    {
      round: 13,
      date: "26.07",
      matches: [
        { home: "ФК Параты", away: "ФК Эмеково", result: "" },
        { home: "ФК Часовенная", away: "ФК Сотнур", result: "" },
        { home: "ФК Помары", away: "ФК Ярамор", result: "" },
        { home: "ФК Приволжск", away: "ФК Петьял", result: "" }
      ]
    },
    {
      round: 14,
      date: "02.08",
      matches: [
        { home: "ФК Часовенная", away: "ФК Параты", result: "" },
        { home: "ФК Эмеково", away: "ФК Ярамор", result: "" },
        { home: "ФК Сотнур", away: "ФК Приволжск", result: "" },
        { home: "ФК Помары", away: "ФК Карамассы", result: "" }
      ]
    },
    {
      round: 15,
      date: "09.08",
      matches: [
        { home: "ФК Параты", away: "ФК Ярамор", result: "" },
        { home: "ФК Приволжск", away: "ФК Часовенная", result: "" },
        { home: "ФК Карамассы", away: "ФК Эмеково", result: "" },
        { home: "ФК Петьял", away: "ФК Помары", result: "" }
      ]
    },
    {
      round: 16,
      date: "16.08",
      matches: [
        { home: "ФК Приволжск", away: "ФК Параты", result: "" },
        { home: "ФК Ярамор", away: "ФК Карамассы", result: "" },
        { home: "ФК Эмеково", away: "ФК Петьял", result: "" },
        { home: "ФК Помары", away: "ФК Сотнур", result: "" }
      ]
    },
    {
      round: 17,
      date: "23.08",
      matches: [
        { home: "ФК Параты", away: "ФК Карамассы", result: "" },
        { home: "ФК Ярамор", away: "ФК Петьял", result: "" },
        { home: "ФК Часовенная", away: "ФК Помары", result: "" },
        { home: "ФК Эмеково", away: "ФК Сотнур", result: "" }
      ]
    },
    {
      round: 18,
      date: "30.08",
      matches: [
        { home: "ФК Карамассы", away: "ФК Петьял", result: "" },
        { home: "ФК Помары", away: "ФК Приволжск", result: "" },
        { home: "ФК Ярамор", away: "ФК Сотнур", result: "" },
        { home: "ФК Часовенная", away: "ФК Эмеково", result: "" }
      ]
    }
  ];

  // Инициализация турнирной таблицы
  useEffect(() => {
    const savedData = localStorage.getItem("volzhskyfootball-championship-2025");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setMatchesByRound(parsedData.matches);
      updateStandings(parsedData.matches);
    } else {
      setMatchesByRound(initialMatchesByRound);
      updateStandings(initialMatchesByRound);
    }
  }, []);

  // Обновление турнирной таблицы
  const updateStandings = (currentMatches) => {
    const standingsMap = {};
    teams.forEach(team => {
      standingsMap[team] = {
        team,
        points: 0,
        wins: 0,
        draws: 0,
        losses: 0,
        goalsScored: 0,
        goalsConceded: 0,
        goalDifference: 0
      };
    });

    currentMatches.forEach(round => {
      round.matches.forEach(match => {
        if (!match.result) return;
        const [homeGoals, awayGoals] = match.result.split(":").map(Number);

        standingsMap[match.home].goalsScored += homeGoals;
        standingsMap[match.home].goalsConceded += awayGoals;

        standingsMap[match.away].goalsScored += awayGoals;
        standingsMap[match.away].goalsConceded += homeGoals;

        if (homeGoals > awayGoals) {
          standingsMap[match.home].points += 3;
          standingsMap[match.home].wins += 1;
          standingsMap[match.away].losses += 1;
        } else if (homeGoals === awayGoals) {
          standingsMap[match.home].points += 1;
          standingsMap[match.away].points += 1;
          standingsMap[match.home].draws += 1;
          standingsMap[match.away].draws += 1;
        } else {
          standingsMap[match.away].points += 3;
          standingsMap[match.away].wins += 1;
          standingsMap[match.home].losses += 1;
        }
      });
    });

    const sortedStandings = Object.values(standingsMap).sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      const bGD = b.goalsScored - b.goalsConceded;
      const aGD = a.goalsScored - a.goalsConceded;
      if (bGD !== aGD) return bGD - aGD;
      return b.goalsScored - a.goalsScored;
    });

    setStandings(sortedStandings);
  };

  // Обновление результата матча
  const updateResult = (roundIndex, matchIndex, homeGoals, awayGoals) => {
    if ((homeGoals || homeGoals === "0") && (awayGoals || awayGoals === "0")) {
      const updatedRounds = [...matchesByRound];
      updatedRounds[roundIndex].matches[matchIndex].result = `${homeGoals}:${awayGoals}`;
      setMatchesByRound(updatedRounds);
      updateStandings(updatedRounds);
      localStorage.setItem("volzhskyfootball-championship-2025", JSON.stringify({ matches: updatedRounds }));
    }
  };

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
                onClick={() => setActiveTab("standings")}
                className={`py-4 px-6 font-medium transition-colors ${
                  activeTab === "standings"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "hover:text-blue-500"
                }`}
              >
                Турнирная таблица
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
        {/* Tab: Schedule */}
        {activeTab === "schedule" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Календарь матчей</h2>
            {matchesByRound.map((round, roundIndex) => (
              <div key={round.round} className="bg-white rounded-lg shadow overflow-hidden mb-6">
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
                      <div className="flex items-center space-x-2">
                        <input
                          type="number"
                          min="0"
                          max="99"
                          placeholder="Дома"
                          className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onChange={(e) => {
                            const homeGoals = e.target.value;
                            const awayGoals = document.getElementById(`away-${roundIndex}-${matchIndex}`).value;
                            updateResult(roundIndex, matchIndex, homeGoals, awayGoals);
                          }}
                        />
                        <span>:</span>
                        <input
                          id={`away-${roundIndex}-${matchIndex}`}
                          type="number"
                          min="0"
                          max="99"
                          placeholder="Гости"
                          className="w-16 px-2 py-1 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                          onChange={(e) => {
                            const homeGoals = document.getElementById(`home-${roundIndex}-${matchIndex}`).value;
                            const awayGoals = e.target.value;
                            updateResult(roundIndex, matchIndex, homeGoals, awayGoals);
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab: Results */}
        {activeTab === "results" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Результаты матчей</h2>
            {matchesByRound.map((round, roundIndex) => {
              const hasResults = round.matches.some(match => match.result !== "");
              if (!hasResults) return null;

              return (
                <div key={round.round} className="bg-white rounded-lg shadow overflow-hidden mb-6">
                  <div className="bg-gray-100 px-4 py-3">
                    <h3 className="font-semibold">Тур {round.round}, дата: {round.date}</h3>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {round.matches.map((match, matchIndex) => {
                      if (!match.result) return null;

                      return (
                        <div key={matchIndex} className="px-4 py-3 flex justify-between items-center">
                          <div className="text-sm">
                            <div className="font-medium">{match.home}</div>
                            <div className="text-xs text-gray-500">vs</div>
                            <div className="font-medium">{match.away}</div>
                          </div>
                          <div className="text-green-600 font-medium">Результат: {match.result}</div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Tab: Standings */}
        {activeTab === "standings" && (
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Турнирная таблица</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Команда</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Очки</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Победы</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ничьи</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Поражения</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Голы</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Разница</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {standings.map((team, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{index + 1}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{team.team}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{team.points}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.wins}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.draws}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.losses}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.goalsScored}:{team.goalsConceded}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{team.goalsScored - team.goalsConceded}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
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