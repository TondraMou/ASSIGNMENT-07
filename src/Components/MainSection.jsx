import { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PlayerCard from './PlayerCard';

const MainSection = ({ userCoins, setUserCoins }) => {
    const [availablePlayers, setAvailablePlayers] = useState([]);
    const [selectedPlayers, setSelectedPlayers] = useState([]);
    const [showAvailable, setShowAvailable] = useState(true);

    useEffect(() => {
        fetch('/players.json')
            .then(response => response.json())
            .then(data => setAvailablePlayers(data))
            .catch(error => console.error('Error fetching player data:', error));
    }, []);

    const handleChoosePlayer = (player) => {
        if (selectedPlayers.length >= 6) {
            toast.error('You can only select up to 6 players.', { position: "top-center" });
            return;
        }

        const existingPlayer = selectedPlayers.find(p => p.playerId === player.playerId);
        
        if (existingPlayer) {
            toast.error('Player is already selected.', { position: "top-center" });
            return;
        }

        if (userCoins >= player.price) {
            setUserCoins(userCoins - player.price);
            setSelectedPlayers([...selectedPlayers, player]);
            toast.success(`${player.name} has been selected!`, { position: "top-center" });
        } else {
            toast.error('Insufficient coins.', { position: "top-center" });
        }
    };

    const handleRemovePlayer = (player) => {
        setUserCoins(userCoins + player.price);
        setSelectedPlayers(selectedPlayers.filter(p => p.playerId !== player.playerId));
    };

    const handleToggle = () => {
        setShowAvailable(!showAvailable);
    };

    return (
        <div className="p-8 mb-40">
            <ToastContainer position="top-center" autoClose={3000} />

            <div className="w-11/12 mx-auto mb-10 flex justify-between items-center mt-6">
                <h2 className="text-2xl font-bold">
                    {showAvailable ? 'Available Players' : `Selected Players (${selectedPlayers.length}/6)`}
                </h2>
                <div className="space-x-4">
                    <button
                        className={`px-4 py-2 rounded ${showAvailable ? 'bg-[#E7FE29]' : 'bg-gray-300'}`}
                        onClick={() => setShowAvailable(true)}
                    >
                        Available
                    </button>
                    <button
                        className={`px-4 py-2 rounded ${!showAvailable ? 'bg-[#E7FE29]' : 'bg-gray-300'}`}
                        onClick={() => setShowAvailable(false)}
                    >
                        Selected ({selectedPlayers.length}/6)
                    </button>
                </div>
            </div>

            {showAvailable ? (
                <div className="w-11/12 mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
                    {availablePlayers.map(player => (
                        <PlayerCard
                            key={player.playerId}
                            player={player}
                            onChoose={() => handleChoosePlayer(player)}
                            userCoins={userCoins}
                        />
                    ))}
                </div>
            ) : (
                <div className="w-11/12 mx-auto space-y-4">
                    {selectedPlayers.length === 0 ? (
                        <p>No players selected yet.</p>
                    ) : (
                        selectedPlayers.map(player => (
                            <div
                                key={player.playerId}
                                className="flex justify-between items-center p-4 bg-white shadow rounded-lg"
                            >
                                <div className="flex items-center space-x-4">
                                    <img src={player.image} alt={player.name} className="w-12 h-12 object-cover rounded-full" />
                                    <div>
                                        <h3 className="font-semibold">{player.name}</h3>
                                        <p className="text-sm">{player.role}</p>
                                    </div>
                                </div>
                                <i onClick={() => handleRemovePlayer(player)} className="ri-delete-bin-line text-red-700"></i>
                            </div>
                        ))
                    )}
                    <div className="flex justify-start">
                        <button
                            className="px-4 py-2 bg-[#E7FE29] text-black rounded"
                            onClick={handleToggle}
                        >
                            Add More
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MainSection;