import DecorativeElements from '../components/DecorativeElements';
import PrimaryButton from '../components/PrimaryButton';

function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#1b1b32] relative overflow-hidden">
      <div className="text-center">
        <div className="w-40 h-40 bg-[#0074fc] rounded-full flex justify-center items-center mx-auto shadow-lg">
          <h1 className="text-white text-2xl font-bold leading-tight">
            Tic
            <br />
            Tac
            <br />
            Toe
          </h1>
        </div>

        <PrimaryButton href="/settings" label="Get Started" />
      </div>

      <DecorativeElements />
    </div>
  );
}

export default Home;
