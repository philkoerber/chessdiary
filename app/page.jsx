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
  const game2 = await fetchGameById(data.topGames[8].id)
  const game3 = await fetchGameById(data.topGames[1].id)
  


  return (
    <main className="m-4">
      <div className="flex flex-col justify-center items-center gap-3">
        <GamePlayer game={game} boardId={1} />
        <GamePlayer game={game2} boardId={2} />
        <GamePlayer game={game3} boardId={3}/>
      </div>
      
      
    </main>
  )
}
