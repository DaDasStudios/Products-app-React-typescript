import React from 'react'
type CardProps = {
    children: React.ReactNode
}

export const Card = ({children}: CardProps) => {
    return (
        <div className="bg-white hover:bg-gray-100 transition-colors lg:transform lg:transition-transform lg:hover:scale-105  shadow-md shadow-gray-300 rounded-lg cursor-pointer max-w-[400px] overflow-hidden">
            {children}
        </div>
    );
};
