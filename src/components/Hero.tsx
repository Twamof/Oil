import React from 'react';

const Hero: React.FC = () => {
    return (
        <section className="relative overflow-hidden px-6 py-12 md:px-12 md:py-24 bg-cream">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Social Vertical Sidebar (Decorative) */}
                <div className="hidden lg:flex flex-col absolute left-8 top-1/2 -translate-y-1/2 space-y-8 text-[10px] uppercase tracking-[0.3em] rotate-[-90deg] origin-left text-gray-400">
                    <span className="cursor-pointer hover:text-black">Facebook</span>
                    <span className="cursor-pointer hover:text-black">Instagram</span>
                    <span className="cursor-pointer hover:text-black">Twitter</span>
                </div>

                {/* Text Content */}
                <div className="z-10 order-2 md:order-1">
                    <div className="inline-block px-3 py-1 bg-[#fddc8e] text-black text-[9px] uppercase tracking-[0.2em] font-bold mb-6">
                        Healing Bird Essential
                    </div>
                    <h1 className="text-6xl md:text-8xl font-serif leading-tight mb-8">
                        Ultra <br />
                        Magique <br />
                        BMG Oil
                    </h1>
                    <p className="text-gray-600 text-sm leading-relaxed max-w-sm mb-10">
                        A premium, highly concentrated natural oil that captures the essence of 100% pure botanical extracts. 112 drops of pure magic for your daily healing ritual.
                    </p>
                    <button className="bg-[#ff6b35] text-white px-8 py-4 text-xs uppercase tracking-widest font-bold hover:bg-black transition-colors shadow-lg shadow-[#ff6b35]/20">
                        Buy Now | $39.99
                    </button>
                </div>

                {/* Image Showcase */}
                <div className="relative order-1 md:order-2 flex justify-center items-center">
                    {/* Circular Background Accent */}
                    <div className="absolute w-[80%] aspect-square bg-[#fddc8e] rounded-full opacity-40 blur-3xl"></div>

                    {/* Main Product Image */}
                    <div className="relative z-10 w-full max-w-sm transform hover:translate-y-[-10px] transition-transform duration-700">
                        <img
                            src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800"
                            alt="BMG Oil Bottle"
                            className="w-full h-auto object-contain drop-shadow-[0_35px_35px_rgba(0,0,0,0.15)]"
                        />
                        {/* Decorative Elements */}
                        <div className="absolute -top-10 -right-10 w-32 h-32 opacity-80 animate-[float_6s_ease-in-out_infinite]">
                            <img src="https://images.unsplash.com/photo-1542382257-80dedb725088?auto=format&fit=crop&q=80&w=200" alt="leaf" className="w-full h-full object-contain rotate-12" />
                        </div>
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 opacity-40">
                            <img src="https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&q=80&w=200" alt="leaf" className="w-full h-full object-contain -rotate-45" />
                        </div>
                    </div>

                    {/* Floating Details */}
                    <div className="absolute right-0 bottom-20 z-20 flex flex-col items-end space-y-4">
                        <div className="h-px w-12 bg-black"></div>
                        <div className="text-[10px] uppercase tracking-widest font-bold">Design</div>
                        <div className="text-[10px] uppercase tracking-widest font-bold">Size</div>
                        <div className="text-[10px] uppercase tracking-widest font-bold">Color</div>
                    </div>
                </div>
            </div>

            <style>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-20px) rotate(15deg); }
          100% { transform: translateY(0px) rotate(12deg); }
        }
      `}</style>
        </section>
    );
};

export default Hero;
