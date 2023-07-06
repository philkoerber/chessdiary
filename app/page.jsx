import ChessboardParent from "./ChessboardParent";

export default function Home() {
  const arandomfen = "1B5K/4P3/5p1R/1p1p2P1/1P5P/2P4N/q6p/1kn5 w - - 0 1"
  return (
    <main className="">
      <ChessboardParent fen={arandomfen} />
    </main>
  )
}
