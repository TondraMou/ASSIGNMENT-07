import shadow from "../assets/bg-shadow.png";
import footerLogo from "../assets/logo-footer.png"

const Footer = () => {
    return (
        <div className="relative bg-[#0f0f0f] text-white pt-20">
            <div className="absolute -top-32 left-1/2 transform -translate-x-1/2 w-[80%] h-[336px] rounded-lg text-center bg-slate-100 bg-cover border border-gray-200" style={{
        backgroundImage: `url(${shadow})`,
      }}>
                <div className="p-8">
                <h2 className="text-2xl mt-20 text-black font-bold mb-2">Subscribe to our Newsletter</h2>
                <p className="mb-4 text-[#131313B3]">Get the latest updates and news right in your inbox!</p>
                <form className="flex justify-center items-center space-x-2">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-2 w-64 rounded-l-lg border-gray-400 border text-black"
                    />
                    <button type="submit" className="bg-gradient-to-r from-yellow-400 to-pink-500 px-4 py-2 rounded-r-lg text-black font-semibold">
                        Subscribe
                    </button>
                </form>
                </div>
            </div>

            <footer className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8 py-32">
                <div className="flex justify-center mt-6">
                    <img src={footerLogo} alt="" />
                </div>
                <div className="flex flex-col md:flex-row justify-between items-start mt-12">
                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <h2 className="text-xl font-bold mb-2">About Us</h2>
                        <p className="text-gray-300">We are a passionate team dedicated to providing the best services to our customers.</p>
                    </div>

                    <div className="mb-8 md:mb-0 md:w-1/3">
                        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                        <ul>
                            <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">Home</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">Services</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">About</a></li>
                            <li className="mb-1"><a href="#" className="text-gray-300 hover:underline">Contact</a></li>
                        </ul>
                    </div>

                    <div className="md:w-1/3">
                        <h2 className="text-xl font-bold mb-2">Subscribe</h2>
                        <p className="mb-4 text-gray-300">Subscribe to our newsletter for the latest updates.</p>
                        <form className="flex">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="p-2 w-full rounded-l-lg text-black"
                            />
                            <button type="submit" className="bg-gradient-to-r from-yellow-400 to-pink-500 px-4 rounded-r-lg text-black font-semibold">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
                <hr className="mt-8" />

                <div className="text-center mt-8 text-sm">
                    <p>©2024 Tondra Mou. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default Footer;