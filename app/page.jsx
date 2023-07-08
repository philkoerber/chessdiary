import GamePlayer from "./GamePlayer";

const fetchTopGamesByPosition = async () => {
  try {
        const response = await fetch(
          'https://explorer.lichess.ovh/masters?play=d2d4'
        );
        const data = await response.json();
    return ({
      opening: data.opening,
      topGames: data.topGames
        });
      } catch (error) {
        console.log('Error fetching games data:', error);
      }
}

const fetchGameById = async (id) => {
  try {
    const response = await fetch(
      `https://lichess.org/game/export/${id}?pgnInJson=true`,
      {
        headers: {
          Accept: 'application/json'
        }
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Error fetching game data:', error);
  }
};

export default async function Home() {

  const data = await fetchTopGamesByPosition()
  const game = await fetchGameById(data.topGames[2].id)

  return (
    <main className="">
      <GamePlayer game={game} />
    </main>
  )
}
