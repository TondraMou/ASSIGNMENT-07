

const PlayerCard = ({ player, onChoose, userCoins }) => (
    <div className="card card-compact bg-base-100 w-[100%] shadow-xl">
    <figure>
      <img
        src={player.image} className="w-full h-[460px] object-cover"
        alt="Shoes" />
    </figure>
    <div className="card-body">
      <div className="flex gap-2">
      <i className="ri-user-fill mt-1"></i>
      <h2 className="card-title">{player.name}</h2>
      </div>
      <div className="flex justify-between">
      <div className="flex gap-2">
      <i className="ri-flag-fill text-gray-400"></i>
      <p className="text-gray-400">{player.country}</p>
      </div>
      <button className="btn w-[119px] h-[36px] -mt-4 text-gray-400">{player.role}</button>
      </div>
      <hr />
      <div className="flex">
        <p className="flex-start flex">{player.battingStyle}</p>
        <p className="flex justify-end">{player.bowlingStyle}</p>
      </div>
      <div className="flex">
        <p className="mt-3 font-bold">Price:{player.price}</p>
        <button className={`btn ${userCoins >= player.price ? 'bg-[#E7FE29]' : 'bg-gray-50'}`} onClick={onChoose}>Choose Player</button>
      </div>
    </div>
  </div>
);

export default PlayerCard;

