import React from "react";

interface CardProps {
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ title, description }) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-72 hover:shadow-xl transition">
      <h2 className="text-lg font-bold text-green-700 mb-3">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default Card;
