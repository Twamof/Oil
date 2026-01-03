import React from 'react';

const products = [
    {
        name: "Ultra Volume Root Fuel",
        price: "$24.00",
        image: "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Ultra Protein Hair Oil",
        price: "$34.00",
        image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Ultra Scaling Ampoule Shampoo",
        price: "$28.00",
        image: "https://images.unsplash.com/photo-1556227702-d1e4e7b5c232?auto=format&fit=crop&q=80&w=400"
    },
    {
        name: "Ultra Protein Ampoule Shampoo",
        price: "$24.00",
        image: "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=400"
    }
];

const ProductGrid: React.FC = () => {
    return (
        <section className="py-24 px-6 md:px-12 bg-cream">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-serif mb-4">Our Products</h2>
                    <p className="text-gray-500 text-xs uppercase tracking-[0.2em]">Crafted for pure rejuvenation</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
                    {products.map((p, i) => (
                        <div key={i} className="group cursor-pointer">
                            <div className="aspect-[4/5] bg-white rounded-2xl overflow-hidden mb-6 relative">
                                <div className="absolute inset-0 bg-[#fddc8e] opacity-0 group-hover:opacity-20 transition-opacity"></div>
                                <img
                                    src={p.image}
                                    alt={p.name}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 right-4 bg-[#ff6b35] text-white text-[10px] w-8 h-8 rounded-full flex items-center justify-center font-bold">
                                    NEW
                                </div>
                            </div>
                            <h3 className="text-sm font-medium mb-1">{p.name}</h3>
                            <p className="text-[#ff6b35] text-sm font-bold">{p.price}</p>
                            <button className="mt-4 text-[10px] uppercase tracking-widest font-bold border-b border-black pb-1 hover:text-gray-500 transition-colors">
                                Order Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
