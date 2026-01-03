import React from 'react';
import { Star, Leaf, FlaskConical, Eye } from 'lucide-react';

const features = [
    {
        icon: <Star className="text-[#ff6b35]" />,
        title: "Best Hair Care Item",
        desc: "Ranked as the premium choice for restorative care, helping nourish and repair damaged cuticles."
    },
    {
        icon: <Leaf className="text-[#ff6b35]" />,
        title: "Sustainable Practices",
        desc: "We prioritize sustainability in every aspect, from organic sourcing to eco-friendly packaging."
    },
    {
        icon: <FlaskConical className="text-[#ff6b35]" />,
        title: "Advance Formula",
        desc: "Crafted with 112 precise drops of naturally-infused oil and essential nutrients for maximum potency."
    },
    {
        icon: <Eye className="text-[#ff6b35]" />,
        title: "Transparency",
        desc: "We maintain complete traceability, ensuring every drop of BMGOIL is pure and ethically sourced."
    }
];

const WhyChoose: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-white overflow-hidden" id="about">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl md:text-5xl font-serif mb-6">Why Choose Healing Bird?</h2>
                <p className="text-gray-400 text-xs max-w-xl mx-auto leading-loose mb-20 uppercase tracking-widest">
                    Discover the unique blend of botanical excellence and modern science. Pure, potent, and ethical.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center relative">
                    {/* Left Features */}
                    <div className="space-y-16 text-right order-2 lg:order-1">
                        {features.slice(0, 2).map((f, i) => (
                            <div key={i} className="flex flex-col items-end group">
                                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform text-secondary">
                                    {f.icon}
                                </div>
                                <h3 className="text-lg font-medium mb-3">
                                    {f.title}
                                </h3>
                                <p className="text-gray-500 text-xs leading-relaxed max-w-[240px]">
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Center Product Image Showcase */}
                    <div className="relative order-1 lg:order-2 flex justify-center items-center py-12">
                        {/* Decorative Background Circles */}
                        <div className="absolute w-80 h-80 bg-[#f9f8f4] rounded-full z-0 shadow-inner"></div>
                        <div className="absolute w-64 h-64 border border-[#fddc8e]/40 rounded-full z-0 animate-spin-slow"></div>

                        {/* Main Image - Using a verified high-quality cosmetic asset */}
                        <div className="relative z-10 w-64 h-80 flex items-center justify-center">
                            <img
                                src="https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&q=80&w=800"
                                alt="Featured Product"
                                className="w-full h-full object-contain transform -rotate-6 hover:rotate-0 transition-transform duration-700 drop-shadow-[0_25px_35px_rgba(0,0,0,0.12)]"
                            />
                        </div>

                        {/* Floating Sparkles */}
                        <div className="absolute top-4 left-1/4 text-[#ff6b35] animate-bounce text-xl opacity-60">✦</div>
                        <div className="absolute bottom-12 right-1/4 text-[#ff6b35] animate-pulse text-xl opacity-60">✦</div>
                    </div>

                    {/* Right Features */}
                    <div className="space-y-16 text-left order-3">
                        {features.slice(2, 4).map((f, i) => (
                            <div key={i} className="flex flex-col items-start group">
                                <div className="w-12 h-12 rounded-full bg-cream flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    {f.icon}
                                </div>
                                <h3 className="text-lg font-medium mb-3">{f.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed max-w-[240px]">
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChoose;
