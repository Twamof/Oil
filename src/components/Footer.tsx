import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#1a1a1a] text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center border-b border-gray-800 pb-20">
                <div>
                    <h2 className="text-3xl font-serif mb-4">Subscribe for Updates</h2>
                    <p className="text-gray-500 text-sm max-w-sm">
                        Stay informed about our latest launches and exclusive offers from the world of botanical healing.
                    </p>
                </div>
                <div className="flex w-full">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="flex-1 bg-transparent border-b border-gray-700 py-4 text-sm focus:outline-none focus:border-[#ff6b35] transition-colors"
                    />
                    <button className="bg-[#ff6b35] px-8 py-4 text-[10px] uppercase tracking-widest font-bold hover:bg-white hover:text-black transition-colors">
                        Subscribe
                    </button>
                </div>
            </div>

            <div className="max-w-7xl mx-auto pt-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
                <div className="text-xl font-serif font-bold tracking-tight">
                    Healing Bird <span className="text-[10px] font-sans font-light uppercase tracking-widest text-gray-500">BMGOIL</span>
                </div>

                <div className="flex space-x-8 text-[10px] uppercase tracking-widest text-gray-400">
                    <a href="#" className="hover:text-white transition-colors">Instagram</a>
                    <a href="#" className="hover:text-white transition-colors">Facebook</a>
                    <a href="#" className="hover:text-white transition-colors">Twitter</a>
                    <a href="#" className="hover:text-white transition-colors">Pinterest</a>
                </div>

                <div className="text-gray-500 text-[10px] uppercase tracking-widest text-center md:text-right">
                    <p>&copy; 2024 Healing Bird. All Rights Reserved.</p>
                    <p className="mt-2 text-gray-600">
                        Site created and developed by <a href="https://vertex-digital-digital.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#ff6b35] transition-colors">VERTEX DIGITAL</a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
