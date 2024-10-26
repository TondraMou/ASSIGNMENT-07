import bannerMain from "../assets/banner-main.png";
import bgShadow from "../assets/bg-shadow.png";


const Banner = ({ coins, setCoins }) => {
  const handleIncreaseCoins = () => {
    setCoins(coins + 500000);
  };

  return (
    <section
      className="bg-cover bg-center text-center text-white py-16 bg-black w-11/12 mx-auto border rounded-lg"
      style={{
        backgroundImage: `url(${bgShadow})`,
      }}
    >
      
      <div className="mx-auto">
        <div className="flex justify-center mb-6">
        <img src={bannerMain} alt="" />
        </div>
        <h1 className="text-4xl font-bold mb-4">Assemble Your Ultimate Dream 11 Cricket Team</h1>
        <p className="text-xl mb-6">Beyond Boundaries, Beyond Limits</p>
        <div className="border border-[#E7FE29] rounded-lg p-1 w-[200px] mx-auto">
        <button
          onClick={handleIncreaseCoins}
          className="bg-[#E7FE29] hover:bg-yellow-600 text-black font-semibold py-2 px-6 rounded-lg shadow-lg w-full"
        >
          Claim Free Credit
        </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
