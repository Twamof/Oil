import React from 'react';
import { Search, ShoppingBag, User } from 'lucide-react';

const Header: React.FC = () => {
    return (
        <header className="sticky top-0 z-50 bg-cream/80 backdrop-blur-sm px-6 py-4 md:px-12 md:py-6">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* Logo */}
                <div className="text-2xl font-serif font-bold tracking-tight text-secondary">
                    Healing Bird <span className="text-sm font-sans font-light block -mt-1 uppercase tracking-[0.2em] text-gray-500">BMGOIL</span>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8 text-xs font-medium uppercase tracking-widest text-gray-600">
                    <a href="#ingredients" className="hover:text-black transition-colors">Ingredients</a>
                    <a href="#store" className="hover:text-black transition-colors">Store</a>
                    <a href="#blog" className="hover:text-black transition-colors">Blog</a>
                    <a href="#about" className="hover:text-black transition-colors">About Us</a>
                </nav>

                {/* Icons */}
                <div className="flex items-center space-x-5 text-gray-700">
                    <button className="hover:text-black transition-colors"><Search size={20} /></button>
                    <button className="hover:text-black transition-colors relative">
                        <ShoppingBag size={20} />
                        <span className="absolute -top-1 -right-1 bg-[#ff6b35] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
                    </button>
                    <button className="hover:text-black transition-colors"><User size={20} /></button>
                </div>
            </div>
        </header>
    );
};

export default Header;
