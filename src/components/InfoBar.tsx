import React from 'react';

const infoItems = [
    { label: 'Ingredients', value: '100% Organic' },
    { label: 'Material', value: 'Beauty Grade' },
    { label: 'Flavor', value: 'Botanical' },
    { label: 'Volume', value: '100ml' },
    { label: 'Delivery', value: 'Free' },
];

const InfoBar: React.FC = () => {
    return (
        <div className="bg-[#2a2a2a] text-white py-8 px-6 overflow-x-auto">
            <div className="max-w-7xl mx-auto flex justify-between items-center min-w-[800px]">
                {infoItems.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center flex-1">
                        <span className="text-[9px] uppercase tracking-[0.3em] text-gray-400 mb-2">{item.label}</span>
                        <span className="text-sm font-medium tracking-wide">{item.value}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfoBar;
