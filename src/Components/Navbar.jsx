
import logo from "../assets/logo.png"

const Navbar = ({ coins }) => {

    
    return (
        <div>
            <nav className="py-4 px-6 flex items-center justify-between w-11/12 mx-auto">
                <div className="flex items-center">
                     <img src={logo} alt="Cricket Logo" className="w-[73px]" />
                </div>
                <ul className="flex gap-12 mt-2">
                    <li><a href="" className="text-gray-500">Home</a></li>
                    <li><a href="" className="text-gray-500">Fixture</a></li>
                    <li><a href="" className="text-gray-500">Teams</a></li>
                    <li><a href="" className="text-gray-500">Schedules</a></li>
                    <div className="border border-slate-100 rounded-lg px-4 py-2 -mt-2 gap-2 flex">
                    <h3 className="text-gray-700 font-semibold">{coins} Coin</h3>
                    <i className="ri-money-dollar-circle-fill text-yellow-500 text-base"></i>
                    </div>
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;