import React from 'react';

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "Verified Buyer",
        content: "BMGOIL completely transformed my routine. The natural scent and texture are simply unmatched. I use it every single day without fail.",
        avatar: "https://picsum.photos/100/100?random=1"
    },
    {
        name: "Michael Chen",
        role: "Skincare Enthusiast",
        content: "Minimalist design, maximum results. I love the transparency of the brand and the quality of the oil is noticeable from the first drop.",
        avatar: "https://picsum.photos/100/100?random=2"
    }
];

const Testimonials: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-serif text-center mb-16">Testimonials</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {testimonials.map((t, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-8 bg-cream rounded-3xl">
                            <img
                                src={t.avatar}
                                alt={t.name}
                                className="w-16 h-16 rounded-full mb-6 border-2 border-white shadow-md"
                            />
                            <p className="text-gray-600 italic mb-6 leading-relaxed">"{t.content}"</p>
                            <h4 className="font-bold text-sm uppercase tracking-widest text-secondary">{t.name}</h4>
                            <span className="text-gray-400 text-[10px] uppercase tracking-[0.2em]">{t.role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
